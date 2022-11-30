import Cards from "../Cards"
import Tags from "../Tags"
import style from "./gallery.module.scss"
import photos from "./pictures.json"
import { useState } from "react"

function Gallery() {
    const [itens, setItens] = useState(photos)
    const tags = [...new Set(photos.map((photo) => photo.tag))]

    const photoFilter = (tag) => {
        const newPhoto = photos.filter((photo) => {
            return photo.tag === tag
        })
        setItens(newPhoto)
    }

    return (
        <div className={style.gallery}>
            <h2>Navegue pela galeria</h2>
            <Tags tags={tags} photoFilter={photoFilter} setItens={setItens} />
            <Cards itens={itens} photos={photos} style={style} />
        </div>
    )
}

export default Gallery