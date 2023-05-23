 import { NavLink } from "react-router-dom";

import logo from "../../assets/allLogo.png";
import basket from "../../assets/basket.svg";
import account from "../../assets/account.svg";

const Header = () => {
    return (
        <>
            <header>
                <div className="header-container">


                        <div className="header-logo">
                            <NavLink to="/">
                                <img src={logo} alt="logo" />
                                <h1>SAFQ</h1>
                            </NavLink>
                        </div>

                        <nav>

                        <ul>
                            <NavLink to="/product" activeClassname="active">Товары</NavLink>
                            <li><a href="#">Информация</a></li>
                        </ul>

                        <div className="header-icons">
                            <img src={basket} alt="basket" />
                            <img src={account} alt="account" />
                        </div>

                        </nav>


                </div>

                <div className="header-line"></div>

            </header>
        </>
    )
}

export default Header;