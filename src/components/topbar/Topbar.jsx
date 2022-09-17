import "./topbar.scss"
import {Person, Mail} from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
          <div className="left">
              <a href="#intro" className="logo">lobsang.</a>  
              <div className="itemContainer">
                <Person className="icon" />
                <a href="tel:+61-452646443">+61-452646443</a>
              </div>  
              <div className="itemContainer">
                <Mail className="icon" />
                <a href="mailto:lobsangdtamang@gmail.com">lobsangdtamang@gmail.com</a>
              </div>        
          </div>
          <div className="right">
              <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                  <span className="line1"></span>
                  <span className="line2"></span>
                  <span className="line3"></span>
              </div>
          </div>
      </div>
    </div>
  )
}
