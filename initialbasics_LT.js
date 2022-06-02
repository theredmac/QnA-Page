import data from "./data.json";
import "./styles.css";

const Initialbasics_LT = () => {
    let num=1;
    return (
        <>
        <div className="title">  Lab- Tests: Initial Basic Concepts</div>
        {data.initialBasics[2].Elements.map((data) =>(
                <div className="datapreview" key={num}>
                    <details>
                    <summary id="ques"><div  id="question"># Question- {num++}</div></summary>
                    <h3 ><pre>{data.Question}</pre></h3>
                    <details>
                    <summary id="code">Code:
                    </summary>
                    
                    <div className="answer"><pre className="line-numbers"><code className="language-cpp">{data.Answer}</code></pre></div>
                    
                    </details>
                    </details>
                    {/* <button onClick={() => func(data.id)}> Delete</button> */}
                </div>
                ))}
                </>
    );
}
 
export default Initialbasics_LT; 