import { io } from "socket.io-client";

const userId = localStorage.getItem("userId");
const socket = io(import.meta.env.VITE_WEB_SOCKET, {
    query: {userId}
});

export default socket;