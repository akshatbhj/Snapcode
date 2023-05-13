import React from "react";
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram, AiFillGithub} from "react-icons/ai"

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>snapcode</h1>
          <p>Solutions to all your coding problems in a snap.</p>
        </main>
      </div>

      <div className="home2">
        <div className="img"></div>
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
            fuga atque voluptate reprehenderit, non dicta, et nam optio
            voluptates unde rem fugiat nesciunt tempore exercitationem possimus
            iure illo dolores alias, modi magni laudantium saepe.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
      <h1>Brands</h1>
        <div>
          <article>
            <div style={{animationDelay:"0.3s"}}>
              <AiFillGoogleCircle />
              {/* <p>Google</p> */}
            </div>
            <div style={{animationDelay:"0.5s"}}>
              <AiFillAmazonCircle/>
              {/* <p>Amazon</p> */}
            </div>
            <div style={{animationDelay:"0.7s"}}>
              <AiFillYoutube/>
              {/* <p>YouTube</p> */}
            </div>
            <div style={{animationDelay:"0.9s"}}>
              <AiFillInstagram/>
              {/* <p>Instagram</p> */}
            </div>
            <div style={{animationDelay:"1.1s"}}>
              <AiFillGithub/>
              {/* <p>GitHub</p> */}
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
