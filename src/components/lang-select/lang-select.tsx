import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../constants/lang.constant";

export default function LangSelect() {
    const { i18n } = useTranslation();

    const handleChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const code = e.target.value;
        i18n.changeLanguage(code);
    }
    return <select defaultValue={i18n.language} onChange={handleChangeLang}>
        {LANGUAGES.map((lg) => <option key={lg.code} value={lg.code}>{lg.label}</option>)}
    </select>
}