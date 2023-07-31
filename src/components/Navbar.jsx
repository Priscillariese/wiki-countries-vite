import { NavLink } from "react-router-dom";

const Navbar =() => {
    return (

    <NavLink to="/" className={({ isActive }) => isActive ? "selected" : ""}>
        <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
        <h1 className="navbar-brand">Wiki Countries</h1>
        </div>
        </nav>
    </NavLink>
    )
}

export default Navbar;