import { useTranslation } from "react-i18next"
import { registerFormProps } from "../../@types/register-form-props";
import ReactFlagsSelect from "react-flags-select";
import { COUNTRIES, LANGUAGES_SPOKEN } from "../../constants/lang.constant";

export default function LanguageInfo({ formData, handleChange }: registerFormProps) {
    const { t } = useTranslation();

    const handleChangeNativeLang = (code: string) => {
        handleChange({
            target: {
                name: "nativeLanguage",
                value: code,
            }
        } as React.ChangeEvent<HTMLInputElement>);
    }

    const handleTargetingLang = (code: string) => {
        handleChange({
            target: {
                name: "targetLanguage",
                value: code,
            }
        } as React.ChangeEvent<HTMLInputElement>);
    }

    return <>
        <div>
            <label htmlFor="input-native-lang">{t('register.nativeLanguage')}</label>
            <ReactFlagsSelect
                countries={COUNTRIES}
                customLabels={LANGUAGES_SPOKEN}
                placeholder="Select your native language"
                onSelect={handleChangeNativeLang}
                selected={formData.nativeLanguage}
            />
        </div>
        <div>
            <label htmlFor="select-target-lang">{t('register.targetLanguage')}</label>
            <ReactFlagsSelect
                id="select-target-lang"
                countries={COUNTRIES}
                customLabels={LANGUAGES_SPOKEN}
                placeholder="Select your target language"
                onSelect={handleTargetingLang}
                selected={formData.targetLanguage}
            />
        </div>
    </>
}