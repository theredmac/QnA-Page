// import { Link } from "react-router-dom";
import React,{useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Innerpage = () => 
{
    useEffect(() => {
      Aos.init();
    }, [])
    return (
        <body>
            {/* <div className="tumbnail">
              <h1 className="hide">ffawec</h1>
            </div> */}
        {/* <div className="tumbnail">
          <img src="https://res.cloudinary.com/ganu369/image/upload/v1654162124/tn1_illu2_pbrmtv.png" alt="" />
        </div> */}
        {/* <div className="tumbnail">
          <img src="https://res.cloudinary.com/ganu369/image/upload/v1654161727/tn1_illu_pdorvq.png" alt="" />
        </div> */}
        <div className="topics">
        <a href="#" className="topic-card" data-aos="fade-down" data-aos-duration="2000">
          <div className="topic-icon">
            <img src="https://res.cloudinary.com/ganu369/image/upload/v1654088999/kik_img1__rr1emg.png" alt="" />
          </div>
          <div className="topic-name">
            <p>Initial Basics</p>
          </div>
        </a>
        <a href="#" className="topic-card" data-aos="fade-down" data-aos-duration="2000">
          <div className="topic-icon">
            <img src="https://res.cloudinary.com/ganu369/image/upload/v1654089230/kik_img2__oxgdpd.png" alt="" />
          </div>
          <div className="topic-name">
            <p>Loops</p>
          </div>
        </a>
        <a href="#" className="topic-card" data-aos="fade-down-right" data-aos-duration="2000">
          <div className="topic-icon">
            <img src="https://res.cloudinary.com/ganu369/image/upload/v1654093749/kik_img3__u9hesh.png" alt="" />
          </div>
          <div className="topic-name">
            <p>1-D Arrays and Strings</p>
          </div>
        </a>
        <a href="#" className="topic-card" data-aos="fade-down-left" data-aos-duration="2000">
          <div className="topic-icon">
            <img src="https://res.cloudinary.com/ganu369/image/upload/v1654095376/kik_img4__hf1kzn.png" alt="" />
          </div>
          <div className="topic-name">
            <p>Functions and Recursions</p>
          </div>
        </a>
        <a href="#" className="topic-card" data-aos="fade-up-right" data-aos-duration="2000">
          <div className="topic-icon">
            <img src="https://res.cloudinary.com/ganu369/image/upload/v1654096278/kik_img5__pbsjiv.png" alt="" />
          </div>
          <div className="topic-name">
            <p>Structures and 2-D Arrays</p>
          </div>
        </a>
        <a href="#" className="topic-card" data-aos="fade-up-left" data-aos-duration="2000">
          <div className="topic-icon">
            <img src="https://res.cloudinary.com/ganu369/image/upload/v1654096351/kik_img6__xx0bnk.png" alt="" />
          </div>
          <div className="topic-name">
            <p>Pointers and Dynamic Memory Allocation</p>
          </div>
        </a>
        <a href="#" className="topic-card" data-aos="fade-up" data-aos-duration="2000">
          <div className="topic-icon">
            <img src="https://res.cloudinary.com/ganu369/image/upload/v1654096416/kik_img7__y1r3nx.png" alt="" />
          </div>
          <div className="topic-name">
            <p>Linked Lists and Files</p>
          </div>
        </a>
        <a href="#" className="topic-card"data-aos="fade-up" data-aos-duration="2000">
          <div className="topic-icon">
            <img src="https://res.cloudinary.com/ganu369/image/upload/v1654096462/kik_img8__fs6ugc.png" alt="" />
          </div>
          <div className="topic-name">
            <p>Lab Tests</p>
          </div>
        </a>
      </div>
        {/* <div className="topis">
            <a href="#" className="topic-card">
                <div className="topic-icon">
                    <img src="" alt="" />
                </div>
                <div className="topic-card">
                    <p>Initial Basics</p>
                </div>
            </a>
            <a href="#" className="topic-card">
                <div className="topic-icon">
                    <img src="" alt="" />
                </div>
                <div className="topic-card">
                    <p>Loops</p>
                </div>
            </a>
            <a href="#" className="topic-card">
                <div className="topic-icon">
                    <img src="" alt="" />
                </div>
                <div className="topic-card">
                    <p>1-D Arrays and Strings</p>
                </div>
            </a>
            <a href="#" className="topic-card">
                <div className="topic-icon">
                    <img src="" alt="" />
                </div>
                <div className="topic-card">
                    <p>Functions and Recursions</p>
                </div>
            </a>
            <a href="#" className="topic-card">
                <div className="topic-icon">
                    <img src="" alt="" />
                </div>
                <div className="topic-card">
                    <p>Structures and 2-D Arrays</p>
                </div>
            </a>
            <a href="#" className="topic-card">
                <div className="topic-icon">
                    <img src="" alt="" />
                </div>
                <div className="topic-card">
                    <p>Pointers and Dynamic Memory Allocation</p>
                </div>
            </a>
            <a href="#" className="topic-card">
                <div className="topic-icon">
                    <img src="" alt="" />
                </div>
                <div className="topic-card">
                    <p>Linked Lists and Files</p>
                </div>
            </a>
            <div className="lab-test">
                <a href="#" className="topic-card">
                    <div className="topic-icon">
                        <img src="" alt="" />
                    </div>
                    <div className="topic-card">
                        <p>Tests</p>
                    </div>
                </a>
            </div>
        </div> */}
        
        </body>
        );
}

export default Innerpage;