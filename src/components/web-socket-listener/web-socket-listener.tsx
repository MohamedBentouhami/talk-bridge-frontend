import { useDispatch } from "react-redux";
import { openSocket } from "../../socket";
import { useEffect } from "react";
import { addFriend, addRequester, removePartner, updatePartner } from "../../store/friends/friend.action";
import { AppDispatch } from "../../store/store";
import { addMessage, correctMessage } from "../../store/messages/message.action";
import { addParticipant, addVoiceroom } from "../../store/voicerooms/voiceroom.action";



export default function WebSocketListener() {
    const userId = localStorage.getItem("id");
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        let isCancel = false;

        const socket = openSocket();

        socket.on("connect", () => {
            if (isCancel) return;
            socket.emit("auth", userId)
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
            socket.on("cancel_friend", (data) => {
                console.log("Received refused friend:", data.userId);
                dispatch(updatePartner(data.userId, false));
            });

            socket.on("new_message", (data) => {
                dispatch(addMessage(data.newMessage, data.newMessage.senderId))
                if (Notification.permission === "granted") {
                    new Notification("New Message", {
                        body: `You have a new Message from ${data.newMessage.receiverName}`,
                    });
                }
            })
            socket.on("add_correction", (data) => {
                dispatch(correctMessage(data.updatedMsg.id, data.updatedMsg.correctionProvided, data.updatedMsg.receiverId))
            })
            socket.on("new_voiceroom", (data) => {
                dispatch(addVoiceroom(data.newVoiceroom))
            })
            socket.on("join_voiceroom", (data) => {
                dispatch(addParticipant(data.voiceroomId, data.participant))
                console.log(data.newVoiceroom)
            })
        })



        return () => {
            isCancel = true;
            if (socket.connected) {
                socket.off("new_request");
                socket.off("accepted_friend");
                socket.off("cancel_friend");
                socket.off("new_message");

                socket.emit("logout", { userId });;
                socket.disconnect();
            }
        };
    }, []);


    return null;
}