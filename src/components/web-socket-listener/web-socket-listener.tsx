import { useDispatch } from "react-redux";
import socket from "../../socket";
import { useEffect } from "react";
import { addRequester } from "../../store/friends/friend.action";

export default function WebSocketListener() {
    const dispatch = useDispatch();

    useEffect(() => {
        socket.on("new_request", (data) => {
            console.log(data)
            //dispatch(addRequester(data.senderId));
        });

        return () => {
            socket.off("new_request");
        };
    }, [dispatch]);

    return null;
}