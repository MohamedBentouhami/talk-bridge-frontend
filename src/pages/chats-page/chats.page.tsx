import { useState } from "react";
import ChatContainer from "../../containers/chat-container/chat-container";
import NoChatContainer from "../../containers/chat-container/no-chat-container";
import SideBar from "../../containers/sidebar/sidebar";
import "./chats.css"
import FriendRequests from "../../components/friend-request/friend-request";

export default function ChatsPage() {
    const [selectedUser, setSelectedUser] = useState("");
    const [profilePict, setProfilePict] = useState("");
    const [firstName, setFirstName] = useState("");
    const [viewMode, setViewMode] = useState("default");


    const renderContent = () => {
        switch (viewMode) {
            case "chat":
                return (
                    <ChatContainer
                        friendId={selectedUser}
                        profilePict={profilePict}
                        firstName={firstName}
                    />
                );
            case "requests":
                return <FriendRequests />;
            default:
                return <NoChatContainer />;
        }
    };

    return <div className="chats-page">
        <SideBar selectedUser={selectedUser} onSelectFriend={setSelectedUser} onSelectProfile={setProfilePict}
            onSelectFirstName={setFirstName} setViewMode={setViewMode} />
        {renderContent()}
    </div>
}