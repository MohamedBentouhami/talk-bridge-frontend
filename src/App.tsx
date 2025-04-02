import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./containers/header/header";
import DashBoardPage from "./pages/dashboard-page/dashboard";
import HomePage from "./pages/home-page/home-page";
import PartnerPage from "./pages/language-partner-page/language-partner-page";
import VoiceroomPage from "./pages/voiceroom-page/voiceroom-page";
import ProfilePage from "./pages/profile-page/profile-page";

function App() {


  return (
    <>
      <Router>
        <Header />
        <Routes>

          <Route path="/" element={<HomePage />}>
          </Route>
          <Route path="/dashboard" element={<DashBoardPage />}>
          </Route>
          <Route path="/connect" element={<PartnerPage />}>
          </Route>
          <Route path="/voiceroom" element={<VoiceroomPage />}>
          </Route>
          <Route path="/profile" element={<ProfilePage />}>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
