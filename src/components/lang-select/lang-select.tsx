import { useTranslation } from "react-i18next";
import { LANGUAGES_APP } from "../../constants/lang.constant";
import ReactFlagsSelect from "react-flags-select";
import { useState } from "react";
import "./lang-select.css"
import { normalizeLangCode } from "../../utils/common/tools";

export default function LangSelect() {
    const { i18n } = useTranslation();
    const appLg = localStorage.getItem("appLg") ?? "Select Language";
    const [selected, setSelected] = useState(appLg);


    const handleChangeLang = (code: string) => {
        setSelected(code)
        localStorage.setItem("appLg", code)
        code = normalizeLangCode(code);
        i18n.changeLanguage(code);
    }



    return <div>
        <ReactFlagsSelect
            countries={["GB", "FR", "BE"]}
            customLabels={LANGUAGES_APP}
            placeholder= {selected}
            onSelect={code => handleChangeLang(code)}
            selected={selected}
        />
    </div>

}