import {useParams} from "react-router-dom";

export default function Item(){
    const {id} = useParams();   

    return (
        <>
            <p>This is ONE item.</p>
            <p>The item requested was {id}</p>
        </>
    )
}