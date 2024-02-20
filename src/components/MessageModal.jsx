import Style from './MessageModal.module.css'
import {ModelContext} from '../Context/ModelContext.jsx'
import {useContext} from "react";
const MessageModal = () => {
    const {modalData} = useContext(ModelContext)

    if(!modalData){
        return ;
    }

    return (
        <div
        className={`${Style.Modal} bg-${modalData.type} text-light px-4 py-2`}
        >
            {modalData.message}
        </div>
    );
};

export default MessageModal;
