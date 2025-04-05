import { useTranslation } from "react-i18next"
import { registerFormProps } from "../../@types/register-form-props";

export default function LanguageInfo({formData, handleChange} : registerFormProps) {
    const { t } = useTranslation();
    return <>
        <div>
            <label htmlFor="input-native-lang">{t('register.nativeLanguage')}</label>
            <input type="text" id="input-native-lang" name="nativeLanguage" value={formData.nativeLanguage} onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="input-target-lang">{t('register.targetLanguage')}</label>
            <input type="text" id="input-target-lang" name="targetLanguage" value={formData.targetLanguage} onChange={handleChange} />
        </div>
    </>
}