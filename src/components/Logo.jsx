import React from "react";

const Logo = () => {
    return (
        <React.Fragment>
            <div className="nav-header">
                <img src="/assets/images/logo.svg" className="nav-logo" alt="backroads" />
                <button type="button" className="nav-toggle" id="nav-toggle">
                    <i className="fas fa-bars"></i>
                </button>
            </div>
        </React.Fragment>
    );
}

export default Logo;
