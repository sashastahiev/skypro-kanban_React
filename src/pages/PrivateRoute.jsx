import { Outlet ,Navigate } from "react-router-dom";

function PrivateRoute({IsAuth}) {
    return IsAuth ? <Outlet/> : <Navigate to="/login"/>
}

export default PrivateRoute;