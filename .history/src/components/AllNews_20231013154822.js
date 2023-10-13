import React, { useState } from 'react'

const AllNews = () => {
    const [response, setResponse] = useState([]);

    function fetchHandler() {
      getNews(setResponse);
    }
  
    useEffect(() => {
      fetchHandler();
    }, []);
  return (
    
  )
}

export default AllNews