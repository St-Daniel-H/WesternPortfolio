import "./main.scss"
import Target from "./target.tsx" 
import IOverlay from "../Interface/Overlay.tsx"
function Main({showOverlay,setIsOverlayVisible,isOverlayVisible,cursorFunctions}:IOverlay){

   
    return(
        <div id="Main">
            <div id="Introduction">
            <h1>Howdy! My name is Daniel</h1>
            <p>Full stack web developer developer</p>
            </div>
            <Target isOverlayVisible={isOverlayVisible} setIsOverlayVisible={setIsOverlayVisible} showOverlay={showOverlay} text="Work" cursorFunctions={cursorFunctions}/>
            <Target isOverlayVisible={isOverlayVisible} setIsOverlayVisible={setIsOverlayVisible} showOverlay ={showOverlay} text="Contact" cursorFunctions={cursorFunctions}/>
        </div>
    )

}
export default Main;