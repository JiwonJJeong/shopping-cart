import { Link } from "react-router-dom"

export default function ErrorPage(){

    return (
        <div>
            <h1>This route does not exist!</h1>
            <Link to="/">Go back to the homepage</Link>
        </div>
    )
}