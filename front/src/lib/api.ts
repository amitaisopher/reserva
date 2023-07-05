import axios, { AxiosRequestConfig } from "axios";
import { getBaseURLForEnvironment } from "@/lib/utils";

const authenticatedApiRequest = (options: AxiosRequestConfig) => {
    return axios.request({ ...options, withCredentials: true })
}

export async function getEventsList() {
    const config: AxiosRequestConfig = {
        method: "GET",
        maxBodyLength: Infinity,
        baseURL: `${getBaseURLForEnvironment()}/api/v1`,
        url: '/events',
        withCredentials: true
    }
    try {
        const response = await axios.request(config)
        return response.data
    } catch (error) {
        console.error(error)
    }
}


export async function createEvent(data: object) {
    const config: AxiosRequestConfig = {
        method: "POST",
        maxBodyLength: Infinity,
        baseURL: `${getBaseURLForEnvironment()}/api/v1`,
        url: '/event',
        withCredentials: true,
        headers: {
            "Content-Type": "application/json"
        },
        data
    }
    return await axios.request(config)
}

export async function updateEvent(data: object) {
    const config: AxiosRequestConfig = {
        method: "PUT",
        maxBodyLength: Infinity,
        baseURL: `${getBaseURLForEnvironment()}/api/v1`,
        url: `/event/${data.id}`,
        withCredentials: true,
        headers: {
            "Content-Type": "application/json"
        },
        data
    }
    return await axios.request(config)
}