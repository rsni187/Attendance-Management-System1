import { createContext, useEffect, useState } from "react";

const ModelContext = createContext(null);

const ModelProvider = ({ children })=> {
    const [modalData, setModalData] = useState({
        status: false,
        message: '',
        type:'success'
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setModalData({
                status: false,
                message: '',
                type:'success'
            });
        }, 5000);

        // Cleanup the timer to avoid memory leaks
        return () => clearTimeout(timer);
    }, [modalData]);

    const changeMessage = (message) => {
        setModalData((elem)=>({
            ...elem,
            status: true,
            ...message
        }));
    };

    return (
        <ModelContext.Provider value={{ modalData, changeMessage }}>
            {children}
        </ModelContext.Provider>
    );
};

export { ModelContext, ModelProvider };
