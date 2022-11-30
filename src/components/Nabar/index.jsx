import style from "./navbar.module.scss"
import maisCurtidas from "./icons/mais-curtidas-inativo.png"
import maisVistas from "./icons/mais-vistas-inativo.png"
import novas from "./icons/novas-inativo.png"
import surpreendaMe from "./icons/surpreenda-me-inativo.png"

function Navbar() {
    return (
        <nav className={style.navbar}>
            <ul className={style.navbar__list} >
                <li className={style.navbar__item}>
                    <img src={maisCurtidas} alt="mais curtidas" />
                    <a href="/">Mais Curtidas</a>
                </li>
                <li className={style.navbar__item}>
                    <img src={maisVistas} alt="mais vistas" />
                    <a href="/">Mais Vistas</a>
                </li>
                <li className={style.navbar__item}>
                    <img src={novas} alt="novas" />
                    <a href="/">Novas</a>
                </li>
                <li className={style.navbar__item}>
                    <img src={surpreendaMe} alt="surpreenda-me" />
                    <a href="/">Surpreenda-me</a>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar