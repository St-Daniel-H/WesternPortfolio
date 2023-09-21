import "./NavbarTarget.scss"
import ITarget from "../Interface/ITarget";
import { useNavigate,useLocation } from 'react-router-dom';
import {useState,useEffect} from "react";
function NavbarTarget({text,showOverlay,isOverlayVisible,cursorFunctions}:ITarget){
    const navigate = useNavigate();
    const path = "/"+text
        //handling style
        let location = useLocation();
        function isItActive(){
            if(text == "Home" && location.pathname =="/" ){
                return true;
            }
             if(path == location.pathname){
                return true;
            }
            return false
        }
    const [active,setActive] = useState(isItActive());
    function targetShot(){
        if(!isOverlayVisible){
          showOverlay(); 
        setTimeout(()=>{
            if(text == "Home")
                navigate("/");
            else navigate(path);
        },500);
        }
    }

    const targetStyle = {
        color: active ? "red" : "white",
    }
    useEffect(()=>{
        setActive(isItActive);
    },[location.pathname]);
    return (
        <div onMouseOver={cursorFunctions.cursorAim} onMouseOut={cursorFunctions.cursorDefault} onClick={targetShot} className="NavbarTarget" style={targetStyle}>
            <h3>{text}</h3>
        </div>
    )
}

export default NavbarTarget;