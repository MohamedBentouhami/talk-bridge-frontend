import { createReducer } from '@reduxjs/toolkit';
import { Person } from '../../@types/person';
import { addFriend, addRequester, deleteAll, friendsFetch, partnersFetch, removePartner, removeRequester, requestersFetch, updatePartner } from './friend.action';

type FriendState = {
    isLoadingFriend: boolean;
    friends?: Person[];
    errorFriend?: string;
    hasFetchedFriends: boolean;


    isLoadingPartners: boolean;
    partners?: Person[];
    errorPartner?: string;
    hasFetchedPartners: boolean;

    isLoadingRequester: boolean;
    requesters?: Person[];
    errorRequester?: string;
    hasFetchedRequester: boolean
    

};

const initialState: FriendState = {
    isLoadingFriend: false,
    friends: undefined,
    errorFriend: undefined,
    hasFetchedFriends: false,

    isLoadingPartners: false,
    partners: undefined,
    errorPartner: undefined,
    hasFetchedPartners: false,

    isLoadingRequester: false,
    requesters: undefined,
    errorRequester: undefined,
    hasFetchedRequester:false
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
            state.hasFetchedFriends = true;
        })
        .addCase(friendsFetch.rejected, (state, action) => {
            state.isLoadingFriend = false;
            state.errorFriend = action.error.message ?? 'Failed to fetch friends';
        })

        .addCase(partnersFetch.pending, (state) => {
            state.isLoadingPartners = true;
            state.errorPartner = undefined;
        })
        .addCase(partnersFetch.fulfilled, (state, action) => {
            state.isLoadingPartners = false;
            state.partners = action.payload;
            state.hasFetchedPartners = true;
        })
        .addCase(partnersFetch.rejected, (state, action) => {
            state.isLoadingPartners = false;
            state.errorPartner = action.error.message ?? 'Failed to fetch friends';
        })

        .addCase(requestersFetch.pending, (state) => {
            state.isLoadingRequester = true;
            state.errorRequester = undefined;
        })
        .addCase(requestersFetch.fulfilled, (state, action) => {
            state.isLoadingRequester = false;
            state.requesters = action.payload;
            state.hasFetchedRequester = true;
        })
        .addCase(requestersFetch.rejected, (state, action) => {
            state.isLoadingRequester = false;
            state.errorRequester = action.error.message ?? 'Failed to fetch friends';
        })
        .addCase(addRequester, (state, action) => {
            const requester = action.payload;
            state.requesters?.push(requester);
        })
        .addCase(removeRequester, (state, action) => {
            const requesterId = action.payload;
            state.requesters = state.requesters?.filter(requester => requester.id !== requesterId);
        })
        .addCase(addFriend, (state, action) => {
            const newFriend = action.payload;
            state.friends?.push(newFriend);
        })
        .addCase(removePartner, (state, action) => {
            const partnerId = action.payload;
            state.partners = state.partners?.filter(partner => partner.id !== partnerId);
        })
        .addCase(updatePartner, (state, action) => {
            const { partnerId, isPending } = action.payload;
            console.log(isPending)
            const partner = state.partners?.find(p => p.id === partnerId);
            if (partner) {
                partner.isPending = isPending;
            }
        })
        .addCase(deleteAll, (state) => {
            state.friends = undefined
            state.partners = undefined;
            state.requesters = undefined;
            state.hasFetchedFriends = false;
            state.hasFetchedPartners = false;
            state.hasFetchedRequester = false;
        });
});

export default friendsReducer;
