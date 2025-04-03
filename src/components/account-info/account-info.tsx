import { useTranslation } from "react-i18next"

export default function AccountInfo() {
    const { t } = useTranslation();
    return <>
        <div>
            <label htmlFor="input-password">{t('register.password')}</label>
            <input type="password" id="input-password" name="password" />
        </div>
        <div>
            <label htmlFor="input-password2">{t('register.confirmPassword')}</label>
            <input type="password" id="input-password2" name="confirmPassword" />
        </div>
    </>
}