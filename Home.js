import { useState } from "react";
import Bloglist from "./Bloglist";
import data from "./data/data.json";

const Home = () => {

    let [myname, setname]= useState("Krishna");             // usestate changes the existing elements to the modified ones.
    let [blogs, setblogs]= useState(data);
    // setblogs(data);

    let handledelete=(id) =>{
        let newblog= blogs.filter(blog=> blog.id!== id);
        setblogs(newblog);
    }
    function handleclick(){
        console.log("Hello there!!");
    }
    let handleclickagain=(name)=>{
        console.log("Hello there!!"+ name);
        setname("KrishnaKolte");
    }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            Hellow, {myname} <br />
            <button onClick={handleclick}>Click Me</button>
            <button onClick={()=>{
                handleclickagain('Krishna');
            }}>Click again</button>
            <Bloglist blogs= {blogs} title="All Questions" func={handledelete}></Bloglist>
            </div>
     );
}
 
export default Home;