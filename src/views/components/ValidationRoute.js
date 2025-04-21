import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const isLoggedIn = sessionStorage.getItem("adminlogin");

    if (!isLoggedIn) {
        alert("Please login first!");
        return <Navigate to="/adminlogin" />;
    }

    return <Outlet />;  // Renders nested routes
};

export default PrivateRoute;
