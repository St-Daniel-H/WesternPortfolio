import IOverlay from "../Interface/Overlay.tsx"
function Work({showOverlay,setIsOverlayVisible,isOverlayVisible,cursorFunctions}:IOverlay){
    
    return(
    <div id="Work">
        <button onMouseOver={cursorFunctions.cursorAim} onMouseOut={cursorFunctions.cursorDefault} onClick={showOverlay}>Show Overlay</button>

        <h1>Work</h1>
    </div>
    )
}

export default Work;