import { Route, Routes,BrowserRouter } from "react-router-dom";
import {useState,useEffect} from "react";
import Work from "./Work/Work"
import Main from "./Main/main"
import BlackOverlay from "./BlackOverlay/BlackOverlay";
import "./App.scss"
import Cursor from "./Cursor/Cursor.tsx";
import cursor from "./SCSS/cursorVariable";
import Navbar from "./Navbar/Navbar.tsx";
function App() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const showOverlay = () => {
    setIsOverlayVisible(true);
    //Simulate a delay to hide the overlay
    setTimeout(() => {
      setIsOverlayVisible(false);
    }, 1000); // Adjust the delay duration as needed
  };
  //cursor stuff
  const audio = new Audio("../../public/Sound/shoot.mp3");
  const [cursorStyle, setCursorStyle] = useState(cursor.defaultCursor); // Initialize with the default cursor
  const cursorFunctions = {
   cursorAim :  function cursorAim(){
    setCursorStyle(cursor.aimCursor)
    },
    cursorDefault:   function cursorDefault(){
      setCursorStyle(cursor.defaultCursor)
  },
  cursorFire:function cursorFire(){
    setCursorStyle(cursor.fireCursor)
},
  cursorShoot :function shoot(){
    audio.play();
    this.cursorFire();
    setTimeout(() => {
      this.cursorDefault();
    }, 500);
    }
  }


  useEffect(() => {
    const handleClick = () => {
      audio.currentTime = 0;
      cursorFunctions.cursorShoot();
    };
  
    // Add a click event listener to the document
    document.addEventListener("click", handleClick);
  
    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return (
  <BrowserRouter>
    <Cursor cursorStyle={cursorStyle}/>
    <BlackOverlay isVisible={isOverlayVisible} />
    <Navbar isOverlayVisible={isOverlayVisible} setIsOverlayVisible={setIsOverlayVisible} showOverlay={showOverlay} cursorFunctions={cursorFunctions}/>
    <Routes>
    <Route index element={<Main isOverlayVisible={isOverlayVisible} setIsOverlayVisible={setIsOverlayVisible} showOverlay={showOverlay} cursorFunctions={cursorFunctions}/>} />
    <Route path="/Work" element={<Work isOverlayVisible={isOverlayVisible} setIsOverlayVisible={setIsOverlayVisible} cursorFunctions={cursorFunctions} showOverlay={showOverlay}/> } />
   </Routes>
   </BrowserRouter>
  )
}

export default App
