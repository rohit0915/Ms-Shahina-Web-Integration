/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import { Table, Modal, Form, Button, Alert } from "react-bootstrap";
import Select from "react-select";
import {
  createSubadmin,
  editSubadmin,
  getAllSubAdmin,
  showMsg,
} from "../../../Respo/Api";
import axios from "axios";

const Subadmin = () => {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [id, setId] = useState(null);
  const [edit, setEdit] = useState(false);
  const [view, setView] = useState(false);
  const [singleData, setSingleData] = useState({});

  const fetchHandler = () => {
    getAllSubAdmin(setData);
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  function MyVerticallyCenteredModal(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [countryCode, setCountryCode] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDob] = useState("");
    const [permissions, setPermissions] = useState([]);
    const [password, setPassword] = useState("");

    const options = [
      { value: "dashboard", label: "Dashboard" },
      { value: "Product", label: "Product" },
      { value: "service", label: "Service" },
      { value: "gallery", label: "Gallery" },
      { value: "getblog", label: "Blog" },
      { value: "privacy-policy", label: "Privacy Policy" },
      { value: "terms", label: "Terms" },
      { value: "brand", label: "Brand" },
      { value: "Product-type", label: "Product Type" },
      { value: "skin-condition", label: "Skin Condition" },
      { value: "brand", label: "Brand" },
      { value: "skinType", label: "Skin Type" },
      { value: "Category", label: "Category" },
      { value: "subscription", label: "Subscription" },
      { value: "reviews", label: "Reviews" },
      { value: "about-us", label: "About us" },
      { value: "faq", label: "Faq" },
      { value: "contact", label: "Contact" },
      { value: "query", label: "Query" },
      { value: "ingredients", label: "Ingredients" },
      { value: "giftCard", label: "GiftCard" },
      { value: "acne", label: "Acne" },
      { value: "acne-suggestion", label: "Acne Suggestion" },
      { value: "add-on-service", label: "Add On Service" },
      { value: "banner", label: "Banner" },
      { value: "Orders", label: "Product Orders" },
      { value: "service-order", label: "Service Order" },
      { value: "user", label: "All User" },
      { value: "frequently", label: "Bundeled Product" },
      { value: "transaction", label: "Transaction" },
      { value: "rewards", label: "Rewards" },
      { value: "scheduler", label: "Scheduler" },
      { value: "slot", label: "Slot" },
      { value: "shipping-privacy", label: "Shipping Privacy Policy" },
      { value: "return -privacy", label: "Return Privacy Policy" },
      { value: "chat", label: "Chat" },
      { value: "another", label: "Appointments" },
      { value: "notification", label: "Notification" },
      { value: "member_terms", label: "Membership Terms " },
    ];

    const handleSelectChange = (selectedOptions) => {
      setPermissions(selectedOptions);
    };

    let arr = [];

    if (permissions?.length > 0) {
      arr = permissions.map((permission) => permission.value);
    }

    let payload = {};
    if (edit) {
      payload = {
        firstName,
        lastName,
        email,
        phone,
        countryCode,
        gender,
        dob,
        permissions: arr,
      };
    } else {
      payload = {
        firstName,
        lastName,
        email,
        phone,
        countryCode,
        gender,
        dob,
        permissions: arr,
        password,
      };
    }

    const postHandler = async (e) => {
      e.preventDefault();

      createSubadmin(payload, fetchHandler, props.onHide);
    };

    const putHandler = (e) => {
      e.preventDefault();
      editSubadmin(id, payload, fetchHandler, props.onHide);
    };

    // Gender Select Option
    const genderOptions = [
      { value: "Male", label: "Male" },
      { value: "Female", label: "Female" },
    ];

    const handleSelectChange2 = (selectedOptions) => {
      setGender(selectedOptions?.value);
    };

    useEffect(() => {
      if (edit === true) {
        if (props) {
          setFirstName(props?.data?.firstName);
          setLastName(props?.data?.lastName);
          setEmail(props?.data?.email);
          setPhone(props?.data?.phone);
          setCountryCode(props?.data?.countryCode);
          setGender(props?.data?.gender);
          setDob(props?.data?.dob);
        }
      }
    }, [edit, props]);

    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {" "}
            {edit
              ? `Edit ${props?.data?.firstName + " " + props?.data?.lastName}`
              : "Create New"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={edit ? putHandler : postHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Firstname</Form.Label>
              <Form.Control
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Lastname</Form.Label>
              <Form.Control
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Select
                isMulti
                options={options}
                placeholder="Select permissions"
                value={permissions}
                onChange={handleSelectChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            {!edit && (
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
            )}

            <Form.Group className="mb-3">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Country Code</Form.Label>
              <Form.Control
                type="text"
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Select
                options={genderOptions}
                placeholder="Select Gender"
                onChange={handleSelectChange2}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>DOB</Form.Label>
              <Form.Control
                type="date"
                onChange={(e) => setDob(e.target.value)}
              />
            </Form.Group>
            <Button
              style={{ backgroundColor: "#042b26", borderRadius: "0" }}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  function ViewModal(props) {
    const [item, setItem] = useState({});
    let allowedTabs = [];
    let nav = [
      {
        link: "/dashboard ",
        name: "Dashboard",
      },
      {
        link: "/Product",
        name: "Products",
      },

      {
        link: "/service",
        name: "Service",
      },
      {
        link: "/gallery",
        name: "Gallery",
      },
      {
        link: "/getblog",
        name: "News",
      },
      {
        link: "/privacy-policy",
        name: "Privacy Policy",
      },
      {
        link: "/terms",
        name: "Terms",
      },
      {
        link: "/brand",
        name: "Brand",
      },
      {
        link: "/nutrition",
        name: "Nutrition",
      },
      {
        link: "/Product-type",
        name: "Product Type",
      },
      {
        link: "/skin-condition",
        name: "Skin Condition",
      },
      {
        link: "/skinType",
        name: "Skin Type",
      },
      {
        link: "/Category",
        name: "Category",
      },

      {
        link: "/subscription",
        name: "Subscription",
      },

      {
        link: "/reviews",
        name: "Review",
      },
      {
        link: "/about-us",
        name: "About Us",
      },
      {
        link: "/faq",
        name: "FAQ",
      },
      {
        link: "/contact",
        name: "Contact Details",
      },
      {
        link: "/query",
        name: "Query",
      },
      {
        link: "/ingredients",
        name: "Ingredients",
      },
      {
        link: "/giftCard",
        name: "Gift Card",
      },
      {
        link: "/acne",
        name: "Acne Quiz",
      },
      {
        link: "/acne-suggestion",
        name: "Acne Suggestion",
      },
      {
        link: "/add-on-service",
        name: "Add On Service",
      },
      {
        link: "/banner",
        name: "Banner",
      },
      {
        link: "/Orders",
        name: " Product Orders ",
      },
      {
        link: "/service-order",
        name: " Service Orders ",
      },

      {
        link: "/user",
        name: "All User",
      },

      {
        link: "/frequently",
        name: "Bundeled Product",
      },
      {
        link: "/transaction",
        name: "Transaction",
      },
      {
        link: "/rewards",
        name: "Rewards",
      },
      {
        link: "/scheduler",
        name: "Scheduler",
      },
      {
        link: "/slot",
        name: "Slot",
      },
      {
        link: "/shipping-privacy",
        name: "Shipping Privacy Policy",
      },
      {
        link: "/return-privacy",
        name: "Return Privacy Policy",
      },
      {
        link: "/chat",
        name: "Chat",
      },

      {
        link: "/another",
        name: "Appointments ",
      },
      {
        link: "/notification",
        name: "Notification",
      },
      {
        link: "/member_terms",
        name: "Membership Terms  ",
      },
      {
        link: "/sub-admin",
        name: "Sub Admin",
      },
    ];
    if (item?.permissions?.length > 0) {
      for (const one of item?.permissions) {
        allowedTabs.push(...nav?.filter((i) => i.link === `/${one}`));
      }
    }

    function ValueChecker(holder, string) {
      return holder ? (
        <div className="Desc-Container">
          <p className="title"> {holder} </p>
          <p className="desc"> {string} </p>
        </div>
      ) : (
        ""
      );
    }

    useEffect(() => {
      if (props.show) {
        setItem(props?.data);
      }
    }, [props]);

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
            {item?.firstName + " " + item?.lastName}{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {ValueChecker("First name", item?.firstName)}
          {ValueChecker("Last name", item?.lastName)}
          {ValueChecker("Date of Birth", item?.dob)}
          {ValueChecker("Email", item?.email)}
          {ValueChecker("Gender", item?.gender)}
          {ValueChecker("Role", item?.userType)}

          <table className="permission_table">
            <thead>
              <tr>
                <th>Permissions</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {allowedTabs?.map((i, index) => (
                <tr>
                  <td
                    className="desc"
                    key={i + index}
                    style={{ textTransform: "capitalize" }}
                  >
                    {" "}
                    {i.name}{" "}
                  </td>
                  <td>
                    <Form.Check
                      type="switch"
                      checked={true}
                      readOnly
                      className="alreadyChecked"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Modal.Body>
      </Modal>
    );
  }

  const deletHandler = async (id) => {
    try {
      const res = await axios.delete(
        `${process.env.React_App_Baseurl}api/v1/admin/deleteUser/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
          },
        }
      );
      if (res.status === 200) {
        fetchHandler();
        showMsg("Deleted ", "", "info");
      }
    } catch {}
  };

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={singleData}
      />
      <ViewModal show={view} onHide={() => setView(false)} data={singleData} />

      <section>
        <section className="sectionCont">
          <div className="pb-4   w-full flex justify-between items-center">
            <span
              className="tracking-widest text-slate-900 font-semibold uppercase"
              style={{ fontSize: "1.5rem" }}
            >
              All Sub-Admin ({data?.length})
            </span>
            <button
              className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[#042b26] text-white tracking-wider"
              onClick={() => {
                setEdit(false);
                setModalShow(true);
              }}
            >
              Create New
            </button>
          </div>

          {data?.length === 0 || !data ? (
            <Alert>Not Created Yet !</Alert>
          ) : (
            <>
              <div className="overFlowCont">
                <Table>
                  <thead>
                    <tr>
                      <th>Sno.</th>
                      <th>Firstname</th>
                      <th>Lastname</th>
                      <th>Country Code</th>
                      <th>Mobile Number</th>
                      <th>Email</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.map((i, index) => (
                      <tr key={index}>
                        <td> #{index + 1} </td>
                        <td> {i.firstName} </td>
                        <td> {i.lastName} </td>
                        <td>{i.countryCode}</td>
                        <td>{i.phone}</td>
                        <td>{i.email}</td>
                        <td>
                          <span className="flexCont">
                            <i
                              className="fa-solid fa-eye"
                              onClick={() => {
                                setSingleData(i);
                                setView(true);
                              }}
                            ></i>
                            <i
                              className="fa-solid fa-pen-to-square"
                              onClick={() => {
                                setSingleData(i);
                                setId(i._id);
                                setEdit(true);
                                setModalShow(true);
                              }}
                            />
                            <i
                              className="fa-sharp fa-solid fa-trash"
                              onClick={() => deletHandler(i._id)}
                            ></i>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </>
          )}
        </section>
      </section>
    </>
  );
};

export default HOC(Subadmin);
