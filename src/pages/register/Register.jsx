import "./register.scss";

export default function Register() {
  return (
    <div className="register">
        <span className="title">Register</span>
        <form className="form">
            <label>Username</label>
            <input type="text" className="input" placeholder="Enter your username..." />
            <label>Email</label>
            <input type="text" className="input" placeholder="Enter your email..." />
            <label>Password</label>
            <input type="password" className="input" placeholder="Enter your password..." />
            <button className="registerButton">Register</button>
            <button className="loginButton">Login</button>
        </form>
    </div>
  )
}
