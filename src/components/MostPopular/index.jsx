import style from "./mostPopular.module.scss"
import popularPhotos from "./mostPopular.json"


function Popular(params) {
    return (
        <aside className={style.mostPopular}>
            <h2>Populares</h2>
            <ul className={style.mostPopular__images}>
                {
                    popularPhotos.map((photo) => {
                        return (
                            <li key={photo.id}>
                                <img src={photo.path} alt={photo.alt} />
                            </li>
                        )
                    })
                }
            </ul>
            <button>Ver mais fotos</button>
        </aside>
    )
}

export default Popular