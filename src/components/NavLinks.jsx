import {Link, useLocation} from "react-router-dom";

const NavLinks = ({link = [],Styles={active:'active'}}) => {
    const location = useLocation();
    return (
        <><li className="nav-item">
            <Link className={`nav-link py-3 w-100 text-secondary 
                    ${link.includes(location.pathname) ? Styles.active : ''}
                    `} to="/student/">Home</Link>
        </li><li className="nav-item">
                <Link className={`nav-link py-3 w-100 text-secondary
                      ${location.pathname === '/student/classes' || location.pathname === '/student/classes/' ? Styles.active : ''}
                    `} to="/student/classes">Classes</Link>
            </li></>
  
      
    
    );
};

export default NavLinks;
