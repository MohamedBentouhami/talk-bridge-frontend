import { createReducer } from "@reduxjs/toolkit"
import { Person } from "../../@types/friend"
import { addRequester, friendsFetch, partnersFetch, requestersFetch } from "./friend.action"


export type FriendStateReducer = {
    friends: Person[],
    partners: Person[],
    requesters: Person[],
    search: {
        friendsLoading: boolean,
        partnersLoading: boolean,
        requestersLoading: boolean,
        result: any,
        error: string | null
    }
}

const initialState: FriendStateReducer = {
    friends: [],
    partners: [],
    requesters: [],
    search: {
        friendsLoading: false,
        partnersLoading: false,
        requestersLoading: false,
        result: null,
        error: null
    }
}

const FriendReducer = createReducer<FriendStateReducer>(initialState, (builder) => {
    builder
        .addCase(friendsFetch.pending, (state) => {
            state.search.friendsLoading = true;
            state.search.error = null;
        })
        .addCase(friendsFetch.fulfilled, (state, action) => {
            state.search.friendsLoading = false;
            state.friends = action.payload;
        })
        .addCase(friendsFetch.rejected, (state, action) => {
            state.search.friendsLoading = false;
            state.search.error = action.error?.message ?? 'Error'
        })
        .addCase(partnersFetch.pending, (state) => {
            state.search.partnersLoading = true;
            state.search.error = null;
        })
        .addCase(partnersFetch.fulfilled, (state, action) => {
            state.search.partnersLoading = false;
            state.partners = action.payload;
        })
        .addCase(partnersFetch.rejected, (state, action) => {
            state.search.partnersLoading = false;
            state.search.error = action.error?.message ?? 'Error'
        })
        .addCase(requestersFetch.pending, (state) => {
            state.search.requestersLoading = true;
            state.search.error = null;
        })
        .addCase(requestersFetch.fulfilled, (state, action) => {
            state.search.requestersLoading = false;
            state.requesters = action.payload;
        })
        .addCase(requestersFetch.rejected, (state, action) => {
            state.search.requestersLoading = false;
            state.search.error = action.error?.message ?? 'Error'
        }).addCase(addRequester, (state, action) => {
            state.requesters.push(action.payload);
        });;
})

export default FriendReducer;