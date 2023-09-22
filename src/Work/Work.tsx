import IOverlay from "../Interface/Overlay.tsx";
import "./Work.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect,useRef } from "react";
import Card from "./Card.tsx";
import Text from "../Animated/text.tsx"
import SkillBar from "../Animated/skillBars.tsx"
function Work({ showOverlay, setIsOverlayVisible, isOverlayVisible, cursorFunctions }: IOverlay) {

  const refSection1 = useRef(null);
  const refSection2 = useRef(null);
  const refSection3 = useRef(null);
  const refSection4 = useRef(null);
  
  const screenWidth = window.innerWidth;
  const condition = screenWidth>850;
  return (
    <div id="Work">
      <div id="Introduction">
        <Text text='<h1>Experience</h1><br/><br/>
          <h3>HTML5</h3>'/>
        <SkillBar num={95}/>
        <Text text='<br/>
          <h3>CSS</h3>'/>
        <SkillBar num={70}/>
        <Text text='<br/>
          <h3>Javascript</h3>'/>
        <SkillBar num={85}/>
        <Text text='<br/>
          <h3>ReactJS</h3>'/>
        <SkillBar num={75}/>
        <Text text='<br/>
          <h3>ExpessJS</h3>'/>
        <SkillBar num={75}/>
        <Text text='<br/>
          <h3>asp.net core</h3>'/>
        <SkillBar num={60}/>
        <Text text='<br/>
          <h3>Mongodb</h3>'/>
        <SkillBar num={80}/>
        <Text text='<br/>
          <h3>SQL</h3>'/>
        <SkillBar num={80}/>
      </div>
     {condition &&(     
      <div id="deckContainer">
      <AnimatePresence>
      {/* <div id="contain"> */}
            <Card src={"../../public/Images/Projects/Project1.jpg"} section={refSection4} />
            <Card src={"../../public/Images/Projects/Project1.jpg"} section={refSection3} />
            <Card src={"../../public/Images/Projects/Project1.jpg"} section={refSection2} />
            <Card src={"../../public/Images/Projects/Project1.jpg"} section={refSection1} />
        {/* </div> */}
      </AnimatePresence>
      </div> )  }

      <div className="sections" >
        <h1>section1</h1>
        <div  className="imgSpot" ref={refSection1} style={{height:"50px",width:"200px"}}></div>
      </div>
      <div className="sections">
        <h1>section2</h1>
        <div  className="imgSpot" ref={refSection2} style={{height:"50px",width:"200px"}}></div>
      </div>
      <div className="sections">
        <h1>section3</h1>
        <div  className="imgSpot" ref={refSection3} style={{height:"50px",width:"200px"}}></div>
      </div>
      <div  className="sections">
        <h1>section4</h1>
        <div  className="imgSpot" ref={refSection4} style={{height:"50px",width:"200px"}}></div>
      </div>
    </div>
  );
}

export default Work;
