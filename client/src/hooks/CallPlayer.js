import {useState, useEffect} from 'react';
import axios from 'axios';

export const useCallPlayers = (url) => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(url)
        .then(response => {
            setData(response.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [url])

    return [data]
};


