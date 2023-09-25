import Text from "../Animated/text";
import { ReactNode } from "react";
function WorkSection({ children }: { children: ReactNode }) {
  const elementStyle = {
    marginTop: "100px",
    fontSize: "30px",
  };
  return (
    <div className="sections" style={elementStyle}>
      <div>{children}</div>
    </div>
  );
}
export default WorkSection;
