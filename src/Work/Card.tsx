import "./Card.scss";
import { useEffect,useState,useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

function Card({ section }: { section: any }) {

     //check if section is in view
     const inView = useInView(section, { once: true });

  //follow screen
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const controls = useAnimation();

  useEffect(() => {
    // Update the scroll position as the user scrolls
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
   // Define the initial and final positions for the element
   const initialY = '50%';
   const finalY = '80%';
 
   const screenWidth = window.innerWidth;
   const screenHeight = window.innerHeight;
  
   const [animating,setAnimating] = useState(true);

     // Calculate the current element's y-position based on the scroll position
  const scrollMultiplier = 1; // Adjust this value to control the animation speed
  const elementY = scrollPosition * scrollMultiplier;

  useEffect(()=>{
    if(!animating) return;

    if(!inView){
   controls.start({
    y: `${elementY}%`,
    transition: {
      duration: 0.3,
    },
  });
  console.log("hi")
    }else{

      const { x, y, width, height } = section.current.getBoundingClientRect();
      controls.start({
        y: scrollPosition - screenHeight/2 + y  ,
        x:-screenWidth/2 + width/2,
        rotate:90,
        transition:{ease:"easeIn",duration:0.5}
      })
      setAnimating(false);
    }
  
   // }
  },[scrollPosition,inView])

  
  return (
    <div className="Card"
    style={{
      width: '0',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    }}>
<motion.div
className="cardMotion"
 style={{
  width: '100px',
  height: '100px',
  background: 'blue',
  position: 'absolute',
}}
initial={{ y: initialY}}
animate={controls}
>
  <div className="insideOfCard">Card</div>
</motion.div>
    </div>
  );
}

export default Card;