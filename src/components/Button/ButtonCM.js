import React from 'react';
import PropTypes from 'prop-types';
import styles from './button-module.css'

console.log(styles);

const ButtonCM = ({ onClick, type, children }) => {

    return (
        <button className={`${styles.btn} ${styles[`btn-${type}`]}`} onClick={onClick}>{children}</button>
    )
};

ButtonCM.propTypes = {
    onClick: PropTypes.func.isRequired,
    type: PropTypes.oneOf([ 'success', 'warning', 'danger']),
    children: PropTypes.node
};

export default ButtonCM;