import ICursorFunctions from "./ICursorFunctions";
export default interface ITarget {
    text: String,
    showOverlay : ()=>void,
    isOverlayVisible : Boolean,
    setIsOverlayVisible: (value: any)=>void,
    cursorFunctions:ICursorFunctions,
  }