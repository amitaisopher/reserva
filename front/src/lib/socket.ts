import { createContext } from "react";
import { Socket, io } from "socket.io-client";
import { getBaseURLForEnvironment } from "@/lib/utils";


const baseUrl = getBaseURLForEnvironment()
export const socket = io(baseUrl)
export const SocketIoContext = createContext<Socket>(socket)