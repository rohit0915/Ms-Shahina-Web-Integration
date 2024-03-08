/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import { Link, useParams } from "react-router-dom";
import { Form, Button, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";
import { Editor_desciption } from "../../../Helper/Helper";

const EditSubscription = () => {
  const { id } = useParams();
  const [submitLoading, setSubmitLoading] = useState(false);
  const [plan, setPlan] = useState("");
  const [price, setPrice] = useState("");
  const [details, setDetails] = useState("");
  const [month, setMonth] = useState("");
  const [discount, setDiscount] = useState("");
  const [term, setTerm] = useState("");
  const token = localStorage.getItem("AdminToken");
  const Auth = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  function appendChecker(key, item) {
    if (item) {
      payload.append(key, item);
    }
  }

  const payload = new FormData();

  appendChecker("price", price);
  appendChecker("details", details);
  appendChecker("month", month);
  appendChecker("price", price);
  appendChecker("pdf", term);
  appendChecker("discount", discount);
  payload.append("plan", plan);

  const createProduct = async (e) => {
    e.preventDefault();
    setSubmitLoading(true);
    try {
      const res = await axios.put(
        `${process.env.React_App_Baseurl}api/v1/subscription/${id}`,
        payload,
        Auth
      );
      toast.success(res.data.message);
      setSubmitLoading(false);
    } catch (e) {
      console.log(e);
      const msg = e.response.data.message;
      toast.error(msg);
      setSubmitLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <section>
      <section className="sectionCont">
        <p className="headP">Dashboard / Edit Subscription</p>

        <Form onSubmit={createProduct}>
          <Form.Group className="mb-3">
            <Form.Label>Plan</Form.Label>
            <Form.Select onChange={(e) => setPlan(e.target.value)}>
              <option>Selete Your Prefrence</option>
              <option value="SILVER"> SILVER </option>
              <option value="GOLD"> GOLD </option>
              <option value="PLATINUM"> PLATINUM </option>
              <option value="DIAMOND"> DIAMOND </option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Term</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => setTerm(e.target.files[0])}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              min={0}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Month</Form.Label>
            <Form.Control
              type="number"
              min={0}
              onChange={(e) => setMonth(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Discount</Form.Label>
            <Form.Control
              type="number"
              min={0}
              onChange={(e) => setDiscount(e.target.value)}
            />
          </Form.Group>

          <Editor_desciption
            setDescription={setDetails}
            description={details}
            label={"Detail"}
          />

          <div className="w-100 d-flex justify-content-between">
            <Button variant="success" type="submit">
              {submitLoading ? (
                <Spinner animation="border" role="status" />
              ) : (
                "Submit"
              )}
            </Button>

            <Link to="/Orders">
              <Button variant="dark">Back</Button>
            </Link>
          </div>
        </Form>
      </section>
    </section>
  );
};

export default HOC(EditSubscription);
