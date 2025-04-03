import { Navigate, Outlet } from "react-router-dom";
import Header from "../../containers/header/header";

export default function ProtectedRoutes() {
    // TODO check something else than just the presence of a token
    const token = localStorage.getItem("token");
    return (token ? <><Header /><Outlet /></> : <Navigate to="/login"></Navigate>)
}