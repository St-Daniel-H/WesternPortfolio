import "./main.scss";
import Target from "./target.tsx";
import IOverlay from "../Interface/Overlay.tsx";
import Text from "../Animated/text.tsx";
function Main({
  showOverlay,
  setIsOverlayVisible,
  isOverlayVisible,
  cursorFunctions,
}: IOverlay) {
  if (false) {
    setIsOverlayVisible(true);
  }
  return (
    <div id="Main">
      <div id="Introduction">
        <Text>
          <h1>Howdy! My name is Daniel</h1>
          <p>Full stack web developer developer</p>
        </Text>
      </div>
      <Target
        isOverlayVisible={isOverlayVisible}
        showOverlay={showOverlay}
        text="Work"
        cursorFunctions={cursorFunctions}
      />
      <Target
        isOverlayVisible={isOverlayVisible}
        showOverlay={showOverlay}
        text="Contact"
        cursorFunctions={cursorFunctions}
      />
    </div>
  );
}
export default Main;
