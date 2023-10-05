import axios from 'axios'

const Baseurl  = 'https://shahina-backend.vercel.app/'

// API Integration


const getServiceMenu = async () => {
    try{
        const response = await axios.get(`${Baseurl}api/v1/admin/Category/allCategory`)
    }catch{}
}