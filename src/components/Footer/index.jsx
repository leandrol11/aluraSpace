import style from "./footer.module.scss"
import facebook from "./img/facebook.svg";
import twitter from "./img/twitter.svg";
import instagram from "./img/instagram.svg";

function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.footer__icons}>
                <a
                    href="https://www.facebook.com/AluraCursosOnline/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={facebook} alt="ícone do facebook" />
                </a>
                <a
                    href="https://twitter.com/aluraonline?lang=en"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={twitter} alt="ícone do twitter" />
                </a>
                <a
                    href="https://www.instagram.com/aluraonline/?hl=en"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={instagram} alt="ícone do instagram" />
                </a>
            </div>
            <p>
                By Leandro Maciel
            </p>
        </footer>
    )
}

export default Footer