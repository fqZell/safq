 import { NavLink } from "react-router-dom";

import logo from "../../assets/allLogo.png";
import basket from "../../assets/basket.svg";
import account from "../../assets/account.svg";
import { useState } from "react";
import ModalContent from "../Modal/Modal";

const Header = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
        document.body.style.overflow = 'hidden';
    };
  
    const closeModal = () => {
        setModalIsOpen(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <>
            <div className="container">
                <header>
                    <div className="header-container">


                            <div className="header-logo">
                                <NavLink to="/">
                                    <img src={logo} alt="logo" />
                                    <h1>ShopGA</h1>
                                </NavLink>
                            </div>

                            <nav>

                            <ul>
                                <NavLink to="/product" activeClassname="active">Товары</NavLink>
                                <li><a href="#">Информация</a></li>
                            </ul>

                            <div className="header-icons">
                                <img onClick={openModal} src={basket} alt="basket" />
                                <img src={account} alt="account" />
                            </div>

                            </nav>


                    </div>

                    <div className="header-line"></div>

                </header>
            </div>

            <ModalContent closeModal={closeModal} modalIsOpen={modalIsOpen}/>
        </>
    )
}

export default Header;