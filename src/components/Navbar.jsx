import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="header-container">
            <ul className="unorder-list-nav">
                <img src="Location_icon.png" alt="" height="50px" width="50px" />
                <li className="">
                    <NavLink to="/" className={({ isActive }) => isActive ? "active-class" : "nav-items"}
                    >
                        Home <img src="pokemon_go.png" alt="" height="20px" width="20px" />
                    </NavLink>
                </li>
                <li className="">
                    <NavLink
                        to="/pokemones"
                        className={({ isActive }) => isActive ? "active-class" : "nav-items"}
                    >
                        Pokemones <img src="pokemon_go.png" alt="" height="20px" width="20px" />
                    </NavLink>
                </li>
            </ul>
        </header>
    )
}