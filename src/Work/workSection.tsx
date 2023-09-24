import Text from "../Animated/text";
import { ReactNode } from "react";
function WorkSection({ children }: { children: ReactNode }) {
  const elementStyle = {
    minHeight: "100vh",
  };
  return (
    <div style={elementStyle}>
      <div>{children}</div>
    </div>
  );
}
export default WorkSection;
