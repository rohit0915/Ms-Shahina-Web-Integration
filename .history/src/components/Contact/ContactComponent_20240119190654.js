/** @format */

import React from "react";

const ContactComponent = () => {
  return (
    <div className="Box">
      <div className="two-sec">
        <img src={contact?.image} alt="" />
        <div>
          <p className="title"> {contact?.name} </p>
          <span className="Stars">
            {starArray.map((_, index) => (
              <div className="Rat" key={`star ${index}`}>
                <AiFillStar
                  className="fill_star"
                  style={{ color: "#ff9529", fontSize: "20px" }}
                />
              </div>
            ))}
            <span> ({contact?.numOfReviews}) </span>
          </span>
          <div
            className="contact-info cursor-pointer"
            onClick={() => Call(contact?.phone)}
          >
            <BsFillTelephoneFill />
            <p> {contact?.phone} </p>
          </div>
          <div
            className="contact-info cursor-pointer"
            onClick={() => Mail(contact?.email)}
          >
            <GrMail />
            <p> {contact?.email} </p>
          </div>
          <div className="contact-info">
            <AiFillInstagram />

            <a href={contact?.instagram}>
              <p>nurse.shahina </p>
            </a>
          </div>
        </div>
      </div>

      <div className="two-sec mt-3">
        <BiCurrentLocation style={{ fontSize: "20px" }} />
        <div>
          <p className="title" style={{ fontSize: "16px" }}>
            {contact?.address}
          </p>
        </div>
      </div>

      <a href={contact?.mapLink} target="_blank">
        <button className="locate_btn">LOCATE ON GOOGLE MAPS</button>
      </a>

      {/* Service */}
      {cart?.services?.map((i, index) => (
        <div className="Items" key={index}>
          <div className="two-div">
            <p className="head">
              {" "}
              {i?.priceId ? i?.size : i?.serviceId?.name}{" "}
            </p>
            <p className="head">
              {" "}
              {i?.serviceId?.type === "offer"
                ? `$${i.total}`
                : `$${i.subTotal}`}
            </p>
          </div>
          <div className="two-div">
            <p className="desc"> Total Time : ( {i?.totalTime})</p>
            <p
              className="delete cursor-pointer"
              onClick={() => deleteServiceItem(i.serviceId?._id, i?.priceId)}
            >
              {" "}
              DELETE
            </p>
          </div>
        </div>
      ))}

      {/* Ad on Service */}
      {cart?.AddOnservicesSchema?.map((i, index) => (
        <div className="Items" key={index}>
          <div className="two-div">
            <p className="head"> {i?.addOnservicesId?.name} </p>
            <p className="head"> ${i.addOnservicesId?.price}</p>
          </div>
          <div className="two-div">
            <p className="desc">
              {" "}
              Total Time : ( {i?.addOnservicesId?.totalTime})
            </p>
            <p
              className="delete cursor-pointer"
              onClick={() => deleteAnother(i?.addOnservicesId?._id)}
            >
              {" "}
              DELETE
            </p>
          </div>
        </div>
      ))}

      {bookNow}
    </div>
  );
};

export default ContactComponent;
