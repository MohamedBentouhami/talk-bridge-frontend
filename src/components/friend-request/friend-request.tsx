import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store"
import Loader from "../loader/loader";
import { requestersFetch } from "../../store/friends/friend.action";
import "./friend-request.css"
import { useEffect } from "react";

export default function FriendRequests() {
    const dispatch = useDispatch<AppDispatch>();
    const imgServer = import.meta.env.VITE_SERVER_IMAGES;
    const { isLoadingRequester, requesters, errorRequester } = useSelector((state: RootState) => state.friend)
    useEffect(() => {
        if (!isLoadingRequester && !errorRequester && requesters === undefined) {
            dispatch(requestersFetch());
        }
    }, [dispatch, isLoadingRequester, errorRequester, requesters]);
    return <div>
        <h3>Friends request</h3>
        {isLoadingRequester ? <Loader></Loader> : (requesters !== undefined && requesters!.length > 0) ?
            (<ul className="requester-list">
                {requesters!.map(requester => (
                    <li key={requester.id} className="requester-item">
                        <img
                            src={`${imgServer}${requester.profilePict}`}
                            alt={`${requester.firstName} ${requester.lastName}`}
                        />
                        <div className="requester-info">
                            <p >{requester.firstName} {requester.lastName}</p>
                        </div>
                        <div className="requester-actions">

                            <button className="ignore-btn">Ignore</button>
                            <button className="accept-btn">Accept</button>
                        </div>
                    </li>
                ))}
            </ul>) : errorRequester ? (
                <p>{errorRequester}</p>
            ) : (
                <p>No requesters found.</p>
            )}

    </div>
}