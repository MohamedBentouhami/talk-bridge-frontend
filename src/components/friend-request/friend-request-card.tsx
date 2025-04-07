import { useDispatch } from "react-redux";
import addFriendRequest from "../../services/friend.service";
import { removeRequester } from "../../store/friends/friend.action";

export default function FriendRequestItem({ requester }: any) {
    const imgServer = import.meta.env.VITE_SERVER_IMAGES;
    const dispatch = useDispatch();

    const handleAcceptFriend = async () => {
        const requesterId = requester.id; 
        //await addFriendRequest(requesterId)
        dispatch(removeRequester(requesterId))
    }
    const handleIgnoreFriend = async () => {
        const requesterId = requester.id; 
        dispatch(removeRequester(requesterId))
    }

    return (
        <li className="requester-item">
            <img
                src={`${imgServer}${requester.profilePict}`}
                alt={`${requester.firstName} ${requester.lastName}`}
            />
            <div className="requester-info">
                <p >{requester.firstName} {requester.lastName}</p>
            </div>
            <div className="requester-actions">
                <button className="ignore-btn" onClick={handleIgnoreFriend}>Ignore</button>
                <button className="accept-btn" onClick={handleAcceptFriend}>Accept</button>
            </div>
        </li>)
}