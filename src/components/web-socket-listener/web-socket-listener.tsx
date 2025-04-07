import { useDispatch } from "react-redux";
import socket from "../../socket";
import { useEffect } from "react";
import { addFriend, addRequester, removePartner } from "../../store/friends/friend.action";

export default function WebSocketListener() {
    const dispatch = useDispatch();
    useEffect(() => {
        console.log('Socket connected:', socket.connected);
        if (Notification.permission !== "granted") {
            Notification.requestPermission();
        }
    
        socket.on("new_request", (data) => {
            console.log("Received new request:", data);
            if (Notification.permission === "granted") {
                new Notification("New Request", {
                    body: `You have a new request from ${data.newRequester.firstName}`,
                });
            }
            dispatch(addRequester(data.newRequester));
        });
    
        socket.on("accepted_friend", (data) => {
            console.log("Received accepted friend:", data.newFriend);
            dispatch(addFriend(data.newFriend));
            dispatch(removePartner(data.newFriend.id));

        });
    
        return () => {
            socket.off("new_request");
            socket.off("accepted_friend");
        };
    }, [dispatch]);
    

    return null;
}