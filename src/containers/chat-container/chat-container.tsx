import Loader from "../../components/loader/loader";
import { useEffect } from "react";
import "./chat-container.css"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { messagesFetch } from "../../store/messages/message.action";
import MessageList from "../../components/message-list/message-list";

type ChatContainerProps = {
    friendId: string,
    profilePict: string,
    firstName: string
}

export default function ChatContainer({ friendId, profilePict , firstName}: ChatContainerProps) {
    const dispatch = useDispatch<AppDispatch>();
    const { messagesByUser, error, isLoading } = useSelector((state: RootState) => state.message);
    const messages = messagesByUser?.[friendId];

    useEffect(() => {
        if (!messagesByUser?.[friendId]) {
            dispatch(messagesFetch(friendId));
        }
    }, [friendId]);


    if (error) return <div>{error}</div>

    return <div className="chat-container">

        {
            isLoading ? <Loader></Loader> : (messages != undefined) ? (
                <MessageList messages={messages} friendId={friendId} profilePict={profilePict} firstName={firstName}></MessageList>
            ) : (
                <p>{error}</p>
            )
        }
    </div>

};
