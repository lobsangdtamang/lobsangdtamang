import axios from "axios";
import { useEffect, useState } from "react";
import "./sidebar.scss"

export default function Sidebar() {

    const [cats, setCats] = useState([]);

    useEffect(()=>{
        const getCats = async()=>
        {
            const res = await axios.get("/categories");
            setCats(res.data);
        };
        getCats();
    },[]);

  return (
    <div className="sidebar">

        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img 
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Suscipit maxime sapiente molestiae et quod, illo ipsa impedit.
            </p>
        </div>

        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                {cats.map(c=>(
                    <li className="sidebarListItem">{c.name}</li>
                ))}
            </ul>
        </div>

        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
                <i className="sidebarIcon fab fa-pinterest-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
            </div>
        </div>

    </div>
  )
}
