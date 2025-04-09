import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMessages } from "../../services/friend.service";
import { Message } from "../../@types/message";

export const messagesFetch = createAsyncThunk(
    'message/fetchMessages',
    async (friendId: string) => {
        const response = await fetchMessages(friendId);
        return { friendId, messages: response };
    }
);

export const addMessage = createAction("message/add", (message: Message, friendId : string) => {
    return {
        payload: {message, friendId}
    }
})