import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./singlepost.scss";

export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    
    useEffect(()=>{
        const getPost = async () => {
            const res = await axios.get("/posts/" + path);
            setPost(res.data);
        };
        getPost();
    }, [path]);

  return (
    <div className="singlePost">
        <div className="wrapper">
            {post.photo && 
                <img 
                src={post.photo} 
                alt="" 
                className="img" />
            }
            <h1 className="title">
                {post.title}
                <div className="edit">
                    <i className="icon far fa-edit"></i>
                    <i className="icon far fa-trash-alt"></i>
                </div>
            </h1>
            <div className="info">
                <span className="author">
                    Author: 
                    <Link to={`/?user=${post.username}`} className="link">
                        <b>{post.username}</b>
                    </Link>
                </span>
                <span className="date">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="desc">{post.desc}</p>
        </div>
    </div>
  )
}
