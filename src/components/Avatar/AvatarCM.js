import React from 'react';
import PropTypes from 'prop-types';

const BASE_SIZE = 100;

const styles = {

};

const AvatarInline = ({ size, avatarUrl }) => {
    const style = {
        ...styles.base,
        backgroundImage: `url(${avatarUrl})`,
        ...styles[size]
    };

    return (
        <div style={style}>

        </div>
    )
};


AvatarInline.propTypes = {
    size: PropTypes.oneOf([ 'small', 'medium', 'large' ]),
    avatarUrl: PropTypes.string.isRequired
};

AvatarInline.defaultProps = {
    size: 'medium'
};

export default AvatarInline;