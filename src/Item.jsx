import {Link, useParams, useOutletContext} from "react-router-dom";
import CartAside from "./CartAside";

export default function Item(){
    const {id} = useParams(); 
    const [items, changeBoughtCountOfId] = useOutletContext();

    const specificItem = items[id];
    const changeBoughtCountOfSpecific = changeBoughtCountOfId(id);

    return (
        <>
            <Link to="/items">Back to items</Link>
            <h1>{specificItem.title}</h1>
            <img src={specificItem.img}></img>
            <p>{specificItem.price}</p>
            <p>{specificItem.description}</p>
            <button onClick={changeBoughtCountOfSpecific}>Buy</button>
            <CartAside></CartAside>
        </>
    )
}