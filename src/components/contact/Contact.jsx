import { useState} from "react"
import "./contact.scss"

export default function Contact() {

  const [message, setMessage] = useState(false);
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    setMessage(true);
  }

  return (
    <div className='contact' id="contact">
      <div className="left">
        <img src="https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
      </div>  
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>     
    </div>
  )
}
