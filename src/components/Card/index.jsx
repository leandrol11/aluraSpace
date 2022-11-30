import favorite from "./img/favorito.png"
import open from "./img/open.png"

function Card({ item, style }) {
    return (
        <li key={item.id} className={style.gallery__card}>
            <img
                className={style.gallery__image}
                src={item.imagem}
                alt={item.titulo}
            />
            <div>
                <p className={style.gallery__description}>
                    {item.titulo}
                </p>

                <span>
                    <img src={favorite} alt="ícone coração para curtir" />
                    <img src={open} alt="ícone de abri modal" />
                </span>
            </div>
        </li>
    )
}

export default Card