import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ isOpen, onClose }) => {
    return (
        <div></div>
    )
};

Modal.Title = ({ children }) => {
    return (
        <div>{ children }</div>
    )
};

Modal.Content = ({ children }) => {
    return (
        <div>{ children }</div>
    )
};

Modal.Footer = ({ children }) => {
    return (
        <div>{ children }</div>
    )
};

Modal.PropTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};

export default Modal;