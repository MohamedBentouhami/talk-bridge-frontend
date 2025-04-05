import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { friendsFetch } from '../../store/friends/friend.action';
import Loader from '../../components/loader/loader';
import './sidebar.css';

const FriendsList = () => {
    const dispatch = useDispatch<AppDispatch>();
    const server = import.meta.env.VITE_SERVER_IMAGES;

    const { isLoadingFriend: isLoading, friends, errorFriend: error } = useSelector((state: RootState) => state.friend);

    if (!isLoading && !friends!.length && !error) {
        dispatch(friendsFetch());
    }

    return (
        <div className="friends-sidebar">
            {isLoading ? (
                <Loader />
            ) : friends!.length > 0 ? (
                <div>
                    <h3 className="sidebar-title">Friends</h3>
                    <ul className="friends-list">
                        {friends!.map(friend => (
                            <li key={friend.id} className="friend-item">
                                <img 
                                    className="friend-image" 
                                    src={`${server}${friend.profilePict}`} 
                                    alt={`${friend.firstName} ${friend.lastName}`} 
                                />
                                <p className="friend-name">{friend.firstName} {friend.lastName}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <p>No friends found.</p>
            )}
        </div>
    );
};

export default FriendsList;
