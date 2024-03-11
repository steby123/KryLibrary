import React from "react";
import Logo from '../assets/download.jpg'
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <footer>
            <div className="container">
                <div className="row row__column">
                    <Link to="/">
                        <figure className="footer__logo">
                            <img src={Logo} className="footer__logo--img" alt="" />
                        </figure>
                    </Link>
                    <div className="footer__list">
                        <Link to="/" className="footer__link">Home</Link>
                        <span href="/" className="footer__link no-cursor">About</span>
                        <Link to="/books" className="footer__link">Cart</Link>
                    </div>
                    <div className="footer__copyright">
                        Copyright &copy; 2024 Make by Steby
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer