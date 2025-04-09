import { configureStore } from "@reduxjs/toolkit";
import FriendReducer from "./friends/friend.reducer";
import messageReducer from "./messages/message.reducer";


const store = configureStore({
    reducer: {
        friend: FriendReducer,
        message: messageReducer
    }
})

export default store;

export type AppStore = typeof store

export type RootState = ReturnType<AppStore['getState']>

export type AppDispatch = AppStore['dispatch']