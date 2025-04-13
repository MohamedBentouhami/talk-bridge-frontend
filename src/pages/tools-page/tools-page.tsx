import CorrectionIA from "../../containers/correction-ia/correction-ia";
import PronunciationContainer from "../../containers/pronunciation/pronunciation";
import TranslationContainer from "../../containers/translation-container/translation-container";

export default function ToolsPage() {

    return <div>
        <PronunciationContainer />
        <TranslationContainer></TranslationContainer>
        <CorrectionIA></CorrectionIA>
    </div>
}