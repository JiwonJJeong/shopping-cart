import {useParams} from "react-router-dom";

export default function Items(){
    const {id} = useParams();   

    return (
        <>
            <p>This is items.</p>
            <p>The item requested was {id}</p>
        </>
    )
}