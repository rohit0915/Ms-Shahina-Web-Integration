/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import { Table, Alert, Modal, Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";
import SpinnerComp from "../Component/SpinnerComp";
import { Editor_desciption, View_description } from "../../../Helper/Helper";

const Faq = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [id, setId] = useState(null);
  const [edit, setEdit] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [faq, setFaq] = useState([]);

  const token = localStorage.getItem("AdminToken");
  const Auth = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.React_App_Baseurl}api/v1/static/faq/All`
      );
      setData(data.data);
      setTotal(data.data.length);
    } catch (e) {
      console.log(e);
    }
  };

  const MembershipFaq = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.React_App_Baseurl}api/v1/static/faq/AllMembershipFaqs`
      );
      setFaq(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
    MembershipFaq();
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);
  function MyVerticallyCenteredModal(props) {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [type, setType] = useState("");

    const payload = { question, answer, type };

    const postHandler = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(
          `${process.env.React_App_Baseurl}api/v1/static/faq/createFaq`,
          payload,
          Auth
        );
        toast.success(data.message);
        props.onHide();
        fetchData();
        MembershipFaq();
      } catch (e) {
        console.log(e);
      }
    };

    const putHandler = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.put(
          `${process.env.React_App_Baseurl}api/v1/static/faq/${id}`,
          payload,
          Auth
        );
        toast.success(data.message);
        props.onHide();
        fetchData();
      } catch (e) {
        console.log(e);
      }
    };

    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {" "}
            {edit ? "Edit" : "Create New"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={edit ? putHandler : postHandler}>
            <Editor_desciption
              setDescription={setQuestion}
              description={question}
              label={"Question"}
            />
            <Editor_desciption
              setDescription={setAnswer}
              description={answer}
              label={"Answer"}
            />

            <Form.Group className="mb-3">
              <Form.Select onChange={(e) => setType(e.target.value)}>
                <option>Select your prefrence </option>
                <option>Membership </option>
                <option>Normal</option>
              </Form.Select>
            </Form.Group>
            <Button
              style={{ backgroundColor: "#19376d", borderRadius: "0" }}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  const deleteHandler = async (ide) => {
    try {
      const { data } = await axios.delete(
        `${process.env.React_App_Baseurl}api/v1/static/faq/${ide}`,
        Auth
      );
      toast.success(data.message);
      fetchData();
      MembershipFaq();
    } catch (e) {
      const msg = e.response.data.message;
      toast.error(msg);
    }
  };

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <section className="sectionCont">
        <div className="pb-4  w-full flex justify-between items-center">
          <span
            className="tracking-widest text-slate-900 font-semibold uppercase"
            style={{ fontSize: "1.5rem" }}
          >
            All FAQ ( Total : {total} )
          </span>
          <div className="d-flex gap-1">
            <button
              className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[#0c0c0c] text-white tracking-wider"
              onClick={() => setModalShow(true)}
            >
              Create New
            </button>
          </div>
        </div>

        {data?.length === 0 || !data ? (
          <SpinnerComp />
        ) : (
          <>
            <div className="overFlowCont">
              {data?.docs?.length === 0 || !data ? (
                <Alert>No Product Found</Alert>
              ) : (
                <Table>
                  <thead>
                    <tr>
                      <th>Sno.</th>
                      <th>Question</th>
                      <th>Answer</th>
                      <th> </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.map((i, index) => (
                      <tr key={index}>
                        <td> #{index + 1} </td>
                        <td>
                          <View_description description={i.question} />
                        </td>
                        <td>
                          <View_description description={i.answer} />
                        </td>
                        <td>
                          <span className="flexCont">
                            <i
                              className="fa-solid fa-pen-to-square"
                              onClick={() => {
                                setId(i._id);
                                setEdit(true);
                                setModalShow(true);
                              }}
                            />

                            <i
                              className="fa-sharp fa-solid fa-trash"
                              onClick={() => deleteHandler(i._id)}
                            ></i>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
            </div>
          </>
        )}

        <div className="pb-4  w-full flex justify-between items-center">
          <span
            className="tracking-widest text-slate-900 font-semibold uppercase"
            style={{ fontSize: "1.5rem" }}
          >
            All Membership FAQ's{" "}
          </span>
        </div>

        <div className="overFlowCont">
          {faq?.length === 0 || !faq ? (
            <Alert>No Product Found</Alert>
          ) : (
            <Table>
              <thead>
                <tr>
                  <th>Sno.</th>
                  <th>Question</th>
                  <th>Answer</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                {faq?.map((i, index) => (
                  <tr key={index}>
                    <td> #{index + 1} </td>
                    <td>
                      <View_description description={i.question} />
                    </td>
                    <td>
                      <View_description description={i.answer} />
                    </td>
                    <td>
                      <span className="flexCont">
                        <i
                          className="fa-solid fa-pen-to-square"
                          onClick={() => {
                            setId(i._id);
                            setEdit(true);
                            setModalShow(true);
                          }}
                        />

                        <i
                          className="fa-sharp fa-solid fa-trash"
                          onClick={() => deleteHandler(i._id)}
                        ></i>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </div>
      </section>
    </>
  );
};

export default HOC(Faq);
