import Heroback from "./Heroback";
import './Contact.css';
import { useState,useEffect } from "react";
import axios from 'axios'


function Contact() {
    const [contentType,setContentType] = useState("posts");
    const [contentData,setContentData] = useState([])
    
    // useeffect
    useEffect(()=>{
        fetchdata();
    } , [contentType])

    // API CALLING USING AXIOS
    let fetchdata = async()=>{
       let respond =  await axios.get("https://jsonplaceholder.typicode.com/posts");
       setContentData(respond.data);
    };

    // funs on buttons
    function posts() {
        setContentType("posts");
    }
    function user() {
         setContentType("user"); 
    }
    function comments() {
        setContentType("comments");
    }


    return(
    <div className="contact">
    <Heroback/>
        
        <button onClick={posts}>posts</button>
        <button onClick={user}>user</button>
        <button onClick={comments}>comments</button>
        <h1 style={{color:"white"}}>{contentType}</h1>


       {contentData.map((posts,index)=>{
            return(
                <div>
                <h2 style={{color:"white"}}>{posts.title}</h2>
                </div>
            );      
        })}

        {contentData.map((users,index)=>{
            return(
                <div>
                <h2 style={{color:"white"}}>{users.username}</h2>
                <p style={{color:"gray"}}>{users.email}</p>
                </div>
            );      
        })}

        {contentData.map((comments,index)=>{
            return(
                <div>
                <h2 style={{color:"white"}}>{comments.title}</h2>
                </div>
            );      
        })}


    </div>
    );
}
export default Contact;