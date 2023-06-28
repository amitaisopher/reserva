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