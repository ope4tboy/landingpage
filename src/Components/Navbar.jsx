import React from 'react'
import "../style/navbar.css"

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul class="nav__links">
                    <li class="link"><a href="#">HOME</a></li>
                    <li class="link"><a href="#">ABOUT US</a></li>
                    <li class="link"><a href="#">E-TICKET</a></li>
                    <li class="link"><a href="#">JOURNEY</a></li>
                    <li class="link"><a href="#">CONTACT</a></li>
                </ul>
            </nav>

            <div class="container">
                <div class="container__left">
                    <div class="left__content">
                        <h4>Best guide for you</h4>
                        <p>
                            Our team of experts has scoured collection of handpicked
                            destinations and insider tips to ensure your journey is
                            extraordinary.
                        </p>
                    </div>
                </div>
            </div>
            <div class="container__right">
                <img src="./images/women.png" alt="women" />
                <div class="right__content">
                    <h1>ENJOY</h1>
                    <h4>Travelling moment</h4>
                    <p>
                        Welcome to our travel website, where we pride ourselves on being the
                        best guide for you in your wanderlust adventures. Whether you're
                        seeking sun-soaked beaches, or thrilling outdoor escapades, we've
                        got you covered.
                    </p>
                    <div class="action__btns">
                        <button class="btn primary__btn">Explore</button>
                        <button class="btn secondary__btn">See More</button>
                    </div>
                </div>
            </div>
            <div class="socials">
            <span><i class="fa-brands fa-instagram"></i></span>
            <span><i class="fa-brands fa-twitter"></i></span>
            <span><i class="fa-brands fa-facebook"></i></span>
          </div>
        </div>

    )
}

export default Navbar