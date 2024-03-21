/* eslint-disable no-unused-vars */
import {useEffect, useState} from "react"




function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        const fetchData = async () => {
            let res = await fetch(`https://open.er-api.com/v6/latest/${currency}`);
            let resData = await res.json();
           // console.log(resData)
            setData(resData.rates);
        }
        fetchData()
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;