/** @format */

import axios from "axios";
import { Store } from "react-notifications-component";
import { getDates } from "../Store/Slices/dateSlice";

const Baseurl = process.env.React_App_Baseurl;
const duration = 3000;

export const showMsg = (title, message, type) => {
  Store.addNotification({
    title,
    message,
    type,
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 2000,
      onScreen: true,
    },
  });
};

export const getBlockedSlots = async (setResponse) => {
  try {
    const res = await axios.get(`${Baseurl}api/v1/admin/Slot/getSlotForAdmin`);
    const data = res.data.data?.docs;
    setResponse(data);
  } catch {}
};

export const createBlockedTime = async (payload, fetchHandler, handleClose) => {
  try {
    const res = await axios.put(
      `${Baseurl}api/v1/admin/Slot/slotBlocked`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
        },
      }
    );
    if (res.status === 200) {
      await fetchHandler();
      handleClose();
      showMsg("Success !", "Blocked slots for seleceted time", "Success");
    }
  } catch (e) {
    console.log(e);
  }
};

export const getBookingDetail = async (id, setResponse) => {
  try {
    const res = await axios.get(`${Baseurl}api/v1/viewserviceOrder/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
      },
    });
    const data = res.data.data;
    setResponse(data);
  } catch {}
};

export const deleteService = async (serviceId, userId, fetchCart, payload) => {
  try {
    const res = await axios.delete(
      `${Baseurl}api/admin/cart/delete/services/${serviceId}/${userId}`,
      {
        data: payload, // Correct placement for the payload
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
        },
      }
    );
    if (res.status === 200) {
      fetchCart();
    }
  } catch {
    fetchCart();
  }
};

export const addService = async (serviceId, payload, fetchCart) => {
  try {
    const res = await axios.post(
      `${Baseurl}api/v1/admin/addtoCart/${serviceId}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
        },
      }
    );
    fetchCart();
  } catch {}
};

export const edit_service = async (serviceId, payload, fetchCart) => {
  try {
    const res = await axios.post(
      `${Baseurl}api/v1/admin/editServiceInCart/${serviceId}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
        },
      }
    );
    fetchCart();
  } catch {}
};

export const edit_service_in_order = (orderId, payload, fetchCart) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(
        `${Baseurl}api/v1/editServiceIOrders/${orderId}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
          },
        }
      );
      if (res.status === 200) {
        fetchCart();
        dispatch(getAppointment());
      }
    } catch {}
  };
};

export const edit_adonservice_in_order = (orderId, payload, fetchCart) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(
        `${Baseurl}api/v1/editAddOnservicesInOrders/${orderId}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
          },
        }
      );
      if (res.status === 200) {
        fetchCart();
        dispatch(getAppointment());
      }
    } catch {}
  };
};

export const edit_add_on_service = async (serviceId, payload, fetchCart) => {
  try {
    const res = await axios.post(
      `${Baseurl}api/v1/admin/editAddOnservicesInCart/${serviceId}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
        },
      }
    );
    fetchCart();
  } catch {}
};

export const noShow = (id, payload, handleClose) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(
        `${Baseurl}api/v1/admin/noShowUpdate/${id}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
          },
        }
      );
      if (res.status === 200) {
        await dispatch(getAppointment());
        handleClose();
        showMsg("", "Appointment updated", "info");
      }
    } catch (e) {
      const msg = e?.response?.data?.msg;
      showMsg("", msg, "info");
    }
  };
};

export const uploadUser = async (payload) => {
  try {
    const res = await axios.post(
      `${Baseurl}api/v1/admin/uploadClient`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
        },
      }
    );
    Store.addNotification({
      title: "Uploaded",
      message: "",
      type: "info",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: duration,
        onScreen: true,
      },
    });
  } catch {}
};

export const unblock_slot = async (payload, fetchHandler, handleClose) => {
  try {
    const res = await axios.put(
      `${Baseurl}api/v1/admin/Slot/slotUnBlocked`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
        },
      }
    );
    if (res.status === 200) {
      await fetchHandler();
      handleClose();
      showMsg("Success !", "Unblocked", "Success");
    }
  } catch {}
};

export const getSlots = async (fromDate, toDate, page, limit, setResponse) => {
  try {
    const res = await axios.get(
      `${Baseurl}api/v1/admin/Slot/getSlotForAdmin?fromDate=${fromDate}&toDate=${toDate}&page${page}=&limit=${limit}`
    );
    const data = res.data.data;
    setResponse(data);
  } catch {}
};

export const getCart = async (userId, setResponse) => {
  try {
    const res = await axios.get(`${Baseurl}api/v1/admin/getCart/${userId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
      },
    });
    const data = res.data.cart;
    setResponse(data);
  } catch {}
};

export const addNote = async (userId, payload) => {
  try {
    const res = await axios.put(
      `${Baseurl}api/v1/admin/addSuggestionToServiceCart/${userId}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
        },
      }
    );
  } catch {}
};

export const getRecentService = async (userId, setResponse) => {
  try {
    const res = await axios.get(
      `${Baseurl}api/v1/admin/getServiceOrdersByuserId/${userId}`
    );
    const data = res.data.data;
    setResponse(data);
  } catch {}
};

export const checkout = (userId, handleClose) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        `${Baseurl}api/v1/admin/checkout/${userId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
          },
        }
      );
      if (res.status === 200) {
        dispatch(getAppointment());
        handleClose();
        showMsg("Appointment Created ", "", "success");
      }
    } catch (e) {
      const message = e.response.data.msg;
      showMsg("", message, "info");
      handleClose();
    }
  };
};

export const fetchServices = async (setResponse) => {
  try {
    const res = await axios.get(`${Baseurl}api/v1/Service/all/getAllServices`);
    const data = res.data.data?.reverse();
    setResponse(data);
  } catch {}
};

export const rescheduleOrder = (orderId, date, payload, handleClose) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(
        `${Baseurl}api/v1/admin/reSechduleOrder/${orderId}/${date}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
          },
        }
      );
      const status = res.status;
      if (status === 200) {
        await dispatch(getAppointment());
        handleClose();
        showMsg("Reschedules", "", "info");
      }
    } catch {}
  };
};

export const getOrders = async (setResponse, status, userId) => {
  const head = status ? `?serviceStatus=${status}` : "";
  try {
    const res = await axios.get(
      `${Baseurl}api/v1/admin/getServiceOrdersByuserId/${userId}${head}`
    );
    const data = res.data.data?.reverse();
    setResponse(data);
  } catch {
    setResponse([]);
  }
};

export const editBookedNoted = async (id, payload, getBookingDetail) => {
  try {
    const res = await axios.put(
      `${Baseurl}api/v1/admin/addSuggestionToServiceOrder/${id}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
        },
      }
    );
    if (res.status === 200) {
      getBookingDetail();
      showMsg("Saved", "", "info");
    }
  } catch {}
};

export const editBookedNoted_new = async (
  userId,
  suggesstionId,
  fetchCart,
  payload
) => {
  try {
    const res = await axios.put(
      `${Baseurl}api/v1/admin/editSuggestionfromOrder/${userId}/${suggesstionId}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
        },
      }
    );
    if (res.status === 200) {
      fetchCart();
      showMsg("Updated", "", "info");
    }
  } catch {}
};

export const editNotesInCart = async (
  userId,
  suggesstionId,
  fetchCart,
  payload
) => {
  try {
    const res = await axios.put(
      `${Baseurl}api/v1/admin/editSuggestionInCart/${userId}/${suggesstionId}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
        },
      }
    );
    if (res.status === 200) {
      fetchCart();
      showMsg("Updated", "", "info");
    }
  } catch {}
};

export const createClient = async (payload, fetchUsers, setModalShow) => {
  try {
    const res = await axios.post(
      `${Baseurl}api/v1/admin/clientRegistration`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
        },
      }
    );
    if (res.status === 200) {
      setModalShow(false);
      fetchUsers();

      showMsg("Created", "", "success");
    }
  } catch (e) {
    const msg = e?.response?.data?.message;
    showMsg("Error !", msg, "danger");
  }
};

export const deleteUser = (id, handleClose) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete(
        `${Baseurl}api/v1/admin/deleteUser/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
          },
        }
      );
      const status = res.status;
      if (status === 200) {
        await dispatch(getAppointment());
        handleClose();
        showMsg("Removed", "", "info");
      }
    } catch {}
  };
};

export const cancelAppointment = (id, payload, handleClose) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(
        `${Baseurl}api/v1/cancelBooking/${id}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
          },
        }
      );
      const status = res.status;
      if (status === 200) {
        await dispatch(getAppointment());
        handleClose();
        showMsg("Cancelled Appointment", "", "success");
      }
    } catch {}
  };
};

export const editUser = (id, payload, handleClose) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(
        `${Baseurl}api/v1/admin/updateClientProfile/${id}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
          },
        }
      );
      if (res.status === 200) {
        await dispatch(getAppointment());
        handleClose();
        showMsg("Updated Successfully", "", "info");
      }
    } catch {}
  };
};

export const getAppointment = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `${Baseurl}api/v1/admin/getServiceOrderswithDate`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
          },
        }
      );
      const data = res.data.data;
      dispatch(getDates(data));
    } catch {}
  };
};

export const blockUser = (userId, show) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(
        `${Baseurl}api/v1/admin/activeBlockUser/${userId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
          },
        }
      );
      const code = res.status;
      const msg = res.data.msg;

      if (code === 200) {
        await dispatch(getAppointment());
        showMsg("", msg, "info");
      }
    } catch (e) {
      const msg = e.response?.data?.message;
      showMsg("", msg, "info");
    }
  };
};

// Paginated Services
export const getPaginatedServices = async (searchTerm, page, setResponse) => {
  try {
    const res = await axios.get(
      `${Baseurl}api/v1/Service/all/paginateServiceSearch?search=${searchTerm}&page=${page}`
    );
    const data = res.data.data?.docs;
    setResponse(data);
  } catch {}
};

// Get AddON Service
export const getAdOnService = async (setResponse) => {
  try {
    const res = await axios.get(
      `${Baseurl}api/v1/admin/AddOnServices/allAddOnServices`
    );
    const data = res.data.data;
    setResponse(data);
  } catch {}
};

// Add ad-on-service in cart
export const AdOnInCart = async (serviceId, payload, fetchCart) => {
  try {
    const res = await axios.post(
      `${Baseurl}api/v1/admin/addtoCart/addOnservices/${serviceId}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
        },
      }
    );
    if (res.status === 200) {
      fetchCart();
    }
  } catch {
    showMsg("Technical issue", "", "danger");
  }
};

export const deleteAdOn = async (serviceId, userId, fetchCart, setShow) => {
  try {
    const res = await axios.delete(
      `${Baseurl}api/admin/cart/delete/AddOnservices/${serviceId}/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
        },
      }
    );
    if (res.status === 200) {
      await fetchCart();
      setShow(false);
    }
  } catch {}
};

// Suggestion  Cart
export const deleteSuggestion = async (userId, suggesstionId, fetchCart) => {
  try {
    const res = await axios.put(
      `${Baseurl}api/v1/admin/deleteSuggestionfromCart/${userId}/${suggesstionId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
        },
      }
    );
    if (res.status === 200) {
      fetchCart();
    }
  } catch {}
};

export const deleteSuggestionOrder = async (id, suggesstionId, fetchCart) => {
  try {
    const res = await axios.put(
      `${Baseurl}api/v1/admin/deleteSuggestionfromOrder/${id}/${suggesstionId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
        },
      }
    );
    if (res.status === 200) {
      fetchCart();
    }
  } catch {}
};

// Sub Admin

export const getAllSubAdmin = async (setResponse) => {
  try {
    const res = await axios.get(`${Baseurl}api/v1/admin/getAllSubAdmin`);
    const status = res.status;
    const data = res.data.data;
    if (status === 200) {
      setResponse(data);
    }
  } catch {}
};

export const editSubadmin = async (id, payload, fetchHandler, hide) => {
  try {
    const res = await axios.put(
      `${Baseurl}api/v1/admin/updateSubAdminProfile/${id}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
        },
      }
    );
    const status = res.status;
    if (status === 200) {
      await fetchHandler();
      await hide();
      showMsg("Updated ", "", "info");
    }
  } catch {}
};

export const createSubadmin = async (payload, fetchHandler, hide) => {
  try {
    const res = await axios.post(
      `${Baseurl}api/v1/admin/addSubAdmin`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
        },
      }
    );

    const status = res.status;
    if (status === 200) {
      await fetchHandler();
      await hide();
      showMsg("Created ", "", "info");
    }
  } catch {}
};

export const send_reminder = async (id) => {
  try {
    const res = await axios.put(
      `${Baseurl}api/v1/admin/sendReminder/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
        },
      }
    );
    if (res.status === 200) {
      showMsg("Confirmation sent", "", "success");
    }
  } catch {}
};

export const send_reminder_in_cart = async (id, fetchCart) => {
  try {
    const res = await axios.put(
      `${Baseurl}api/v1/admin/sendConfirmationAppointmentWithCard/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
        },
      }
    );
    if (res.status === 200) {
      fetchCart();
    }
  } catch {}
};

export const add_service_in_order = (orderId, payload, fetchHandler) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(
        `${Baseurl}api/v1/addServiceIOrders/${orderId}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
          },
        }
      );
      if (res.status === 200) {
        fetchHandler();
        dispatch(getAppointment());
      }
    } catch (e) {
      const msg = e?.response?.data?.message;
      showMsg("Error !", msg, "danger");
    }
  };
};

export const addOn_service_in_order = (orderId, payload, fetchHandler) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(
        `${Baseurl}api/v1/addOnservicesInOrders/${orderId}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
          },
        }
      );
      if (res.status === 200) {
        fetchHandler();
        dispatch(getAppointment());
      }
    } catch (e) {
      const msg = e?.response?.data?.message;
      showMsg("Error !", msg, "danger");
    }
  };
};

export const delete_booked_service = (orderId, payload, fetchHandler) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(
        `${Baseurl}api/v1/deleteServicefromOrders/${orderId}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
          },
        }
      );
      if (res.status === 200) {
        fetchHandler();
        dispatch(getAppointment());
      }
    } catch (e) {
      const msg = e?.response?.data?.message;
      showMsg("Error !", msg, "danger");
    }
  };
};

export const delete_booked_adOnservice = (orderId, payload, fetchHandler) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(
        `${Baseurl}api/v1/deleteAddOnServicefromOrders/${orderId}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
          },
        }
      );
      if (res.status === 200) {
        fetchHandler();
        dispatch(getAppointment());
      }
    } catch (e) {
      const msg = e?.response?.data?.message;
      showMsg("Error !", msg, "danger");
    }
  };
};

export const checkout_customer = (orderId, handleClose) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        `${Baseurl}api/v1/admin/chargeCustomer/${orderId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
          },
        }
      );

      if (res.status === 200) {
        dispatch(getAppointment());
        handleClose();
      }
    } catch {}
  };
};

export const getApi = async ({
  url,
  setResponse,
  setLoading,
  additionalFunctions = [],
}) => {
  if (setLoading) {
    setLoading(true);
  }
  try {
    const res = await axios.get(`${Baseurl}${url}`);
    setResponse(res.data);
    additionalFunctions.forEach((func) => {
      if (typeof func === "function") {
        func();
      }
    });
  } catch (e) {
    console.log(e);
  } finally {
    if (setLoading) {
      setLoading(false);
    }
  }
};

export const editApi = async ({
  url,
  payload,
  setLoading,
  additionalFunctions = [],
}) => {
  if (setLoading) {
    setLoading(true);
  }
  try {
    const res = await axios.put(`${Baseurl}${url}`, payload, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
      },
    });
    if (res.status === 200) {
      additionalFunctions.forEach((func) => {
        if (typeof func === "function") {
          func();
        }
      });
    }
  } catch (e) {
    console.log(e);
  } finally {
    if (setLoading) {
      setLoading(false);
    }
  }
};
