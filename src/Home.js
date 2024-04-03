import Heroback from "./Heroback";
import "./Home.css";
function Home() {
    return(
        <div className="home">
            <Heroback/>
            <div className="homematter" style= {{color:"white"}}>
                <i class="fa-brands fa-react reacticon"></i>
                <h1 className="h1react">React</h1>
                <h3>The library for web and native user interfaces</h3>
                <div className="btns">
                  <button className="btn1">Learn React</button>
                  <button className="btn2">API Reference</button>
                </div>
                <Heroback1/>
                <Heroback2/>
                <Heroback3/>
                <Heroback4/>
                <Heroback5/>
            </div> 
        </div>
    );
}

export default Home;

function Heroback1() {
    return(
        <div className="herobck1">
          <h2>Create user interfaces from components</h2>
          <p>React lets you build user interfaces out of individual pieces called components. Create your own React components like <span>Thumbnail</span> ,<span>LikeButton</span>,and <span>Video</span>. Then combine them into entire screens, pages, and apps.</p>
            <div className="imgherobck1">
              <img src="./reactimg1.png" alt="img1"/>
              <img src="./reactimg2.png" alt="img2"/>
            </div>
          <p className="phero">Whether you work on your own or with thousands of other developers, using React feels the same. It is designed to let you seamlessly combine components written by independent people, teams, and organizations.</p>
        </div>  
    );
  }
  export {Heroback1};


  function Heroback2() {
    return(
        <div className="heroback2">
            <div className="div1">
                <h1>Upgrade when the future is ready</h1>
                <p>React approaches changes with care. Every React commit is tested on business-critical surfaces with over a billion users. Over 100,000 React components at Meta help validate every migration strategy.</p>
                <p>The React team is always researching how to improve React. Some research takes years to pay off. React has a high bar for taking a research idea into production. Only proven approaches become a part of React.</p>
                <div className="minidiv1">
                    <span class="material-symbols-outlined">newsmode</span>
                    <h4>Read more React News</h4>
                    <span class="material-symbols-outlined">chevron_right</span>
                </div>
            </div>

            <div className="div2">
                <div className="minidiv2_1">
                <span class="material-symbols-outlined">expand_more</span>
                <p>LATEST REACT NEWS</p>
                </div>
                <div className="minidiv2_2">
                    <div className="child">
                        <h2>React Labs: February 2024</h2>
                        <div className="flask">
                            <i class="fa-solid fa-flask"></i>
                            <p>February 15, 2024</p>
                        </div> 
                    </div>
                    <div className="child">
                        <h2>React Canaries: Incremental Feature Rollout</h2>
                        <div className="flask">
                             <i class="fa-solid fa-newspaper"></i>
                            <p>May 3, 2023</p>
                        </div> 
                    </div>
                    <div className="child">
                        <h2>React Labs: March 2023</h2>
                        <div className="flask">
                            <i class="fa-solid fa-flask"></i>
                            <p>March 22, 2023</p>
                        </div> 
                    </div>
                    <div className="child">
                        <h2>Introducing react.dev</h2>
                        <div className="flask">
                              <i class="fa-solid fa-newspaper"></i>
                            <p>March 16, 2023</p>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    );
  }
  export {Heroback2};


  function Heroback3() {
     return(
        <div className="heroback3">
            <h1>Join a community of millions</h1>
            <p>You're not alone. Two million developers from all over the world visit the React docs every month.  React is something that people and teams can agree on.</p>
            <img src="./silder.png" alt="img"/>
            <p>This is why React is more than a library, an architecture, or even an ecosystem. React is a community. It's a place where you can ask for help, find opportunities, and meet new friends. You will meet both developers and designers, beginners and experts, researchers and artists, teachers and students. Our backgrounds may be very different, but React lets us all create user interfaces together.</p>
        </div>
     );
  }
  export {Heroback3};


  function Heroback4() {
    return(
        <div className="heroback4">
            <i class="fa-brands fa-react reacticon"></i>
            <h1>Welcome to the React community</h1> 
            <button>Get Started</button>
        </div>
    );
  }
  export {Heroback4};


  function Heroback5() {
    return(
        <div className="heroback5">
            <div className="minihr1">
                <div className="meta">
                    <i class="fa-brands fa-meta" style={{color:"blue"}}></i>
                    <h4 style={{color:"white"}}>Meta Open Source</h4>
                </div>
                <div className="meta">
                    <i class="fa-regular fa-copyright" style={{color:"white"}}></i>
                    <p style={{color:"white"}}>2024</p>
                </div>
            </div>

            <div className="minihr2">
                    <div className="minihalf" id="minihalf1">
                        <h4 style={{color:"white"}}>Leran React</h4>
                        <p>Quick Start</p>
                        <p>Installation</p>
                        <p>Describing the UI</p>
                        <p>Adding Interactivity</p>
                        <p>Managing State</p>
                        <p>Escape Hatches</p>
                    </div>

                    <div className="minihalf" id="minihalf2">
                        <h4 style={{color:"white"}}>API Reference</h4>
                        <p>React APIs</p>
                        <p>React DOM APIs</p>
                    </div>

                    <div className="minihalf" id="minihalf3">
                        <h4 style={{color:"white"}}>Community</h4>
                        <p>Code of Conduct</p>
                        <p>Meet the Team</p>
                        <p>Docs ContriButors</p>
                        <p>Acknowledgements</p>
                    </div>

                    <div className="minihalf" id="minihalf4">
                        <h4 style={{color:"white"}}>More</h4>
                        <p>Blog</p>
                        <p>React Native</p>
                        <p>Privacy</p>
                        <p>Terms</p>
                        <div className="icons">
                        <i class="fa-brands fa-facebook fxg" style={{color:"white"}}></i>
                        <i class="fa-brands fa-x-twitter fxg" style={{color:"white"}}></i>
                        <i class="fa-brands fa-github fxg" style={{color:"white"}}></i>
                        </div>
                    </div>
            </div>
        </div>
    );
  }
  export {Heroback5};