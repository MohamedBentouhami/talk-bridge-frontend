import useSWR from "swr"
import { fetchMessages } from "../../services/friend.service"
import Loader from "../../components/loader/loader";
import { useEffect, useState } from "react";
import { Message } from "../../@types/message";

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

    const handleSendMessage = () => {
        const msg : Message = {
            id: "",
            senderId: "",
            receiverId: friendId,
            content: newMessage
        }
        setNewMessage("");
        setMessages([...messages, msg]);
        // requête api
    }


    if (error) return <div>{error}</div>

    return <>
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
    </>
}