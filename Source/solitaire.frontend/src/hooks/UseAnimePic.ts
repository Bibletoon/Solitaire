import axios from "axios";
import {useEffect, useState} from "react";
import RequestState from "./RequestState";

const useAnimePicClient = () => {
    const client = axios.create();
    const [picture, setPicture] = useState("");
    const [status, setStatus] = useState(RequestState.Pending);

    const getNext = () => {
        setStatus(RequestState.Pending);
        client.get("https://bibletoon.xyz/anigif/?reaction=dance")
            .then(res => {
                setPicture(res.data.url);
                setStatus(RequestState.Success);
            })
            .catch(err => {
                setStatus(RequestState.Failure);
            });
    }

    useEffect(() => {
        getNext();
    }, [])

    return {status, picture, getNext}
}

export default useAnimePicClient;