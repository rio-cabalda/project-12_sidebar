import { createContext, useContext, useState } from "react";

const AppContext = createContext();
 // see there is 2 function is exported 
    // 1. is the const AppProvider which is need and use it to wrap inside the component where the data will be passing.
    // 2. useGlobalContext in the most bottom part, it is a custom hook use to 
    // retrieve the data of {isSidebarOpen, 
                    // isModalOpen, 
                    // openSidebar, 
                    // closeSidebar, 
                    // openModal, 
                    // CloseModal}
export const AppProvider = ({children}) =>{
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openSidebar = () =>{
        setIsSidebarOpen(true);
    }

    const closeSidebar = () =>{
        setIsSidebarOpen(false);
    }

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        console.log('close modal')
        setIsModalOpen(false);
    }

    return <AppContext.Provider 
            value={{isSidebarOpen, 
                    isModalOpen, 
                    openSidebar, 
                    closeSidebar, 
                    openModal, 
                    closeModal}}
            >
            {children}
        </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}