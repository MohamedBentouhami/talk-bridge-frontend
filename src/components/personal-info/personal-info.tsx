import { useTranslation } from "react-i18next"

export default function PersonalInfo() {
    const { t } = useTranslation();
    return <>
        <div>
            <label htmlFor="input-first-name">{t('register.firstName')}</label>
            <input type="text" id="input-first-name" name="firstName" />
        </div>
        <div>
            <label htmlFor="input-last-name">{t('register.lastName')}</label>
            <input type="text" id="input-last-name" name="lastName" />
        </div>
        <div>
            <label htmlFor="input-birthday">{t('register.birthday')}</label>
            <input type="date" id="input-birthday" name="birthday" />
        </div>
    </>
}