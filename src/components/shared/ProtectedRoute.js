import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const currentUser = useSelector(state => state.currentUser);

    const url = window.location.href.toString().split(window.location.host)[1];
    return currentUser ? children : <Navigate to={`/login?url=${url? url : ''}`}/>;
};

export default ProtectedRoute;
