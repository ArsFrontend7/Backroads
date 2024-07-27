import React from "react";
import { pageLinks, socialLinks } from "../Data/PageData";

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="section footer" id='contact'>
                <ul className="footer-links">
                    {pageLinks.map((link) => {
                        return (
                            <li key={link.id}>
                                <a href={link.href} className="footer-link">{link.text}</a>
                            </li>
                        );
                    })}
                </ul>
                <ul className="footer-icons">
                    {socialLinks.map((link) => {
                        return (
                            <li key={link.id}>
                                <a href={link.url} target="_blank" className="footer-icon">
                                    <i className={link.icon}></i>
                                </a>
                            </li>
                        );
                    })}
                </ul>
                <p className="copyright">
                    copyright &copy; Backroads
                    <span id="date"></span> all rights reserved
                </p>
            </footer>
        </React.Fragment>
    );
}

export default Footer;