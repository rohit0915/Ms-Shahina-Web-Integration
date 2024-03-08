/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import { Table, Alert, Modal, Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";
import SpinnerComp from "../Component/SpinnerComp";
import { Editor_desciption, View_description } from "../../../Helper/Helper";

const Blog = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [id, setId] = useState(null);
  const [edit, setEdit] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [desc, setDesc] = useState("");
  const [descModal, setDescModal] = useState(false);
  const [blogData, setBlogData] = useState({});

  const token = localStorage.getItem("AdminToken");
  const Auth = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);
  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.React_App_Baseurl}api/v1/News/getNews`
      );
      setData(data.data);
      setTotal(data.data.length);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function MyVerticallyCenteredModal(props) {
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDesc] = useState("");
    const [keyWords, setKeyWords] = useState([]);
    const [keywordItem, setKeywordItem] = useState("");

    const pushKeywords = () => {
      setKeyWords((prev) => [...prev, keywordItem]);
      setKeywordItem("");
    };

    const remove_keywords = (index) => {
      setKeyWords((prev) => prev.filter((_, i) => i !== index));
    };

    useEffect(() => {
      if (props.show && edit) {
        setDesc(blogData?.description);
        setTitle(blogData?.title);
        if (blogData?.keyWords?.length > 0) {
          setKeyWords(blogData?.keyWords?.map((i) => i));
        }
      }
    }, [props, edit]);

    const fd = new FormData();
    fd.append("description", description);
    fd.append("image", image);
    fd.append("title", title);
    Array.from(keyWords).forEach((i) => {
      fd.append("keyWords[]", i);
    });

    const postHandler = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(
          `${process.env.React_App_Baseurl}api/v1/News/addNews`,
          fd,
          Auth
        );
        toast.success(data.message);
        props.onHide();
        fetchData();
      } catch (e) {
        console.log(e);
      }
    };

    const putHandler = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.put(
          `${process.env.React_App_Baseurl}api/v1/News/updateNews/${id}`,
          fd,
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
        size="lg"
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
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Editor_desciption
              setDescription={setDesc}
              description={description}
              label={"Description"}
            />

            <Form.Group className="mb-3">
              <Form.Label>Keywords</Form.Label>
              <Form.Control
                type="text"
                value={keywordItem}
                onChange={(e) => setKeywordItem(e.target.value)}
                className="mb-3"
              />

              <Button variant="dark" onClick={() => pushKeywords()}>
                Add
              </Button>

              {keyWords?.map((i, index) => (
                <ul
                  className="mt-2"
                  style={{
                    border: "1px solid #000",
                    paddingTop: "10px",
                    paddingBottom: "20px",
                  }}
                >
                  <li style={{ listStyle: "disc" }} className="mt-1">
                    {i}
                  </li>

                  <li className="mt-3" style={{ listStyle: "none" }}>
                    <Button onClick={() => remove_keywords(index)}>
                      Remove This One
                    </Button>
                  </li>
                </ul>
              ))}
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
        `${process.env.React_App_Baseurl}api/v1/News/${ide}`,
        Auth
      );
      toast.success(data.message);
      fetchData();
    } catch (e) {
      const msg = e.response.data.message;
      toast.error(msg);
    }
  };

  function DescriptionModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Description
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <View_description description={desc?.description} />
          {desc?.keyWords?.length > 0 && (
            <>
              <hr />
              <h2>Keywords</h2>
              <ul className="keyword-container">
                {desc?.keyWords?.map((i, index) => (
                  <li key={`keyword-container${index}`}> {i} </li>
                ))}
              </ul>
            </>
          )}
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <DescriptionModal show={descModal} onHide={() => setDescModal(false)} />

      <section className="sectionCont">
        <div className="pb-4  w-full flex justify-between items-center">
          <span
            className="tracking-widest text-slate-900 font-semibold uppercase"
            style={{ fontSize: "1.5rem" }}
          >
            All Blog's ( Total : {total} )
          </span>
          <div className="d-flex gap-1">
            <button
              className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[#0c0c0c] text-white tracking-wider"
              onClick={() => {
                setEdit(false);
                setModalShow(true);
              }}
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
                      <th>Image</th>
                      <th>Title</th>
                      <th>Descriptions</th>
                      <th> Options </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.map((i, index) => (
                      <tr key={index}>
                        <td> #{index + 1} </td>
                        <td style={{ cursor: "pointer" }}>
                          <div className="CarouselImages">
                            <img src={i.image} alt="" />
                          </div>
                        </td>

                        <td> {i.title} </td>
                        <td>
                          <span
                            onClick={() => {
                              setDesc(i);

                              setDescModal(true);
                            }}
                            style={{
                              marginLeft: "10px",
                              color: "blue",
                              cursor: "pointer",
                            }}
                          >
                            View
                          </span>
                        </td>
                        <td>
                          <span className="flexCont">
                            <i
                              className="fa-solid fa-pen-to-square"
                              onClick={() => {
                                setId(i._id);
                                setEdit(true);
                                setBlogData(i);
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
      </section>
    </>
  );
};

export default HOC(Blog);
