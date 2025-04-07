import { useState } from "react";
import "./new-partner-card.css"
import { Person } from "../../@types/person";
import { MoveHorizontal, UserRoundPlus } from "lucide-react";
import { addFriendRequest } from "../../services/friend.service";
import { useTranslation } from "react-i18next";

type NewPartnerCardProps = {
    user: Person;
};

export default function NewPartnerCard({ user }: NewPartnerCardProps) {
    const { t } = useTranslation();
    const [isRequestSend, setRequest] = useState(user.isPending);
    const imgServer = import.meta.env.VITE_SERVER_IMAGES;

    const handleAddPartner = async () => {
        setRequest(true);
        await addFriendRequest(user.id);
    };

    return (
        <div className="partner-card">

            <img src={imgServer + user.profilePict}></img>
            <div className="partner-info">
                <p className="partner-name">{`${user.firstName} ${user.lastName}`}</p>
                <div>
                    <p>{user.nativeLanguage.toUpperCase()}</p><MoveHorizontal /> <p>{user.targetLanguage.toUpperCase()}</p>
                </div>
                <p className="bio">
                    {user.bio}
                </p>
            </div>
            <button
                onClick={handleAddPartner}
                disabled={isRequestSend}
                className="add-button"
            >
                {isRequestSend ? t('connect.requestSent') : t('connect.addPartner')}
                <UserRoundPlus />
            </button>
            <div>

            </div>
        </div>
    );
}
