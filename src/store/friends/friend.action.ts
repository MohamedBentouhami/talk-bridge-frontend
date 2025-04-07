import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchFriends, fetchRequesters } from "../../services/friend.service";
import { fetchNewPartners } from "../../services/user.service";
import { Person } from "../../@types/person";


export const friendsFetch = createAsyncThunk(
    'friend/fetch',
    async () => {
        const response = await fetchFriends();
        return response;
    }
);
export const partnersFetch = createAsyncThunk(
    'partner/fetch',
    async (lg : string) => {
        try {
            const response = await fetchNewPartners(lg);
            return response;
        } catch (error) {
            throw error;
        }
    }
);

export const requestersFetch = createAsyncThunk(
    'requester/fetch',
    async () => {

        try {
            const response = await fetchRequesters();
            return response;
        } catch (error) {
            throw error;
        }
    }
);

export const addRequester = createAction("requester/add", (newFriend : Person)=>{
    return {
        payload: newFriend
    }
})
export const removeRequester = createAction("requester/remove", (requesterId : string)=>{
    return {
        payload: requesterId
    }
})