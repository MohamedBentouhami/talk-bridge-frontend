import { createReducer } from "@reduxjs/toolkit";
import { Voiceroom } from "../../@types/voiceroom";
import { addParticipant, addVoiceroom, closeVoiceroom, removeParticipant, voiceroomsFetch } from "./voiceroom.action";

type VoiceroomState = {
    isLoading: boolean;
    voicerooms?: Voiceroom[];
    errorVoiceroom?: string;
    hasFetchedVoiceroom: boolean;
}
const initialState: VoiceroomState = {
    isLoading: false,
    voicerooms: undefined,
    errorVoiceroom: undefined,
    hasFetchedVoiceroom: false
}

const VoiceroomReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(voiceroomsFetch.pending, (state) => {
            state.isLoading = true;
            state.errorVoiceroom = undefined;
        })
        .addCase(voiceroomsFetch.fulfilled, (state, action) => {
            state.isLoading = false;
            state.voicerooms = action.payload;
            state.hasFetchedVoiceroom = true;
        })
        .addCase(voiceroomsFetch.rejected, (state, action) => {
            state.isLoading = false;
            state.errorVoiceroom = action.error.message ?? 'Failed to fetch voicerooms';
        })
        .addCase(addVoiceroom, (state, action) => {
            const newVr = action.payload;
            state.voicerooms?.unshift(newVr);
        })
        .addCase(addParticipant, (state, action) => {
            const { vrId, participant } = action.payload;
            const vr = state.voicerooms?.find(vr => vr.id === vrId);
            vr?.participants.push(participant);
        })
        .addCase(removeParticipant, (state, action) => {
            const { vrId, userId } = action.payload;
            const vr = state.voicerooms?.find(vr => vr.id === vrId);
            if (vr) {
                vr.participants = vr.participants.filter(p => p.id !== userId);
            }
        })
        .addCase(closeVoiceroom, (state, action) => {
            const vrId = action.payload;
            const vr = state.voicerooms?.find(vr => vr.id === vrId);
            if(vr){
                vr.isActive = false
            }
        })

});

export default VoiceroomReducer;