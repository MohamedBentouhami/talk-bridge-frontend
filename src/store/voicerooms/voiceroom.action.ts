import { createAsyncThunk } from "@reduxjs/toolkit";
import fetchVoiceroom from "../../services/voiceroom.service";

export const voiceroomsFetch = createAsyncThunk(
    'voiceroom/fetchVoiceroom',
    async () => {
        const response = await fetchVoiceroom();
        return response;
    }
);

