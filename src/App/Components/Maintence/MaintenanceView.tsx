import React, { Dispatch, SetStateAction } from "react";
import Modal from 'react-modal';
import { SearchSC } from '../SearchBar/SearchBar.component'

const customStyles = {
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.466)",
        overflow: "hidden",
        zIndex: 12001
    },

    content: {
        fontFamily: "ABC Ginto Normal Trial",
        fontStyle: "normal",
        fontWeight: "700",
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "939px",
        height: "50px",
        overflow: "none",
        border: "none",
        display: "flex",
        background: "none",
        justifyContent: "center",
        alignItems: "center",
    },
};

interface Props {
    closeModal: () => void;
    isOpen: boolean;
    updateStatusApp: Dispatch<SetStateAction<boolean>>;
}

export const MaintenanceComponent: React.FC<Props> = ({ isOpen, closeModal, updateStatusApp }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="SearchModel"
        >
            <SearchSC
                closeModal={() => closeModal()}
                isOpen={isOpen} updateStatusApp={updateStatusApp} />
        </Modal>
    )
}