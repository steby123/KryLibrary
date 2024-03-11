import React from "react";
import UndrawBooks from '../assets/Undraw_Books.svg'
import { Link } from "react-router-dom";

const Landing =() => {
    return (
       <section id="landing">
        <header>
            <div className="header__container">
                <div className="header__description">
                    <h1>KryLibrary Most awarded</h1>
                    <h2>Find your dream book with <span className="purple">KryLibrary</span></h2>
                        <a href="#features">
                        <button className="btn">Browse books</button>
                        </a>
                    
                </div>
                <figure className="header__img--wrapper">
                    <img src={UndrawBooks} alt="" />
                </figure>
            </div>
        </header>

       </section>
    )
}

export default Landing;