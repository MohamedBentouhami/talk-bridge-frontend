import { createReducer } from "@reduxjs/toolkit";
import { Message } from "../../@types/message";
import { addMessage, messagesFetch } from "./message.action";

type MessageState = {
    isLoading: boolean;
    messagesByUser : {
        [friendId: string ]: Message[] | undefined,
        
    };
    error ?: string;
}

const initialState: MessageState = {
    isLoading: false,
    messagesByUser: {},
    error: undefined
}

const messageReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(messagesFetch.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        })
        .addCase(messagesFetch.fulfilled, (state, action) => {
            state.isLoading = false;
            const {friendId, messages} = action.payload;
            state!.messagesByUser[friendId] = messages;
        })
        .addCase(messagesFetch.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message ?? 'Failed to fetch messages';
        })
        .addCase(addMessage, (state, action) => {
            state.isLoading = false;
            const {friendId, message} = action.payload;
            state.messagesByUser[friendId]?.push(message);

        })

});

export default messageReducer;