import React from 'react'

const AllNews = () => {
    const [response, setResponse] = useState([]);

    function fetchHandler() {
      getNews(setResponse);
    }
  
    useEffect(() => {
      fetchHandler();
    }, []);
  return (
    <div>AllNews</div>
  )
}

export default AllNews