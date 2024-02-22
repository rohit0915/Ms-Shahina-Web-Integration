/** @format */

import axios from "axios";

const Baseurl = process.env.React_App_Baseurl;

export const apiGet = async (url) => {
  try {
    const res = axios.get(url);
    return res;
  } catch {}
};
