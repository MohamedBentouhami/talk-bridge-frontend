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
export const removeParticipant = createAction("voiceroom/remove/participant", (vrId: string, userId: string) => {
    return {
        payload: { vrId, userId }
    }
})
export const closeVoiceroom = createAction("voiceroom/close/", (vrId: string) => {
    return {
        payload: vrId
    }
})