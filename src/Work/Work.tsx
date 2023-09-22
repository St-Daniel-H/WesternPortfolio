import IOverlay from "../Interface/Overlay.tsx";
import "./Work.scss";
import { motion, AnimatePresence, useScroll,easeInOut,Variants } from "framer-motion";
import { useState, useEffect,useRef } from "react";
import Card from "./Card.tsx";
function Work({ showOverlay, setIsOverlayVisible, isOverlayVisible, cursorFunctions }: IOverlay) {

  const refSection1 = useRef(null);
  const refSection2 = useRef(null);
  const refSection3 = useRef(null);
  const refSection4 = useRef(null);
  
  const screenWidth = window.innerWidth;
  const condition = screenWidth>850;
  return (
    <div id="Work">

      <motion.div
      variants={{
        hidden:{opacity:0,y:90},
        visible:{opacity:1,y:75}
      }}
      initial="hidden"
      animate="visible">
      <h1>Work</h1>
      </motion.div>
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

      <div className="sections" style={{marginTop:"100px"}}>
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
