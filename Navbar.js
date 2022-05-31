import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The DOjo's blog</h1>
            <div className="links">
            <h2>
                <Link to ="/">Home</Link>
                <Link to ="/create">Create</Link>
                </h2>
            </div>
        </nav>
    );
}
 
export default Navbar;