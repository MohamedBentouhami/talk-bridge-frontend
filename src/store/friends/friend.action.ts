import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchFriends } from "../../services/friend.service";
import { RootState } from "../store";
import { Person } from "../../@types/friend";

export const friendsFetch = createAsyncThunk(
    'friend/fetch',
    async () => {

        try {
            const response = await fetchFriends();
            return response;
        } catch (error) {
            throw error;
        }
    },
    {
        condition: (_, { getState }) => {
            const state = getState() as RootState;
            return !state.friend.search.friendsLoading;
        }
    }
);
export const partnersFetch = createAsyncThunk(
    'partner/fetch',
    async () => {

        try {
            const response = await fetchFriends();
            return response;
        } catch (error) {
            throw error;
        }
    },
    {
        condition: (_, { getState }) => {
            const state = getState() as RootState;
            return !state.friend.search.partnersLoading;
        }
    }
);
export const requestersFetch = createAsyncThunk(
    'requester/fetch',
    async () => {

        try {
            const response = await fetchFriends();
            return response;
        } catch (error) {
            throw error;
        }
    },
    {
        condition: (_, { getState }) => {
            const state = getState() as RootState;
            return !state.friend.search.requestersLoading;
        }
    }
);

export const addRequester = createAction<Person>("friend/addRequester")