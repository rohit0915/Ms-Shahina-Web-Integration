/** @format */

import axios from "axios";

const BaseUrl = "https://ankit-pandey-backend.vercel.app";
const ApiBaseUrl = "https://ant.aliceblueonline.com/rest/AliceBlueAPIService";

const UserId = localStorage.getItem("userId");
const SessionId = localStorage.getItem("sessionId");

const Auth = {
  headers: {
    Authorization: `Bearer ${UserId} ${SessionId}`,
  },
};

export const GetDashboardData = async () => {
  try {
    const response = await axios.get(`${BaseUrl}/api/v1/profile/dashboard`);
    return response;
  } catch (e) {
    console.log("Dashborad Token Err", e);
  }
};

export const HistoricalDataPrevLogin = async (payload) => {
  try {
    const { data } = await axios.post(
      `${BaseUrl}/api/v1/profile/getHistoricalbeforeLogin`,
      payload
    );
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const GetHistoricalData = async (payload) => {
  try {
    const { data } = await axios.post(
      `${ApiBaseUrl}/api/chart/history`,
      payload,
      Auth
    );
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const saveHistoricalData = async (payload) => {
  try {
    const { data } = await axios.post(
      `${BaseUrl}/api/v1/profile/getHistorical`,
      payload
    );
    return data;
  } catch (e) {
    console.log(e);
  }
};

// const HistoricalData = async () => {
//   const payload = { token, resolution, from, to, exchange };
//   try {
//     const data = await GetHistoricalData(payload);
//     if (data.emsg === "No data available") {
//       setNoDataError(true);
//     } else {
//       setHistoricalData(data);
//       setMyState(true);
//       HistoricalDataHandler();
//       props.onHide();
//     }
//   } catch (e) {
//     console.log(e);
//   }
// };
