import { createReducer } from '@reduxjs/toolkit';
import { Person } from '../../@types/friend';
import { friendsFetch } from './friend.action';

type FriendState = {
    isLoadingFriend: boolean;
    friends?: Person[];
    errorFriend?: string;
    
};

const initialState: FriendState = {
    isLoadingFriend: false,
    friends: [],
    errorFriend: undefined
};

const friendsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(friendsFetch.pending, (state) => {
            state.isLoadingFriend = true;
            state.errorFriend = undefined;
        })
        .addCase(friendsFetch.fulfilled, (state, action) => {
            state.isLoadingFriend = false;
            state.friends = action.payload;
        })
        .addCase(friendsFetch.rejected, (state, action) => {
            state.isLoadingFriend = false;
            state.errorFriend = action.error.message ?? 'Failed to fetch friends';
        });
});

export default friendsReducer;
