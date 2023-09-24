import IOverlay from "../Interface/Overlay.tsx";
import "./Work.scss";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Card from "./Card.tsx";
import Text from "../Animated/text.tsx";
import SkillBar from "../Animated/skillBars.tsx";
import WorkSection from "./workSection.tsx";
import "./Card.scss";
import MobileCard from "./mobileCard.tsx";
function Work({
  showOverlay,
  setIsOverlayVisible,
  isOverlayVisible,
  cursorFunctions,
}: IOverlay) {
  const refSection1 = useRef(null);
  const refSection2 = useRef(null);
  const refSection3 = useRef(null);
  const refSection4 = useRef(null);

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
          <div className="flex">
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
      {condition && (
        <div id="deckContainer">
          <AnimatePresence>
            {/* <div id="contain"> */}
            <Card
              key="1"
              src={"../../public/Images/Projects/Project1.jpg"}
              section={refSection4}
            />
            <Card
              key="2"
              src={"../../public/Images/Projects/Project1.jpg"}
              section={refSection3}
            />
            <Card
              key="3"
              src={"../../public/Images/Projects/Project1.jpg"}
              section={refSection2}
            />
            <Card
              key="4"
              src={"../../public/Images/Projects/Project1.jpg"}
              section={refSection1}
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
            <MobileCard src="../../public/Images/Projects/Project1.jpg" />
          </Text>
        )}
      </WorkSection>
      <div className="sections">
        <h1>section2</h1>
        <div
          className="imgSpot"
          ref={refSection2}
          style={{ height: "50px", width: "200px" }}
        ></div>
      </div>
      <div className="sections">
        <h1>section3</h1>
        <div
          className="imgSpot"
          ref={refSection3}
          style={{ height: "50px", width: "200px" }}
        ></div>
      </div>
      <div className="sections">
        <h1>section4</h1>
        <div
          className="imgSpot"
          ref={refSection4}
          style={{ height: "50px", width: "200px" }}
        ></div>
      </div>
    </div>
  );
}

export default Work;
