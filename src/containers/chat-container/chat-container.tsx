import useSWR from "swr"
import { fetchMessages, sendMessage } from "../../services/friend.service"
import Loader from "../../components/loader/loader";
import { useEffect, useState } from "react";
import { Message } from "../../@types/message";
import "./chat-container.css"
import socket from "../../socket";
import { nanoid } from "nanoid";

type ChatContainerProps = {
    friendId: string
}

export default function ChatContainer({ friendId }: ChatContainerProps) {

    const { data, error, isLoading } = useSWR(`fetch/messages/${friendId}`, () => fetchMessages(friendId));
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState("");
    useEffect(() => {
        if (data) {
            setMessages(data);
        }
    }, [data])


    const handleSendMessage = async () => {
        const msg : Message = {
            id: nanoid(),
            senderId: "",
            receiverId: friendId,
            content: newMessage
        }
        await sendMessage(friendId, newMessage);
        setMessages([...messages, msg]);
        setNewMessage("");
    }

    useEffect(()=>{
        socket.on("new_message", (data)=>{
            console.log(data.newMessage);
            setMessages([...messages, data.newMessage ])
        })
        
        return ()=>{
            socket.off("new_message");
        }
    })


    if (error) return <div>{error}</div>

    return <div className="chat-container">

        {
            isLoading ? <Loader></Loader> : <div>

                <div>
                    {messages && messages.length > 0 ? (
                        messages.map((message: { id: string, content: string }) => (
                            <div key={message.id}>
                                {message.content}
                            </div>
                        ))
                    ) : (
                        <div>No messages yet.</div>
                    )}
                    <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
                    <button onClick={handleSendMessage}>Send</button>
                </div>
            </div>
        }
        </div>
    
}