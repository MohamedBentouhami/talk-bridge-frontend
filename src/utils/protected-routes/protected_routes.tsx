import { Navigate, Outlet } from "react-router-dom";
import Header from "../../containers/header/header";
import { Provider as ReduxProvider } from 'react-redux';
import store from "../../store/store";


export default function ProtectedRoutes() {
    // TODO check something else than just the presence of a token
    const token = localStorage.getItem("token");
    return (token ? <>
        <ReduxProvider store={store}>
            <Header />
            <Outlet />
        </ReduxProvider>
    </> :
        <Navigate to="/login"></Navigate>)
}