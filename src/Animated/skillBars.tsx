import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function SkillBar({ num }: { num: number }) {
  const [currentPercentage, setCurrentPercentage] = useState<number>(0);

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();
  const variants = {
    hidden: { width: "0%" },
    visible: {
      width: `${num}%`,
      transition: { duration: 0.8, ease: "easeIn", delay: 0.2 },
    },
  };
  useEffect(() => {
    if (inView) {
      controls.start(variants.visible);
    }
  }, [inView]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPercentage((prevPercentage) => {
        const nextPercentage = prevPercentage + 1;
        if (nextPercentage >= num) {
          clearInterval(interval);
          return num;
        }
        return nextPercentage;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [num]);

  return (
    <div
      ref={ref}
      id="skillBar"
      style={{
        maxWidth: "800px",
        width: "100%",
        backgroundColor: "white",
        height: "15px",
        borderRadius: "25px",
        position: "relative",
        boxShadow: "3px 3px 10px 3px #272727",
      }}
    >
      <motion.div
        style={{
          backgroundImage:
            'URL("../../public/Images/Backgrounds/NavbarBG.jpg")',
          height: "100%",
          borderRadius: "25px",
        }}
        variants={variants}
        initial="hidden"
        animate={controls}
      ></motion.div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          color: "white",
        }}
      >
        <p>{currentPercentage}%</p>
      </div>
    </div>
  );
}

export default SkillBar;
