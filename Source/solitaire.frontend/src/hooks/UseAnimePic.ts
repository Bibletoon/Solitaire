import axios from "axios";
import {useEffect, useState} from "react";

const useAnimePicClient = () => {
    const client = axios.create();
    const [picture, setPicture] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        getNext();
    }, [])

    const getNext = async () => {
        const response = await client.get("https://api.satou-chan.xyz/api/endpoint/dance")
        console.log(response);
        if (response.data.status !== "success") {
            setIsSuccess(false);
            return;
        }

        setPicture(response.data.url);
        setIsSuccess(true);
    }

    return {isSuccess, picture, getNext}
}

export default useAnimePicClient;