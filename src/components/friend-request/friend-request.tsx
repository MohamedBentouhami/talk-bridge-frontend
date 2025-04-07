import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store"
import Loader from "../loader/loader";
import { requestersFetch } from "../../store/friends/friend.action";
import "./friend-request.css"
import { useEffect } from "react";
import FriendRequestItem from "./friend-request-card";

export default function FriendRequests() {
    const dispatch = useDispatch<AppDispatch>();
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
                {requesters!.map
                    (requester => <FriendRequestItem key={requester.id} requester={requester}></FriendRequestItem>)
                }
            </ul>) : errorRequester ? (
                <p>{errorRequester}</p>
            ) : (
                <p>No requesters found.</p>
            )}

    </div>
}