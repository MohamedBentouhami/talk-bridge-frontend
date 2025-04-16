import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatsPage from "./pages/chats-page/chats.page";
import HomePage from "./pages/home-page/home-page";
import PartnerPage from "./pages/language-partner-page/language-partner-page";
import VoiceroomPage from "./pages/voiceroom-page/voiceroom-page";
import ProfilePage from "./pages/profile-page/profile-page";
import LoginPage from "./pages/login-page/login-page";
import RegisterPage from "./pages/register-page/register-page";
import ProtectedRoutes from "./utils/protected-routes/protected_routes";
import ToolsPage from "./pages/tools-page/tools-page";
import VocalChannel from "./pages/vocal-channel/vocal-channel";

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/chats" element={<ChatsPage />}>
            </Route>
            <Route path="/connect" element={<PartnerPage />}>
            </Route>
            <Route path="/tools" element={<ToolsPage />}>
            </Route>
            <Route path="/voiceroom" element={<VoiceroomPage />}>
            </Route>
            <Route path="/voiceroom/:id" element={<VocalChannel />}>
            </Route>
            <Route path="/profile" element={<ProfilePage />}>
            </Route>
          </Route>
        </Routes>
      </Router >
    </>
  )
}

export default App
