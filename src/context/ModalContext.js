import React, { createContext, useState } from "react";



export const ModalContext = createContext();


// MODAL HANDLER-------------------------------------------------------------------------
const ModalProvider =(props)=> {
    const initialModalFields = {
        show : false,
        modalType : "",
        identifiers : {
            folderId : "",
            cardId : "",
        }
    }

    const [isOpenModal, setIsOpenModal] = useState({ ...initialModalFields});

    const openModal = (value) => {
        setIsOpenModal(value);
    }

    const closeModal = () => {
        setIsOpenModal({ ...initialModalFields});
    }

    const ModalFeatures = {
        isOpenModal: isOpenModal,
        openModal: openModal,
        closeModal: closeModal,
    }
    return (
        <ModalContext.Provider value={ModalFeatures}>
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider;