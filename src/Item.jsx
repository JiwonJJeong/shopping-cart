import {useParams, useOutletContext} from "react-router-dom";
import CartAside from "./CartAside";

export default function Item(){
    const {id} = useParams(); 
    const [items] = useOutletContext();

    const specificItem = items[id];

    return (
        <>
            <p>This is ONE item.</p>
            <p>The item requested was {specificItem.title}</p>
            <CartAside></CartAside>
        </>
    )
}