import { Link} from "react-router-dom";
import "./Navbar.css"
import SearchBar from "../../../SearchBar";
export default function NavLink() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Ceejay Recipe</h1>
        </Link>
        <SearchBar/>
        <Link to="/create">
          <h1> Create recipe</h1>
        </Link>
      </nav>
    </div>
  );
}
