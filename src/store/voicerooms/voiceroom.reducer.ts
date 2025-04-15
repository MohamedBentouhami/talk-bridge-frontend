import { createReducer } from "@reduxjs/toolkit";
import { Voiceroom } from "../../@types/voiceroom";
import { voiceroomsFetch } from "./voiceroom.action";

type VoiceroomState = {
    isLoading: boolean;
    voicerooms?: Voiceroom;
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

});

export default VoiceroomReducer;