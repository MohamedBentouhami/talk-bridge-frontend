import { createReducer } from "@reduxjs/toolkit"
import { Friend } from "../../@types/friend"
import { friendsFetch } from "./friend.action"


export type FriendStateReducer = {
    friends: Friend[],
    search: {
        isLoading: boolean,
        result: any,
        error: string | null
    }
}

const initialState: FriendStateReducer = {
    friends: [],
    search: {
        isLoading: false,
        result: null,
        error: null
    }
}

const FriendReducer = createReducer<FriendStateReducer>(initialState, (builder)=>{
    builder.addCase(friendsFetch.pending, (state) => {
        state.search.isLoading = true;
        state.search.error = null;
    })
    .addCase(friendsFetch.fulfilled, (state, action) => {
        state.search.isLoading = false;
        state.friends = action.payload;
    })
    .addCase(friendsFetch.rejected, (state, action) => {
        state.search.isLoading = false;
        state.search.error = action.error?.message ?? 'Error'
    });
})

export default FriendReducer;