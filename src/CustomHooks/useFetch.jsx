import axios from 'axios'
import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState([])
    const fetchData = async () => {
        let res = await axios.get(url)
        setData(res.data)
    }
    useEffect(() => {
        fetchData()
        console.log(data);
    }, [])
    return { data }
    
}

export default useFetch