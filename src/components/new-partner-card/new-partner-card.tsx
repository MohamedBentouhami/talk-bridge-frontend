import { User } from "../../@types/user";
import socket from "../../socket";

type NewPartnerCardProps = {
    user: User;
};


export default function NewPartnerCard({ user }: NewPartnerCardProps) {
    const handleAddPartner = async () => {
        socket.emit("sendFriendRequest", { friendId: user.id });
    };

    return <p>{user.firstName}<button onClick={handleAddPartner}>Add partner</button></p>;
}