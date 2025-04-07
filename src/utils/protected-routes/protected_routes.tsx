import { Navigate, Outlet } from "react-router-dom";
import Header from "../../containers/header/header";
import { Provider as ReduxProvider } from 'react-redux';
import store from "../../store/store";
import WebSocketListener from "../../components/web-socket-listener/web-socket-listener";

export default function ProtectedRoutes() {

    const token = localStorage.getItem("token");
    return (token ? <>
        <ReduxProvider store={store}>
            <WebSocketListener/>
            <Header />
            <Outlet />
        </ReduxProvider>
    </> :
        <Navigate to="/login"></Navigate>)
}