import "./login.scss";

export default function Login() {
  return (
    <div className="login">
        <span className="title">Login</span>
        <form className="form">
            <label>Email</label>
            <input type="text" className="input" placeholder="Enter your email..." />
            <label>Password</label>
            <input type="password" className="input" placeholder="Enter your password..." />
            <button className="loginButton">Login</button>
            <button className="registerButton">Register</button>
        </form>
    </div>
  )
}
