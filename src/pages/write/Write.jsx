import "./write.scss"

export default function Write() {
  return (
    <div className="write">
        <form action="" className="form">

            <img
                className="img" 
                src="https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
            />

            <div className="formGroup">
                <label htmlFor="fileInput">
                    <i className="icon fas fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display: "none"}}/>
                <input type="text" placeholder="Title" className="input" autoFocus={true} />
            </div>
            
            <div className="formGroup">
                <textarea placeholder="Tell your story..." type="text" className="input text" ></textarea>
            </div>

            <button className="submit">Publish</button>

        </form>
    </div>
  )
}
