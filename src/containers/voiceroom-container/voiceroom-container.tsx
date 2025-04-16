import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { voiceroomsFetch } from "../../store/voicerooms/voiceroom.action";
import { Loader } from "lucide-react";
import VoiceroomCard from "../../components/voiceroom-card/voiceroom-card";
import './voiceroom-container.css'

export default function VoiceroomContainer() {
    const dispatch = useDispatch<AppDispatch>();
    const { isLoading, voicerooms, errorVoiceroom, hasFetchedVoiceroom } = useSelector((state: RootState) => state.voiceroom);
    useEffect(() => {
        if (!hasFetchedVoiceroom) {
            dispatch(voiceroomsFetch());
        }
    }, [hasFetchedVoiceroom])
    if (errorVoiceroom) return <div>Error fetching voiceroom</div>

    return <div className="vr-container">

        {isLoading ?
            <Loader /> :
            (voicerooms != undefined && voicerooms!.length > 0) ?
                voicerooms.map(voiceroom => <VoiceroomCard key={voiceroom.id} voiceroom={voiceroom}></VoiceroomCard>) :
                (
                    <p>No Voicerooms found.</p>
                )}
    </div>

}
