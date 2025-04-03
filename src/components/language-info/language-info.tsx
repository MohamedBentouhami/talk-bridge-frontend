import { useTranslation } from "react-i18next"

export default function LanguageInfo() {
    const { t } = useTranslation();
    return <>
        <div>
            <label htmlFor="input-native-lang">{t('register.nativeLanguage')}</label>
            <input type="text" id="input-native-lang" name="nativeLanguage" />
        </div>
        <div>
            <label htmlFor="input-target-lang">{t('register.targetLanguage')}</label>
            <input type="text" id="input-target-lang" name="targetLanguage" />
        </div>
    </>
}