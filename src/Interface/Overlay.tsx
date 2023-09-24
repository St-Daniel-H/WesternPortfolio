import ICursorFunctions from "./ICursorFunctions";
export default interface IOverlay {
  showOverlay: () => void;
  setIsOverlayVisible: (value: any) => void;
  isOverlayVisible: Boolean;
  cursorFunctions: ICursorFunctions;
}
