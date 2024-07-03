
import axios from "axios"
import { useState, useEffect } from "react"

const usePetition = (endponit) => {

    const API_URL = import.meta.env.VITE_API_URL

    const [data, setData] = useState()

    useEffect(() => {
        axios.get(`${API_URL}${endponit}`)
            .then((data) => {
                setData(data.data.data)
            })
            .catch(error =>
                console.error(error)
            )
    }, [])
    return data
}

export default usePetition