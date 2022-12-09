import "./settings.scss";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
  return (
    <div className="settings">
        <div className="wrapper">
            <div className="title">
                <span className="updateTitle">Update Your Account</span>
                <span className="deleteTitle">Delete Your Account</span>
            </div>
            <form action="" className="form">
                <label>Profile Picture</label>
                <div className="PP">
                    <img
                        src="https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                        alt=""
                    />
                    <label htmlFor="fileInput">
                        <i className="PPIcon far fa-user-circle"></i>
                    </label>
                </div>
                <input type="file" id="fileInput" style={{display:"none"}} />
                <label>Username</label>
                <input type="text" placeholder="Safak" />
                <label>Email</label>
                <input type="email" placeholder="safak@gamil.com" />
                <label>Password</label>
                <input type="password" />
                <button className="submit">Update</button>
            </form>
        </div>
        <Sidebar />
    </div>
  )
}
