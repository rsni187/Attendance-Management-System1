import {Link, useNavigate} from "react-router-dom";
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';
import useSignOut from "react-auth-kit/hooks/useSignOut";
function  NavBar(){
    const isAuthenticated = useIsAuthenticated();
    const Header = "Attendance Management System";
    const signOut = useSignOut()
    const navigate = useNavigate();

    const Logout = () =>{
        signOut();
        navigate('/');
    }

    return (
        <nav className="navbar bg-body-tertiary navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to={'/'}>{Header}</Link>
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
                                <Link className="nav-link active w-100 ms-auto text-secondary" aria-current="page" to={'/'}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active w-100 ms-auto text-secondary" aria-current="page" to={'/Classes'}>Classes</Link>
                            </li>
                            {    !isAuthenticated()
                            &&
                                <>
                            <li className="nav-item">
                                <Link className="nav-link btn btn-light border text-secondary" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link btn btn-light border text-secondary" to="/signup">Signup</Link>
                            </li>
                                </>
                            }

                            {
                                isAuthenticated() &&
                                <>
                                    <li className="nav-item dropdown w-sm-100">
                                        <button className="btn btn-light dropdown-toggle w-100 text-secondary" data-bs-auto-close="true" data-bs-toggle="dropdown" aria-expanded="false">
                                            Settings
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-light align-items-center">
                                            <li><Link className="dropdown-item w-100  mb-2" to="/profile">Profile</Link></li>
                                            <hr style={{width:"100%"}} />
                                            <li><button className={`btn btn-danger w-100 d-block `} onClick={Logout}>Logout</button></li>
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
