import React from "react";
import { pageLinks } from "../Data/PageData";

const Menu = () => {
    return (
        <React.Fragment>
            <ul className="nav-links" id="nav-links">
                {pageLinks.map((link) => {
                    return (
                        <li key={link.id}>
                            <a href={link.href} className="nav-link">{link.text}</a>
                        </li>
                    );
                })}
            </ul>
        </React.Fragment>
    );
}

export default Menu;