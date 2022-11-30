import banner from "./banner.png"
import style from "./banner.module.scss"

function Banner() {
    return (
        <div className={style.banner}>
            <h1>A melhor galeria do espaço!</h1>
            <img src={banner} alt="Imagem de satélite da Terra" />
        </div>
    )
}

export default Banner