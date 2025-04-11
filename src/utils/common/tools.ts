import { languages } from "../../constants/lang.constant";
import i18n from "../../i18n";

export function adaptData(formData: any) {

    let correctData = {
        ...formData, nativeLanguage: formData.nativeLanguage.toLowerCase(),
        targetLanguage: formData.targetLanguage.toLowerCase(),
    }

    if (correctData.nativeLanguage === "gb") correctData.nativeLanguage = "en";
    if (correctData.targetLanguage === "gb") correctData.targetLanguage = "en";
    return correctData;

}

export function normalizeLangCode(code: string) {
    code = code.toLowerCase();
    switch (code) {
        case "gb":
            return "en";
        case "be":
            return "nl";
        default:
            return code;
    }
}

export default function getFiltersLanguages() {
    const targetLg = localStorage.getItem("learning_language") ?? "en";
    const lg = i18n.language;
    const langTab = languages;
    const filters = [];

    filters.push({ name: "All", code: "all" })

    for (const [key, value] of Object.entries(langTab)) {
        if (key !== targetLg && value[lg]) {
            filters.push({ name: value[lg], code: key });
        }
    }

    return filters;
}
export const pronunciationLanguages = new Map([
    ["Arabic", 2],
    ["French", 28],
    ["Dutch", 11],
    ["English", 15],
    ["German", 30],
    ["Italian", 41],
    ["Portuguese", 56],
    ["Russian", 61],
    ["Spanish", 66],
    ["Japanese", 78]
]);
