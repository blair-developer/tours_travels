import { useState, useEffect } from "react";

const useFetch = (url) => {
   const [data, setData] = useState([]);
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
     const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Failed to fetch');
            }

            const result = await response.json();
            setData(result.data);
            setError(null);
        } catch (error) {
            console.error('Fetch error:', error);
            setError('An error occurred while fetching data');
        } finally {
            setLoading(false);
        }
     };

     fetchData();
   }, [url]);

   return {  
    data,
    error,
    loading 
   };
};

export default useFetch;
