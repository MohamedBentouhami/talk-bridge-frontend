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

export const addMessage = createAction("message/add", (message: Message, friendId: string) => {
    return {
        payload: { message, friendId }
    }
})


export const correctMessage = createAction("message/add-correction", (messageId: string, correctedMsg: string, friendId: string) => {
    return {
        payload: { messageId, correctedMsg, friendId }
    }
})
 export const deleteAllMessages = createAction("message/deleteAll");

