import { Link } from "react-router-dom";

const Nav = () => {
    return(
        <div className="nav">
            <Link to="/">
                <h1>Jeapordy</h1>
            </Link>

            <Link to="/categories">
                <h1>Categories</h1>
            </Link>
        </div>
    )
}

export default Nav