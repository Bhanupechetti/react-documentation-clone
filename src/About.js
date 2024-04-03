import Heroback from "./Heroback";
import { Heroback5 } from "./Home";
import "./About.css";

function About() {
   return(
           <div className="about">
            <Heroback/>
            <div className="largeabout2">
            <div className="about2">
                <div className="miniabout2">
                <p>Blog </p>
                <span class="material-symbols-outlined" >
                 chevron_right
                </span>
                </div>
                <h1>React Blog</h1>
                <p className="pp">This blog is the official source for the updates from the React team. Anything important, including release notes or deprecation notices, will be posted here first. You can also follow the @reactjs account on Twitter, but you won't miss anything essential if you only read this blog.</p>
            </div>
            </div>
            <About1 title="React Labs: What We've Been Working On - February 2024"
                    date="February 15, 2024"
                    matter="In React Labs posts, we write about projects in active research and development. Since our last update, we've made significant progress on React Compiler, new features, and React 19, and we'd like to share what we learned."
                    link="Read more"
            />
            <About1 title="React Canaries: Incremental Feature Rollout Outside Meta"
                    date="May 3, 2023"
                    matter="Traditionally, new React features used to only be available at Meta first, and land in the open source releases later. We'd like to offer the React community an option to adopt individual new features as soon as their design is close to final- similar to how Meta uses React internally. We are introducing a new officially supported Canary release channel. It lets curated setups like frameworks decouple adoption of individual React features from the React release schedule."
                    link="Read more"
            />
           <About1 title="React Labs: What We've Been Working On - March 2023"
                    date="March 22, 2023"
                    matter="In React Labs posts, we write about projects in active research and development. Since our last update, we've made significant progress on React Server Components, Asset Loading, Optimizing Compiler, Offscreen Rendering, and Transition Tracing, and we'd like to share what we learned"
                    link="Read more"
            />
            <About1 title="Introducing react.dev"
                    date="March 16, 2023"
                    matter="Today we are thrilled to launch the new home for React and its documentation. In this post, we would like to give you a tour of the newsite."
                    link="Read more"
            />
            <About1 title="React Labs: What We've Been Working On - June 2022"
                    date="June 15, 2022"
                    matter="React 18 was years in the making, and with it brought valuable lessons for the React team. Its release was the result of many years of research and exploring many paths. Some of those paths were successful; many more were dead-ends that led to new insights. One lesson we've learned is that it's frustrating for the community to wait for new features without having insight into these paths that we're exploring..."
                    link="Read more"
            />
            <About1 title="React v18.0"
                    date="March 29, 2022"
                    matter="React 18 is now available on npm! In our last post, we shared step-by-step instructions for upgrading your app to React 18. In this post, we'll give an overview of what's new in React 18, and what it means for the future..."
                    link="Read more"
            />
            <About1 title="How to Upgrade to React 18"
                    date="March 8, 2022"
                    matter="As we shared in the release post, React 18 introduces features powered by our new concurrent renderer, with a gradual adoption strategy for existing applications. In this post, we will guide you through the steps for upgrading to React 18..."
                    link="Read more"
            />
            <About1 title="React Conf 2021 Recap"
                    date="December 17, 2021"
                    matter="As we shared in the release post, React 18 introduces features powered by our new concurrent renderer, with a gradual adoption strategy for existing applications. In this post, we will guide you through the steps for upgrading to React 18..."
                    link="Read more"
            />
            <Heroback5/>
           </div>
   ); 
};

export default About;

function About1(props) {
       return(
        <div className="about1">
                <div className="miniabout1">
                <h2>{props.title}</h2>
                <p className="p1">{props.date}</p>
                <p className="p2">{props.matter}</p>
                <p className="p3">{props.link}</p>
                </div>
        </div>
       ); 
};
export {About1};