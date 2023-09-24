import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import { ReactNode } from "react";

function Text({ children }: { children: ReactNode }) {
  const variants = {
    hidden: { opacity: 0, y: -20 }, // Initially, slide out to the right
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeIn" } },
  };
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
    >
      {children}
    </motion.div>
  );
}
export default Text;
