
export default function ItemCard(img, title, boughtCount, setBoughtCount){



    return (
        <article>
            <img></img>
            <h2>{title}</h2>
            <div className="buy buttons">
                <button onClick={()=>setBoughtCount(boughtCount-1)}>-</button>
                <p>{boughtCount}</p>
                <button onClick={()=>setBoughtCount(boughtCount+1)}>+</button>
            </div>
        </article>
    )
}