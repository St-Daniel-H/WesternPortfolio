import ICursorFunctions from "./ICursorFunctions";
export default interface ITarget {
    text: String,
    showOverlay : ()=>void,
    isOverlayVisible : Boolean,
    cursorFunctions:ICursorFunctions,
  }