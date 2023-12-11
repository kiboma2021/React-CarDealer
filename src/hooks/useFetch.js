import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    console.log(data)

    useEffect(()=> {
    const fetchVehicles = async() => {
        setLoading(true);
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            const result = await response.json(); 
            setLoading(false);
            setData(result);            
            
        } catch (err){
            setError("Error fetching from API")
            console.log(err.message);
        }


        //console.log(result)
    };
        fetchVehicles();
    },[url]);


  return {data,loading,error}
}

export default useFetch
