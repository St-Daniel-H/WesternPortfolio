import "./target.scss"
import { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';

interface Target {
  cursorAim: () => void,
  cursorDefault: ()=>void,
  text: String
}

function Target({text,cursorAim,cursorDefault}:Target){
  const navigate = useNavigate();

    //randomize left position
    const maxWidth = window.innerWidth; 
    const getRandomLeft = () => {
        return Math.floor(Math.random() * maxWidth-150);
      };
    const [left, setLeft] = useState(getRandomLeft);
   // const [right, setRight] = useState(0);
   const[isMovingLeft,setIsMovingLeft] = useState(Math.random() < 0.5);
   const speed = 20;
    // Function to update the left coordinate over time
    const moveElementLeft = () => {
      setIsMovingLeft(true);
      setTimeout(() => {
        if (left + speed <= maxWidth - 150) { // Adjust for the element's width
          const newLeft = left + speed; // Adjust the movement step if needed
          setLeft(newLeft);
        } else {
          moveElementRight();
        }
      }, 1000);
    };
  
    const moveElementRight = () => {
      setTimeout(() => {
        if (left - speed >= 0) { // Adjust the movement step if needed
          setIsMovingLeft(false);
          const newLeft = left - speed; // Adjust the movement step if needed
          setLeft(newLeft);
        } else {
          moveElementLeft();
        }
      }, 1000);
    };
  
  function updateMovement(){
    if(isMovingLeft){
        moveElementLeft()
    }else{
        moveElementRight();
    }
  }
    // Start moving the element when the component mounts
    useEffect(() => {
        updateMovement();
    }, [left]);
  

    const targetStyle = {
        transition:'0.5',
      left: `${left}px`,
    };

   function targetShot(){
    setTimeout(()=>{
      navigate("/"+text);
    },1000);
   }
    
  return(
    <div onMouseOver={cursorAim} onMouseOut={cursorDefault} onClick={targetShot} className="target" style={targetStyle}>
        <div id="text">{text}</div>
    </div>
  )
}
export default Target;
