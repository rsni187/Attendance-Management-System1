import {Link} from "react-router-dom";
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';
function NavBar(){
    const isAuthenticated = useIsAuthenticated();
    const Header = "Attendance Management System";
    return (
        <nav className="navbar bg-body-tertiary navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{Header}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel"></h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end align-items-center flex-grow-1 pe-3 gap-4">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            {    !isAuthenticated()
                            &&
                                <>
                            <li className="nav-item">
                                <Link className="nav-link btn btn-light text-black border" to="/login">Login</Link>
                            </li>
                                </>
                            }

                            {
                                isAuthenticated() &&
                                <>
                                    <li className="nav-item dropdown">
                                        <button className="btn btn-light dropdown-toggle" data-bs-auto-close="true" data-bs-toggle="dropdown" aria-expanded="false">
                                            Settings
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-light">
                                            <li><Link className="dropdown-item w-100" to="/profile">Profile</Link></li>
                                            <li><Link className={`btn btn-danger w-100 d-block`} to={`/logout`}>Logout</Link></li>
                                        </ul>
                                    </li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
