import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logout = () => {
        // sessionStorage.clear();
        sessionStorage.removeItem("adminlogin");
        dispatch({ "type": "LOGOUT" });
        alert("Logout Successfully...");
        navigate("/adminlogin");
    };

    return (<>
        <aside id="sidebar" className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
                <li className="nav-item">
                    <a className="nav-link " href="/">
                        <i className="bi bi-grid"></i>
                        <span>Dashboard</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link collapsed" data-bs-target="#admin-nav" data-bs-toggle="collapse" href="#">
                        <i className="bi bi-menu-button-wide"></i><span>Admin</span><i className="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul id="admin-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                        {sessionStorage.getItem("adminlogin") ? (
                            <li className="nav-item">
                                <a className="nav-link" onClick={logout} style={{ cursor: "pointer" }}>
                                    <i className="bi bi-circle"></i><span>Logout</span>
                                </a>
                            </li>
                        ) : (
                            <li className="nav-item">
                                <Link to="/adminlogin" className="nav-link">
                                    <i className="bi bi-circle"></i><span>Login</span>
                                </Link>
                            </li>
                        )}
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link collapsed" data-bs-target="#school-nav" data-bs-toggle="collapse" href="#">
                        <i className="bi bi-menu-button-wide"></i><span>School</span><i className="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul id="school-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                        <li>
                            <a href="/school">
                                <i className="bi bi-circle"></i><span>View School</span>
                            </a>
                        </li>
                        <li>
                            <a href="/schoolform">
                                <i className="bi bi-circle"></i><span>Add School</span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </aside>
    </>);
}

export default Sidebar;