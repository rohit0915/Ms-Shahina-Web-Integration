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
        const response = await axios.get(`${Baseurl}api/v1/Service/all/paginateServiceSearch?categoryId=${query}`)
        console.log()
        const data = 
    }catch{}
}

export { getServiceMenu ,getServiceProduct };
