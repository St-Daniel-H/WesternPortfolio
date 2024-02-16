import "./Work.scss";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Card from "./Card.tsx";
import Text from "../Animated/text.tsx";
import SkillBar from "../Animated/skillBars.tsx";
import WorkSection from "./workSection.tsx";
import "./Card.scss";
import MobileCard from "./mobileCard.tsx";
function Work() {
  const refSection1 = useRef(null);
  const refSection2 = useRef(null);
  const refSection3 = useRef(null);
  const refSection4 = useRef(null);
  const refSection5 = useRef(null);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  window.onresize = () => {
    setScreenWidth(window.innerWidth);
  };

  const condition = screenWidth > 850;
  useEffect(() => {
    const resetScrollPosition = () => {
      window.scrollTo(0, 0); // Scroll to the top of the page
    };

    window.addEventListener("beforeunload", resetScrollPosition);

    return () => {
      window.removeEventListener("beforeunload", resetScrollPosition);
    };
  }, []);
  return (
    <div id="Work">
      <div id="Introduction">
        <Text>
          <h1>Experience</h1>
          <br />
          <br />
        </Text>
        <div className="flex">
          <div className="flex" style={{ marginTop: "0" }}>
            <Text>
              <h3>HTML5</h3>
            </Text>
            <SkillBar num={95} />
          </div>

          <div className="flex">
            <Text>
              <h3>CSS</h3>
            </Text>
            <SkillBar num={70} />
          </div>

          <div className="flex">
            <Text>
              <h3>Javascript</h3>
            </Text>
            <SkillBar num={85} />
          </div>

          <div className="flex">
            <Text>
              <h3>ReactJS</h3>
            </Text>
            <SkillBar num={75} />
          </div>
          <div className="flex">
            <Text>
              <h3>FramerMotion</h3>
            </Text>
            <SkillBar num={80} />
          </div>
          <div className="flex">
            <Text>
              <h3>ReactMUI</h3>
            </Text>
            <SkillBar num={85} />
          </div>

          <div className="flex">
            <Text>
              <h3>ExpessJS</h3>
            </Text>
            <SkillBar num={75} />
          </div>

          <div className="flex">
            <Text>
              <h3>asp.net core</h3>
            </Text>
            <SkillBar num={60} />
          </div>

          <div className="flex">
            <Text>
              <h3>Mongodb</h3>
            </Text>
            <SkillBar num={80} />
          </div>

          <div className="flex">
            <Text>
              <h3>SQL</h3>
            </Text>
            <SkillBar num={80} />
          </div>
        </div>
      </div>
      <div>
        <h1>
          Check out more of my work here:
          <br /> https://github.com/St-Daniel-H
        </h1>
      </div>
      {condition && (
        <div id="deckContainer">
          <AnimatePresence>
            {/* <div id="contain"> */}

            <Card
              key="2"
              src={"./Images/Projects/Project4.jpg"}
              section={refSection4}
              href="https://github.com/St-Daniel-H/WesternPortfolio"
            />
            <Card
              key="1"
              src={"./Images/Projects/Project5.jpg"}
              section={refSection5}
              href="https://github.com/St-Daniel-H/WeatherApp"
            />
            <Card
              key="3"
              src={"./Images/Projects/Project3.jpg"}
              section={refSection3}
              href="https://github.com/St-Daniel-H/UniProject"
            />
            <Card
              key="4"
              src={"./Images/Projects/Project2.jpg"}
              section={refSection2}
              href="https://github.com/St-Daniel-H/SocialNetwork"
            />
            <Card
              key="5"
              src={"./Images/Projects/Project1.jpg"}
              section={refSection1}
              href="https://github.com/St-Daniel-H/BookingSystem"
            />

            {/* </div> */}
          </AnimatePresence>
        </div>
      )}

      <WorkSection>
        <Text>
          <h1>Booking System</h1>
        </Text>
        {condition ? (
          <div
            className="imgSpot"
            ref={refSection1}
            style={{ height: "50px", width: "200px" }}
          ></div>
        ) : (
          <Text>
            <MobileCard src="./Images/Projects/Project1.jpg" />
          </Text>
        )}
        <div
          style={{
            marginTop: !condition ? "400px" : "270px",
          }}
        >
          <Text>
            Web application for companies to manage their meeting schedules{" "}
            <br />
            <ul></ul>
            <li>
              <b>Frontend</b>: ReactJS, reactMUI,SCSS
            </li>
            <li>
              <b>Backend</b>: asp.net core
            </li>
            <li>
              <b>Database</b>: SQL server manager
            </li>
          </Text>
        </div>
      </WorkSection>
      <WorkSection>
        <Text>
          <h1>Social Network</h1>
        </Text>
        {condition ? (
          <div
            className="imgSpot"
            ref={refSection2}
            style={{ height: "50px", width: "200px" }}
          ></div>
        ) : (
          <Text>
            <MobileCard src="./Images/Projects/Project2.jpg" />
          </Text>
        )}
        <div
          style={{
            marginTop: !condition ? "400px" : "270px",
          }}
        >
          <Text>
            Web application for users to Post, interact with posts by comments,
            liking/disliking and connect with each other <br />
            <ul></ul>
            <li>
              <b>Frontend</b>: ReactJS, reactMUI, Redux,SCSS
            </li>
            <li>
              <b>Backend</b>: ExpressJS
            </li>
            <li>
              <b>Database</b>: MongoDB
            </li>
          </Text>
        </div>
      </WorkSection>
      <WorkSection>
        <Text>
          <h1>Club House</h1>
        </Text>
        {condition ? (
          <div
            className="imgSpot"
            ref={refSection3}
            style={{ height: "50px", width: "200px" }}
          ></div>
        ) : (
          <Text>
            <MobileCard src="./Images/Projects/Project3.jpg" />
          </Text>
        )}
        <div
          style={{
            marginTop: !condition ? "400px" : "270px",
          }}
        >
          <Text>
            Front end website similar to google classrooms <br />
            <ul></ul>
            <li>
              <b>Frontend</b>: HTML5,CSS3,Javascript, Bootstrap
            </li>
            <b>Live Preveiw: </b>
            <a href="https://st-daniel-h.github.io/UniProject/Pages/mainPage/index.html">
              {" "}
              here
            </a>
          </Text>
        </div>
      </WorkSection>

      <WorkSection>
        <Text>
          <h1>Weather app</h1>
        </Text>
        {condition ? (
          <div
            className="imgSpot"
            ref={refSection5}
            style={{ height: "50px", width: "200px" }}
          ></div>
        ) : (
          <Text>
            <MobileCard src="./Images/Projects/Project5.jpg" />
          </Text>
        )}
        <div
          style={{
            marginTop: !condition ? "400px" : "270px",
          }}
        >
          <Text>
            Weather application that integrates with weather APIs <br />
            <ul></ul>
            <li>
              <b>Frontend</b>: HTML5,CSS,Javascript
            </li>
            <b>Live preview</b>:
            <a href="https://st-daniel-h.github.io/WeatherApp/">here</a>
          </Text>
        </div>
      </WorkSection>
      <WorkSection>
        <Text>
          <h1>Portfolio Website</h1>
        </Text>
        {condition ? (
          <div
            className="imgSpot"
            ref={refSection4}
            style={{ height: "50px", width: "200px" }}
          ></div>
        ) : (
          <Text>
            <MobileCard src="./Images/Projects/Project4.jpg" />
          </Text>
        )}
        <div
          style={{
            marginTop: !condition ? "400px" : "270px",
          }}
        >
          <Text>
            Static website to show my skillset <br />
            <ul></ul>
            <li>
              <b>Frontend</b>: React,Typescript,Framer-Motion,SCSS,
            </li>
          </Text>
        </div>
      </WorkSection>
    </div>
  );
}

export default Work;
