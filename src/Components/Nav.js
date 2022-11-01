import { Link } from "react-router-dom";

const Nav = (props) => {
    return(
        <div className="nav">
            <Link to="/score">
                <h1>Score/navbar</h1>
            </Link>

            <Link to="/categories">
                <h1>Category/navbar</h1>
            </Link>
        </div>
    )
}

export default Nav