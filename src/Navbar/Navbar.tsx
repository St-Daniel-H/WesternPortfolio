import "./Navbar.scss";
import NavbarTarget from "./NavbarTarget";
import IOverlay from "../Interface/Overlay";
function Navbar({isOverlayVisible, setIsOverlayVisible,showOverlay, cursorFunctions}:IOverlay){

    return(
        <div id="Nav">
        <img src="../../public/Images/cursor.png"></img>
        <div id="links">
            <NavbarTarget   isOverlayVisible={isOverlayVisible}  showOverlay ={showOverlay}  cursorFunctions={cursorFunctions} text={"Home"}/>
            <NavbarTarget  isOverlayVisible={isOverlayVisible}  showOverlay ={showOverlay}  cursorFunctions={cursorFunctions}  text={"Work"}/>
            <NavbarTarget  isOverlayVisible={isOverlayVisible}  showOverlay ={showOverlay}  cursorFunctions={cursorFunctions} text={"Contact"}/>
        </div>
        </div>
    )
}
export default Navbar;