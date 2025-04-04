import ChatContainer from "../../containers/chat-container/chat-container";
import NoChatContainer from "../../containers/chat-container/no-chat-container";
import SideBar from "../../containers/sidebar/sidebar";

export default function DashBoardPage() {
    const selectedUser = undefined;
    return <div><SideBar />
        {selectedUser ? <ChatContainer /> : <NoChatContainer />}
    </div>
}