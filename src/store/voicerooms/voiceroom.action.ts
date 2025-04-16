import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchVoiceroom } from "../../services/voiceroom.service";
import { Participant, Voiceroom } from "../../@types/voiceroom";

export const voiceroomsFetch = createAsyncThunk(
    'voiceroom/fetchVoiceroom',
    async () => {
        const response = await fetchVoiceroom();
        return response;
    }
);

export const addVoiceroom = createAction("voiceroom/add", (newVr: Voiceroom) => {
    return {
        payload: newVr
    }
})

export const addParticipant = createAction("voiceroom/add/participant", (vrId: string, participant: Participant) => {
    return {
        payload: { vrId, participant }
    }
})