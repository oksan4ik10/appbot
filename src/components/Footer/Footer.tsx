import urlLogo from "../../assets/img/icon/logo.svg"
import vk from "../../assets/img/social/vk.svg"

interface IProps {
    clickLogo: () => void
}
function Footer(props: IProps) {
    const { clickLogo } = props;
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-block">
                    <img src={urlLogo} alt="logo" className="logo footer-logo" onClick={clickLogo} />
                    <nav className="footer-nav">
                        <a href="#" className="footer-link">8 (916) 773-12-00</a>
                    </nav>
                    <div className="social-links">

                        <a href="#" className="social-link"><img src={vk} alt="vk" /></a>
                    </div>

                </div>

            </div>
        </footer>
    );
}

export default Footer;