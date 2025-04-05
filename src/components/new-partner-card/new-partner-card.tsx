import { useState } from "react";
import { User } from "../../@types/user";
import addFriend from "../../services/friend.service";
import "./new-partner-card.css"

type NewPartnerCardProps = {
    user: User;
};

export default function NewPartnerCard({ user }: NewPartnerCardProps) {
    const [isRequestSend, setRequest] = useState(false);

    const handleAddPartner = async () => {
        await addFriend(user.id);
        setRequest(true);
        // redux ?
    };

    return (
        <div className="partner-card">
            <div className="partner-info">
                <p className="partner-name">{user.firstName}</p>
                <button 
                    onClick={handleAddPartner} 
                    disabled={isRequestSend} 
                    className="add-button"
                >
                    {isRequestSend ? 'Request Sent' : 'Add Partner'}
                </button>
            </div>
        </div>
    );
}
