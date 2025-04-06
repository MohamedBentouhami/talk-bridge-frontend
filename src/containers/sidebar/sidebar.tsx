import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { friendsFetch } from '../../store/friends/friend.action';
import Loader from '../../components/loader/loader';
import './sidebar.css';
import { useEffect } from 'react';

const FriendsList = () => {
    const dispatch = useDispatch<AppDispatch>();
    const imgServer = import.meta.env.VITE_SERVER_IMAGES;

    const { isLoadingFriend, friends, errorFriend } = useSelector((state: RootState) => state.friend);

    useEffect(() => {
        if (!isLoadingFriend && !errorFriend && friends === undefined) {
            dispatch(friendsFetch());
        }
    }, [dispatch, isLoadingFriend, errorFriend, friends]);

    return (
        <div className="friends-sidebar">
            {isLoadingFriend ? (
                <Loader />
            ) : (friends != undefined && friends!.length > 0) ? (
                <div>
                    <h3 className="sidebar-title">Friends</h3>
                    <ul className="friends-list">
                        {friends!.map(friend => (
                            <li key={friend.id} className="friend-item">
                                <img
                                    className="friend-image"
                                    src={`${imgServer}${friend.profilePict}`}
                                    alt={`${friend.firstName} ${friend.lastName}`}
                                />
                                <p className="friend-name">{friend.firstName} {friend.lastName}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : errorFriend ? (
                <p>{errorFriend}</p>
            ) : (
                <p>No friends found.</p>
            )}
        </div>
    );
};

export default FriendsList;
