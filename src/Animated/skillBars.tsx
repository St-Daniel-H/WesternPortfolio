import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function SkillBar({ num }: { num: number }) {
  const [currentPercentage, setCurrentPercentage] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const variants = {
    hidden: { width: '0%' },
    visible: {
      width: `${num}%`,
      transition: { duration: 1, ease: 'easeIn' },
    },
  };

  useEffect(() => {
    setIsAnimating(true);
    const interval = setInterval(() => {
      setCurrentPercentage((prevPercentage) => {
        const nextPercentage = prevPercentage + 1;
        if (nextPercentage >= num) {
          clearInterval(interval);
          setIsAnimating(false);
          return num;
        }
        return nextPercentage;
      });
    }, 10);

    return () => clearInterval(interval);
  }, [num]);

  return (
    <div
      id="skillBar"
      style={{
        maxWidth: '800px',
        width:"100%",
        backgroundColor: 'white',
        height: '15px',
        borderRadius: '25px',
        position: 'relative',
        boxShadow:'3px 3px 10px 3px #272727',
      }}
    >
      <motion.div
        style={{
            backgroundImage:'URL("../../public/Images/NavbarBG.jpg")',
          height: '100%',
          borderRadius: '25px',
        }}
        variants={variants}
        initial="hidden"
        animate="visible"
      ></motion.div>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          color: 'white',
        }}
      >
        <p>{currentPercentage}%</p>
      </div>
    </div>
  );
}

export default SkillBar;
