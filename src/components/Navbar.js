import "./Navbar.css"
import { Link } from "react-router-dom"
import Searchbar from "./Searchbar"

export default function Navbar() {
  return (
    <div className="navbar">
        <nav>
            <Link to="/" className="brand">
            <h1>Cooking Recipes</h1>
            </Link>
            <Searchbar></Searchbar>
            <Link to="/create">Create New Recipe</Link>
        </nav>
    </div>
  )
}
