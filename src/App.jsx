import Style from './App.module.css'
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/NavBar.jsx";
import Home from "./controllers/Index.jsx";
import LoginController from "./controllers/Auth/LoginController.jsx";
import MessageModal from "./components/MessageModal.jsx";
import {useContext} from "react";
import {ModelContext} from "./Context/ModelContext.jsx";
import {AdminAuth, BasicAuth, StudentAuth, TeacherAuth} from "./middleware/ProtectAuth.jsx";
import ProfileController from "./controllers/Auth/ProfileController.jsx";
import StudentRoute from "./routes/StudentRoute.jsx";
import TeacherRoute from "./routes/TeacherRoute.jsx";
import AdminRoute from "./routes/AdminRoute.jsx";
import SignupController from './controllers/Auth/SignupController.jsx';


function App() {
    const { modalData } = useContext(ModelContext)
    if(!modalData){
        return ;
    }
  return (
    <div className={Style.App}>
        <Navbar />
        <div className={Style.ContentWrapper}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<LoginController />} />
                <Route path='/signup' element={<SignupController />} />
                <Route path='/profile' element={
                <BasicAuth>
                    <ProfileController />
                </BasicAuth>} />
                <Route path='/student/*' element={
                <StudentAuth>
                    <StudentRoute />
                 </StudentAuth>
                } />
                <Route path='/teacher/*' element={<TeacherAuth><TeacherRoute /></TeacherAuth>} />
                <Route path='/admin/*' element={<AdminAuth><AdminRoute /></AdminAuth>} />
            </Routes>
            {modalData.status && <MessageModal />}
        </div>
    </div>
  )


}

export default App
