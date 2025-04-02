import { useTranslation } from "react-i18next"
import LangSelect from "./components/lang-select/lang-select";

function App() {

  const {t} = useTranslation();

  return (
    <>
      <LangSelect/>
      <div>{t('app.title')}</div>
    </>
  )
}

export default App
