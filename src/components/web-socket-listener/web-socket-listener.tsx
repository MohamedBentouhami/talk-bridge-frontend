import { useDispatch } from "react-redux";
import socket from "../../socket";
import { useEffect } from "react";
import { addRequester } from "../../store/friends/friend.action";

export default function WebSocketListener() {
    const dispatch = useDispatch();


    useEffect(() => {
        if (Notification.permission !== "granted") {
            Notification.requestPermission();
        }
        socket.on("new_request", (data) => {
            console.log(data);
            if (Notification.permission === "granted") {
                new Notification("New Request", {
                    body: `You have a new request from ${data.senderId}`,
                });
            }
            dispatch(addRequester(data.newRequester));
        });
        return () => {
            socket.off("new_request");
        };
    }, [dispatch]);

    return null;
}