import photos from "../Gallery/pictures.json"

import style from "./tags.module.scss"
function Tags({ tags, photoFilter, setItens }) {
    return (
        <div className={style.tags}>
            <p>Filtre por tags:</p>
            <ul className={style.tags__list} >
                {tags.map((tag) => {

                    return (
                        <li key={tag} onClick={() => photoFilter(tag)}>
                            {tag}
                        </li>
                    )
                })}
                <li onClick={() => setItens(photos)} >Todas</li>
            </ul>
        </div>
    )
}

export default Tags