import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import{ BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./app.scss"
import { useState } from "react";


function App() {
  const [menuOpen,setMenuOpen] = useState(false);
  const user = true;

  return (
    <div className="app">
      <Router>
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <div className="sections">
          <Routes>
            <Route exact path="/" element={user ? <Home/> : <Register/>}/>
            <Route exact path="/login" element={user ? <Home/> : <Login/>}/>
            <Route exact path="/write" element={user ? <Write/> : <Register/>}/>
            <Route exact path="/settings" element={user ? <Settings/> : <Register/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/post/:postId" element={<Single/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
