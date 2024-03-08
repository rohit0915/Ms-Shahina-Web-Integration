/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import { Table, Alert } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";
import SpinnerComp from "../Component/SpinnerComp";
import { useNavigate } from "react-router-dom";

const User = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const token = localStorage.getItem("AdminToken");
  const Auth = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.React_App_Baseurl}api/v1/admin/getAllUser`
      );
      setData(data?.data);
      setTotal(data?.data?.length);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(
        `${process.env.React_App_Baseurl}api/v1/admin/deleteUser/${id}`,
        Auth
      );
      toast.success("User Deleted");
      fetchData();
    } catch (e) {
      const msg = e.response.data.message;
      toast.error(msg);
    }
  };

  const TotolData = query
    ? data?.filter(
        (i) =>
          i?.firstName?.toLowerCase().includes(query?.toLowerCase()) ||
          i?.lastName?.toLowerCase().includes(query?.toLowerCase()) ||
          i?.email?.toLowerCase().includes(query?.toLowerCase()) ||
          i.isSubscription?.toString() === query ||
          i?.phone?.toString()?.toLowerCase().includes(query?.toLowerCase())
      )
    : data;

  // ---- Pagination
  const [currentPage2, setCurrentPage2] = useState(1);
  const postPerPage2 = 10;
  const lastPostIndex2 = currentPage2 * postPerPage2;
  const firstPostIndex2 = lastPostIndex2 - postPerPage2;

  const pages = [];

  for (let i = 1; i <= Math.ceil(total / 10); i++) {
    pages.push(i);
  }

  const slicedData = TotolData?.slice(firstPostIndex2, lastPostIndex2);

  const Prev = () => {
    if (currentPage2 > 1) {
      setCurrentPage2(currentPage2 - 1);
    }
  };
  const Next = () => {
    if (currentPage2 !== pages?.length && currentPage2 < pages?.length) {
      setCurrentPage2(currentPage2 + 1);
    }
  };

  const debouncedSetQuery = (term) => {
    clearTimeout(debouncedSetQuery.timeoutId);
    debouncedSetQuery.timeoutId = setTimeout(() => {
      setQuery(term);
    }, 500);
  };

  useEffect(() => {
    if (query) {
      setCurrentPage2(1);
    }
  }, [query]);

  return (
    <>
      <section className="sectionCont">
        <p className="headP">Dashboard / All User</p>

        <div className="pb-4  w-full flex justify-between items-center">
          <span
            className="tracking-widest text-slate-900 font-semibold uppercase"
            style={{ fontSize: "1.5rem" }}
          >
            All User's ( Total : {total} )
          </span>
        </div>

        {data?.length === 0 || !data ? (
          <SpinnerComp />
        ) : (
          <>
            <div className="filterBox">
              <img
                src="https://t4.ftcdn.net/jpg/01/41/97/61/360_F_141976137_kQrdYIvfn3e0RT1EWbZOmQciOKLMgCwG.jpg"
                alt=""
              />
              <input
                type="search"
                placeholder="Seach by First Name , Last Name , Email Address and Phone Number"
                onChange={(e) => debouncedSetQuery(e.target.value)}
              />
            </div>

            <div className="searchByDate">
              <div>
                <label>Showing : </label>
                <select onClick={(e) => setQuery(e.target.value)}>
                  <option value="">All</option>
                  <option value={true}>Member Accounts</option>
                  <option value={false}>Non-Member Accounts</option>
                </select>
              </div>
            </div>
            <div className="overFlowCont">
              {data?.length === 0 || !data ? (
                <Alert>No User Found</Alert>
              ) : (
                <Table>
                  <thead>
                    <tr>
                      <th>Sno.</th>
                      <th>Firstname</th>
                      <th>Lastname</th>
                      <th>Mobile Number</th>
                      <th>Email Address</th>
                      <th>Gender</th>
                      <th> </th>
                    </tr>
                  </thead>
                  <tbody>
                    {slicedData?.map((i, index) => (
                      <tr key={index}>
                        <td> #{index + 1} </td>
                        <td> {i.firstName} </td>
                        <td> {i.lastName} </td>
                        <td>
                          <i
                            className="fa-solid fa-plus"
                            style={{ fontSize: "10px", marginRight: "2px" }}
                          />
                          {i.phone}
                        </td>
                        <td>{i.email}</td>
                        <td>{i.gender}</td>

                        <td>
                          <span className="flexCont">
                            <i
                              className="fa-solid fa-eye"
                              onClick={() => navigate(`/user-data/${i._id}`)}
                            ></i>
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
              <div className="pagination">
                <button onClick={() => Prev()} className="prevBtn">
                  <i className="fa-solid fa-backward"></i>
                </button>

                <button className="activePage">{currentPage2}</button>
                {currentPage2 < pages?.length && (
                  <button onClick={() => Next()} className="nextBtn">
                    {" "}
                    <i className="fa-sharp fa-solid fa-forward"></i>
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default HOC(User);
