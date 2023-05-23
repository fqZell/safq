import telegram from "../../assets/telegram.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twiter.svg";

const Footer = () => {
    return (
        <>
            <footer>

                <div className="footer-container">

                    <div className="footer-social">
                        <p>Мы в социальных сетях:</p>

                        <div className="social">
                            <img src={telegram} alt="telegram" />
                            <img src={instagram} alt="instagram" />
                            <img src={twitter} alt="twitter" />
                        </div>
                    </div>

                    <div className="footer-info">
                        <p>Информация для сотрудничества</p>
                        <p>Договоры публичной оферты</p>
                        <p>Информация для сотрудников</p>
                    </div>

                </div>

                <h2>© Salakhiev Airat</h2>

            </footer>
        </>
    )
}

export default Footer;