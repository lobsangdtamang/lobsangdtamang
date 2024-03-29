import "./menu.scss";
import{ Link } from "react-router-dom";

export default function Menu({menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
        <ul>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <Link to="/#portfolio">Portfolio</Link>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#testimonials">Testimonials</a>
            </li>
        </ul>
    </div>
  )
}
