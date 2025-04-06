import ChatContainer from "../../containers/chat-container/chat-container";
import NoChatContainer from "../../containers/chat-container/no-chat-container";
import SideBar from "../../containers/sidebar/sidebar";
import "./chats.css"

export default function ChatsPage() {
    const selectedUser = undefined;

    return <div className="chats-page"><SideBar />
        {selectedUser ? <ChatContainer /> : <NoChatContainer />}
    </div>
}