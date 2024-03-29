import { useEffect, useState } from "react";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./blog.scss"
import axios from "axios";
import { useLocation } from "react-router";

export default function Blog() {
  
  const [ posts, setPosts ] = useState([]);
  const search = useLocation();

  useEffect(()=>{
    const fetchPosts = async ()=>{
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  },[search]);

  return (
    <div className="blog">
        <Posts posts={posts} />
        <Sidebar />
    </div>
  );
}