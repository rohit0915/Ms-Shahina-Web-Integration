/** @format */

import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";
import { MdDashboardCustomize } from "react-icons/md";
import { toast } from "react-toastify";
import { showMsg } from "../../Respo/Api";

const Sidebar = ({ hamb, setHamb }) => {
  const navigate = useNavigate();
  const detail = JSON.parse(localStorage.getItem("details"));
  const user_role = detail?.userType;
  let allowedTabs = [];
  let nav = [
    {
      icon: <MdDashboardCustomize className="text-xl mr-3 rounded-full " />,
      link: "/dashboard ",
      name: "Dashboard",
    },
    {
      icon: <i className="fa-solid fa-user  text-xl mr-3 rounded-full"></i>,
      link: "/another",
      name: "Appointments ",
    },
    {
      icon: (
        <i className="fa-brands fa-product-hunt text-xl mr-3 rounded-full"></i>
      ),
      link: "/Product",
      name: "Products",
    },

    {
      icon: (
        <i className="fa-brands fa-product-hunt text-xl mr-3 rounded-full"></i>
      ),
      link: "/service",
      name: "Service",
    },
    {
      icon: (
        <i className="fa-solid fa-address-card text-xl mr-3 rounded-full" />
      ),
      link: "/gallery",
      name: "Gallery",
    },
    {
      icon: <i className="fa-solid fa-user  text-xl mr-3 rounded-full"></i>,
      link: "/getblog",
      name: "Blogs",
    },
    {
      icon: <i className="fa-solid fa-user  text-xl mr-3 rounded-full"></i>,
      link: "/privacy-policy",
      name: "Privacy Policy",
    },
    {
      icon: <i className="fa-solid fa-user  text-xl mr-3 rounded-full"></i>,
      link: "/terms",
      name: "Terms",
    },
    {
      icon: <i className="fa-solid fa-user  text-xl mr-3 rounded-full"></i>,
      link: "/brand",
      name: "Brand",
    },
    {
      icon: <i className="fa-solid fa-user  text-xl mr-3 rounded-full"></i>,
      link: "/nutrition",
      name: "Nutrition",
    },
    {
      icon: <i className="fa-solid fa-user  text-xl mr-3 rounded-full"></i>,
      link: "/Product-type",
      name: "Product Type",
    },
    {
      icon: <i className="fa-solid fa-user  text-xl mr-3 rounded-full"></i>,
      link: "/skin-condition",
      name: "Skin Condition",
    },
    {
      icon: <i className="fa-solid fa-user  text-xl mr-3 rounded-full"></i>,
      link: "/skinType",
      name: "Skin Type",
    },
    {
      icon: <MdDashboardCustomize className="text-xl mr-3 rounded-full " />,
      link: "/Category",
      name: "Category",
    },

    {
      icon: <MdDashboardCustomize className="text-xl mr-3 rounded-full " />,
      link: "/subscription",
      name: "Subscription",
    },

    {
      icon: <MdDashboardCustomize className="text-xl mr-3 rounded-full " />,
      link: "/reviews",
      name: "Review",
    },
    {
      icon: (
        <i className="fa-solid fa-address-card text-xl mr-3 rounded-full" />
      ),
      link: "/about-us",
      name: "About Us",
    },
    {
      icon: (
        <i className="fa-solid fa-address-card text-xl mr-3 rounded-full" />
      ),
      link: "/faq",
      name: "FAQ",
    },
    {
      icon: (
        <i className="fa-solid fa-circle-info  text-xl mr-3 rounded-full"></i>
      ),
      link: "/contact",
      name: "Contact Details",
    },
    {
      icon: (
        <i className="fa-solid fa-circle-info  text-xl mr-3 rounded-full"></i>
      ),
      link: "/query",
      name: "Query",
    },
    {
      icon: (
        <i className="fa-solid fa-circle-info  text-xl mr-3 rounded-full"></i>
      ),
      link: "/ingredients",
      name: "Ingredients",
    },
    {
      icon: (
        <i className="fa-solid fa-circle-info  text-xl mr-3 rounded-full"></i>
      ),
      link: "/giftCard",
      name: "Gift Card",
    },
    {
      icon: (
        <i className="fa-solid fa-circle-info  text-xl mr-3 rounded-full"></i>
      ),
      link: "/acne",
      name: "Acne Quiz",
    },
    {
      icon: (
        <i className="fa-solid fa-circle-info  text-xl mr-3 rounded-full"></i>
      ),
      link: "/acne-suggestion",
      name: "Acne Suggestion",
    },
    {
      icon: (
        <i className="fa-solid fa-circle-info  text-xl mr-3 rounded-full"></i>
      ),
      link: "/acne-query",
      name: "Acne Query",
    },
    {
      icon: (
        <i className="fa-solid fa-circle-info  text-xl mr-3 rounded-full"></i>
      ),
      link: "/add-on-service",
      name: "Add On Service",
    },
    {
      icon: (
        <i className="fa-solid fa-address-card text-xl mr-3 rounded-full" />
      ),
      link: "/banner",
      name: "Banner",
    },
    {
      icon: (
        <i className="fa-solid fa-cart-shopping text-xl mr-3 rounded-full"></i>
      ),
      link: "/Orders",
      name: " Product Orders ",
    },
    {
      icon: (
        <i className="fa-solid fa-cart-shopping text-xl mr-3 rounded-full"></i>
      ),
      link: "/service-order",
      name: " Service Orders ",
    },

    {
      icon: <i className="fa-solid fa-user  text-xl mr-3 rounded-full"></i>,
      link: "/user",
      name: "All User",
    },

    {
      icon: <i className="fa-solid fa-user  text-xl mr-3 rounded-full"></i>,
      link: "/frequently",
      name: "Bundeled Product",
    },
    {
      icon: <i className="fa-solid fa-user  text-xl mr-3 rounded-full"></i>,
      link: "/transaction",
      name: "Transaction",
    },
    {
      icon: <i className="fa-solid fa-user  text-xl mr-3 rounded-full"></i>,
      link: "/rewards",
      name: "Gift Card",
    },

    {
      icon: <i className="fa-solid fa-user  text-xl mr-3 rounded-full"></i>,
      link: "/shipping-privacy",
      name: "Shipping Privacy Policy",
    },
    {
      icon: <i className="fa-solid fa-user  text-xl mr-3 rounded-full"></i>,
      link: "/return-privacy",
      name: "Return Privacy Policy",
    },
    {
      icon: <i className="fa-solid fa-user  text-xl mr-3 rounded-full"></i>,
      link: "/chat",
      name: "Chat",
    },

    {
      icon: <i className="fa-solid fa-user  text-xl mr-3 rounded-full"></i>,
      link: "/notification",
      name: "Notification",
    },
    {
      icon: <i className="fa-solid fa-user  text-xl mr-3 rounded-full"></i>,
      link: "/sub-admin",
      name: "Sub Admin",
    },
  ];

  if (user_role === "SUBADMIN") {
    if (detail?.permissions?.length > 0) {
      for (const item of detail?.permissions) {
        allowedTabs.push(...nav?.filter((i) => i.link === `/${item}`));
      }
    }
  } else {
    allowedTabs = nav;
  }

  const logOut = () => {
    localStorage.clear();
    navigate("/");
    showMsg("Logged Out", "", "success");
  };

  return (
    <>
      <aside
        className="p-4 h-auto"
        style={{ backgroundColor: "#042b26", minHeight: "100vh" }}
      >
        {/* Top */}
        <div className="w-full md:hidden relative  p-2 mb-4">
          <RiCloseLine
            onClick={() => setHamb(!hamb)}
            className="text-3xl  absolute top-2 sm:hover:rotate-[228deg] transition-transform font-bold right-2 sm:hover:text-[22px] text-[rgb(241,146,46)] cursor-pointer"
          />
        </div>{" "}
        <figure className="flex  flex-col items-center">
          <span
            className="font-bold text-[#fff]"
            style={{
              fontSize: "2rem",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            {" "}
            ADMIN PANEL
          </span>
        </figure>
        <nav className="py-6">
          {allowedTabs?.map((nav) => {
            return (
              <Link
                to={nav.link}
                key={nav.name}
                className=""
                style={{ textDecoration: "none", textTransform: "uppercase" }}
              >
                <span
                  className="flex my-3 items-center cursor-pointer text-gray-900    tracking-wider p-2 rounded-sm"
                  style={{ color: "#FFF" }}
                >
                  {nav.icon} {nav.name}
                </span>
              </Link>
            );
          })}
          <span
            className="flex my-3 items-center cursor-pointer text-gray-900    tracking-wider p-2 rounded-sm"
            onClick={() => logOut()}
            style={{ color: "#FFF", textTransform: "uppercase" }}
          >
            <BiLogOutCircle className="text-xl mr-3 rounded-full " /> LogOut
          </span>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
