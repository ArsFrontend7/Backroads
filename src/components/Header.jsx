import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ pageTitle, pageSubTitle }) => {
    return (
        <React.Fragment>
            <div className="section-title">
                <h2>{pageTitle} <span>{pageSubTitle}</span></h2>
            </div>
        </React.Fragment>
    )
}

Header.propTypes = {
    pageTitle: PropTypes.string.isRequired,
    pageSubTitle: PropTypes.string.isRequired
}

export default Header
