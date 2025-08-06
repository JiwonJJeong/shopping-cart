
export default function ItemCard(img, title, boughtCount, setBoughtCount){



    return (
        <article>
            <img></img>
            <h2>{title}</h2>
            <div className="buy buttons">
                <button>-</button>
                <p>{boughtCount}</p>
                <button>+</button>
            </div>
        </article>
    )
}