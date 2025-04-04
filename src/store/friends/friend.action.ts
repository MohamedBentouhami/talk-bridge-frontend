import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchFriends } from "../../services/friend.service";
import { RootState } from "../store";

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
            return !state.friend.search.isLoading;
        }
    }
);