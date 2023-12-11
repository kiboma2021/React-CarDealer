import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    console.log(data)

    useEffect(()=> {
    const fetchVehicles = async() => {
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        setLoading(false);
        setData(result);
        //console.log(result)
    };
        fetchVehicles();
    },[url]);


  return {data,loading}
}

export default useFetch
