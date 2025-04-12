import { useState } from "react";
import ChatContainer from "../../containers/chat-container/chat-container";
import NoChatContainer from "../../containers/chat-container/no-chat-container";
import SideBar from "../../containers/sidebar/sidebar";
import "./chats.css"

export default function ChatsPage() {
    const [selectedUser, setSelectedUser] = useState("");
    const [profilePict, setProfilePict] = useState("");
    const [firstName, setFirstName] = useState("");


    return <div className="chats-page">
        <SideBar selectedUser={selectedUser} onSelectFriend={setSelectedUser} onSelectProfile={setProfilePict} onSelectFirstName={setFirstName} />
        {selectedUser ?
            <ChatContainer friendId={selectedUser} profilePict={profilePict} firstName={firstName} /> :
            <NoChatContainer />}
    </div>
}