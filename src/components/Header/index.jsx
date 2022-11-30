import style from "./header.module.scss"
import search from "./img/search.png"
import logo from "./img/logo.png"

function Header() {
    return (
        <header className={style.header}>
            <img src={logo} alt="Logo Alura Space" />
            <div className={style.header__container}>
                <input className={style.header__input} type="text" name="" id="" placeholder="O que procura?" />
                <img src={search} alt='search icon' />
            </div>
        </header>
    )
}

export default Header