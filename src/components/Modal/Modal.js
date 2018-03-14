import React from 'react';
import PropTypes from 'prop-types';
import styles from './modal-module.css';

const Modal = ({ isOpen, onClose }) => {
    //const Footer = Modal.Footer.hasChildNodes ? <Modal.Footer classname={`${styles.modal.footer}`}>{Modal.Footer.children}</Modal.Footer> : "";
    const Title = ({ children }) => {
        console.log({children});
        return (
            <div>{ children }</div>
        )
    };

    const Content = ({ children }) => {
        return (
            <div>{ children }</div>
        )
    };

    const Footer = ({ children }) => {
        return (
            <div>{ children }</div>
        )
    };
    return (
        <div className={`${styles.modal}`}>
            <Title classname={`${styles.modal.title}`} />
            <Content classname={`${styles.modal.content}`} />
            <Footer classname={`${styles.modal.footer}`} />
        </div>
    );

};

export default Modal;

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};
