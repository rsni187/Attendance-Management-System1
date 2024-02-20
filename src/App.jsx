import Style from './App.module.css'
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/NavBar.jsx";
import Home from "./controllers/Index.jsx";
import LoginController from "./controllers/Auth/LoginController.jsx";
import MessageModal from "./components/MessageModal.jsx";
import {useContext} from "react";
import {ModelContext} from "./Context/ModelContext.jsx";
import LogoutController from "./controllers/Auth/LogoutController.jsx";

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
                <Route path='/logout' element={<LogoutController />} />
            </Routes>
            {modalData.status && <MessageModal />}
        </div>
    </div>
  )
}

export default App
