import React from 'react';
import PropTypes from 'prop-types';

/*
    Tekið úr material ui, skoða ef þarf
 */

const styles = {
    base: {
        display: 'inline-block',
        margin: 10,
        padding: 20,
        fontSize: 24,
        fontWeight: 'bold'
    },
    small: {
        boxShadow: '5px 5px 5px rgba(155, 155, 155, .5'
    },
    medium: {
        boxShadow: '15px 15px 5px rgba(155, 155, 155, .5'
    },
    large: {
        boxShadow: '25px 25px 5px rgba(155, 155, 155, .5'
    }
}

const PaperInline = ({ backgroundColor, shadowSize, children }) => {

    const style = {
        ...styles.base,
        ...styles[shadowSize]
    };

    return (
        <div style={style}>{children}</div>
    )
};

PaperInline.propTypes = {
    backgroundColor: PropTypes.string,
    shadowSize: PropTypes.oneOf([ 'small', 'medium', 'large' ]),
    children: PropTypes.node
};

PaperInline.defaultProps = {
    backgroundColor: 'white',
    shadowSize: 'medium'
};

export default PaperInline;