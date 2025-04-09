import { io } from "socket.io-client";

const userId = localStorage.getItem("userId");

export function openSocket() {
    const socket = io(import.meta.env.VITE_WEB_SOCKET, {
        query: {userId},
    });

    return socket;
}

// export default socket;