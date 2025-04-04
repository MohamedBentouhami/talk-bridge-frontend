import { Navigate, Outlet } from "react-router-dom";
import Header from "../../containers/header/header";
import { Provider as ReduxProvider, useDispatch } from 'react-redux';
import store from "../../store/store";
import WebSocketListener from "../../components/web-socket-listener/web-socket-listener";

export default function ProtectedRoutes() {
    // TODO check something else than just the presence of a token
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