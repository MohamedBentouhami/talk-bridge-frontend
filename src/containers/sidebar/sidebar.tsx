import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../store/store";
import { useEffect } from "react";
import { friendsFetch } from "../../store/friends/friend.action";
import { Loader } from "lucide-react";

export default function SideBar() {
    const dispatch = useDispatch<AppDispatch>();
    const { friends, search } = useSelector((state: RootState) => state.friend);

    useEffect(() => {
        if (!search.result) {
            dispatch(friendsFetch());
        }
    }, [dispatch, search.result]);

    if (search.friendsLoading) return <Loader></Loader>
    if (search.error) return <p>{search.error}</p>
    return <>
    <h2>Test</h2>
        <ul>
            {friends.map((friend) =>
                <li key={friend.id}>{friend.first_name}</li>
            )}
        </ul>
    </>

}