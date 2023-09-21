import "./main.scss"
import Target from "./target.tsx" 
import Cursor from "../Cursor/Cursor.tsx";
import cursor from "../SCSS/cursorVariable";
import {useState } from "react";

function Main(){
    
    const [cursorStyle, setCursorStyle] = useState(cursor.defaultCursor); // Initialize with the default cursor
    function cursorFire(){
        setCursorStyle(cursor.fireCursor)
    }
    function cursorAim(){
        setCursorStyle(cursor.aimCursor)
    }
    function cursorDefault(){
        setCursorStyle(cursor.defaultCursor)
    }
    const audio = new Audio("../../public/Sound/shoot.mp3");
    function shoot(){
        audio.play();
        cursorFire();
        setTimeout(function () {
            cursorDefault();
        }, 500);
    }
   
    return(
        <div id="Main" onClick={shoot}>
            <Cursor cursorStyle={cursorStyle} />
            <div id="Introduction">
            <h1>Howdy! My name is Daniel</h1>
            <p>Full stack web developer developer</p>

            </div>
            <Target text="Work" cursorAim={cursorAim} cursorDefault={cursorDefault}/>
            <Target text="Contact" cursorAim={cursorAim} cursorDefault={cursorDefault}/>
        </div>
    )

}
export default Main;