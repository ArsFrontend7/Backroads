import React from "react";
import Icons from "./Icons";
import Logo from "./Logo";
import Menu from "./Menu";

const Navbar = () => {
    return (
        <React.Fragment>
            <nav className="navbar">
                <div className="nav-center">
                    <Logo />
                    <Menu />
                    <Icons />
                </div>
            </nav>
        </React.Fragment>
    );
}

export default Navbar;