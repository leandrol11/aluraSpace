import Card from "../Card"

function Cards({ itens, style }) {
    return (
        <ul className={style.gallery__cards}>
            {itens.map((item) => {
                return (
                    <Card key={itens.id} style={style} item={item} />
                )
            })}
        </ul>
    )
}

export default Cards