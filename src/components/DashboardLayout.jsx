import Styles from './DashboardLayout.module.css'
import DashboardNav from "./DashboardNav.jsx";

const DashboardLayout = ({children}) => {
    return (
        <div className={`${Styles.dashboard_layout} container-fluid`}>
            <div className={`row h-100`}>
                <div className={`col-lg-2 col-4 p-0 border border-bottom-0 bg-light bg-gradient`}>
                    <DashboardNav />
                </div>
                <div className={`col-lg-10 col-8 border border-bottom-0`}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
