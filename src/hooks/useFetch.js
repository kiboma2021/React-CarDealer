import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);

    console.log(data)

    useEffect(()=> {
    const fetchVehicles = async() => {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
        //console.log(result)
    };
        fetchVehicles();
    },[url]);


  return {data,}
}

export default useFetch
