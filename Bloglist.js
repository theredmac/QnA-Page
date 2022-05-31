import React from "react";
// import "./prism.js";
// import "./prism.css";
// import React from "react";
// import Prism from "prismjs";
// import "./prism.css";
// import "./prism.js";


const Bloglist = ({blogs, title, func}) => {
    // blogs= blogs.filter(data => data.class==="Strings");
    return (
        <div className="lists">
            <h2>{title}</h2>
            {blogs.functionsAndRecursions[0].Elements.map((blog) =>(
                <div className="blogpreview" key={blog.id}>
                    <details>
                    <summary>Question</summary>
                    <h3  font family="cursive"><pre>{blog.Question}</pre></h3>
                    <details>
                    <summary>Code:
                    </summary>
                    
                    <p><pre className="line-numbers"><code className="language-c">{blog.Answer}</code></pre></p>
                    
                    </details>
                    </details>
                    {/* <button onClick={() => func(blog.id)}> Delete</button> */}
                </div>
            ))}
        </div>
    );
}
 
export default Bloglist;