import "./new-partner-card.css"
import { Person } from "../../@types/person";
import { MoveHorizontal, UserRoundPlus } from "lucide-react";
import { addFriendRequest } from "../../services/friend.service";
import { useTranslation } from "react-i18next";
import { updatePartner } from "../../store/friends/friend.action";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";

type NewPartnerCardProps = {
    user: Person;
};

export default function NewPartnerCard({ user }: NewPartnerCardProps) {
    const { t } = useTranslation();
    const imgServer = import.meta.env.VITE_SERVER_IMAGES;
    const dispatch = useDispatch<AppDispatch>();

    const handleAddPartner = async () => {
        dispatch(updatePartner(user.id, true))
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
                disabled={user.isPending ?? false}
                className="add-button"
            >
                {user.isPending ?? false ? t('connect.requestSent') : t('connect.addPartner')}
                <UserRoundPlus />
            </button>
            <div>

            </div>
        </div>
    );
}
