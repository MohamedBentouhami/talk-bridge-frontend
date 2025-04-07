import { io } from "socket.io-client";

const userId = localStorage.getItem("userId");
const socket = io(import.meta.env.VITE_WEB_SOCKET, {
    query: {userId},
    reconnectionAttempts: 5,
    reconnectionDelay: 1000,  
    reconnectionDelayMax: 5000,
});

export default socket;