/** @format */

import axios from "axios";

const Baseurl = "https://shahina-backend.vercel.app/";

// API Integration

const getServiceMenu = async (setResponse) => {
  try {
    const response = await axios.get(
      `${Baseurl}api/v1/admin/Category/allCategory`
    );
    const data = response.data.data;
    setResponse(data);
  } catch {}
};


const getServiceProduct = async (setResponse , query) => {
    try{
        const response = await axios.get(`${Baseurl}api/v1/Service/all/paginateServiceSearch?categoryId=64eda8018600a80edcc6e469`)
    }catch{}
}

export { getServiceMenu };
