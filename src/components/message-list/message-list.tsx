import { useEffect, useRef, useState } from "react";
import { Message } from "../../@types/message"
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { sendMessage } from "../../services/friend.service";
import { addMessage } from "../../store/messages/message.action";
import "./message-list.css"
import DialogDemo from "../correction-dialog/correction-dialog";
import MessageItem from "./message-item";

type ChatListProps = {
    messages: Message[],
    friendId: string,
    profilePict: string
}
export default function MessageList({ messages, friendId, profilePict }: ChatListProps) {
    const [newMessage, setNewMessage] = useState("");
    const dispatch = useDispatch<AppDispatch>();
    const handleSendMessage = async () => {

        const message = await sendMessage(friendId, newMessage);
        dispatch(addMessage(message, friendId))
        setNewMessage("");
    }
    const myId = localStorage.getItem("id");
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [openModal, setOpenModal] = useState(false);
    const [correctMsg, setCorrectMsg] = useState<Message | undefined>(undefined);

    const handleCorrectMsg = (message: Message) => {
        setOpenModal(true)
        setCorrectMsg(message)
    }

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <>
            <div className="chat-container">
                <div className="message-list">
                    {messages && messages.length > 0 ? (
                        messages.map((message: Message) => {
                            const myMessages = message.senderId === myId;
                            return <MessageItem isMyMessage={myMessages} message={message} profilePict={profilePict} handleCorrectMsg={handleCorrectMsg}>
                            </MessageItem>;
                        })
                    ) : (
                        <div className="no-messages">No messages yet.</div>
                    )}
                    <div ref={messagesEndRef}></div>
                </div>

                <div className="input-container">
                    <input
                        type="text"
                        className="message-input"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type your message..."
                    />
                    <button onClick={handleSendMessage} className="send-button">
                        Send
                    </button>
                </div>

            </div>
            {openModal && <DialogDemo
                open={openModal}
                onOpenChange={setOpenModal}
                messageToCorrect={correctMsg!}
            />}
        </>
    )
}