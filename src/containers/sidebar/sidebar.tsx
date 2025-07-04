import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { friendsFetch } from '../../store/friends/friend.action';
import Loader from '../../components/loader/loader';
import './sidebar.css';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import requestImg from "../../assets/friends.png"

export default function FriendsList({ selectedUser, onSelectFriend, onSelectProfile, onSelectFirstName, setViewMode }: any) {
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation();
    const imgServer = import.meta.env.VITE_SERVER_IMAGES;
    const { isLoadingFriend, friends, errorFriend, hasFetchedFriends } = useSelector((state: RootState) => state.friend);

    useEffect(() => {
        if (!hasFetchedFriends) {
            dispatch(friendsFetch());
        }
    }, [hasFetchedFriends]);

    const handleFriendSelection = (friendId: string, friendProfilePict: string, friendFirstName: string) => {
        onSelectFriend(friendId)
        onSelectProfile(friendProfilePict)
        onSelectFirstName(friendFirstName)
        setViewMode("chat");
    }

    return (
        <div className="friends-sidebar">
            <div>
                <h3 className="sidebar-title">{t('chats.sidebar-title')}</h3>
                <button className='request-button' onClick={() => setViewMode("requests")} >
                    <img src={requestImg}></img>
                    Requests</button>
                {isLoadingFriend ? (
                    <Loader />
                ) : (friends != undefined && friends!.length > 0) ? (
                    <>

                        <ul className="friends-list">
                            {friends!.map(friend => (
                                <li key={friend.id} className={`friend-item ${selectedUser === friend.id && 'selected'} `} onClick={() => handleFriendSelection(friend.id, friend.profilePict, friend.firstName)}>
                                    <img
                                        className="friend-image"
                                        src={`${imgServer}${friend.profilePict}`}
                                        alt={`${friend.firstName} ${friend.lastName}`}
                                    />
                                    <p className="friend-name">{friend.firstName} {friend.lastName}</p>
                                </li>
                            ))}
                        </ul>
                    </>
                ) : errorFriend ? (
                    <p>{errorFriend}</p>
                ) : (
                    <p>No friends found.</p>
                )}
            </div>
        </div >
    );
};

