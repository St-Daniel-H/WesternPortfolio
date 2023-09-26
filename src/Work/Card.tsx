import { useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
function Card({
  section,
  src,
  href,
}: {
  section: any;
  src: String;
  href: string;
}) {
  //navigation
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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // Define the initial and final positions for the element
  const initialY = "50%";

  const screenWidth = window.innerWidth;

  const [animating, setAnimating] = useState(true);

  // Calculate the current element's y-position based on the scroll position
  const scrollMultiplier = 0.25; // Adjust this value to control the animation speed
  const elementY = scrollPosition * scrollMultiplier;

  useEffect(() => {
    if (!animating) return;

    if (!inView) {
      controls.start({
        y: `${elementY}%`,
        transition: {
          duration: 0.1,
        },
      });
    } else {
      const { y, width } = section.current.getBoundingClientRect();
      controls.start({
        y: -(-scrollPosition - y + 400 / 2),
        x: -screenWidth + width * 2,
        rotate: -90,
        transition: { ease: "easeIn", duration: 0.5 },
      });
      setAnimating(false);
    }

    // }
  }, [scrollPosition, inView]);

  return (
    <div
      className="Card"
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "s",
        alignItems: "center",
      }}
      onClick={(e) => {
        e.preventDefault();
        window.location.href = href;
      }}
    >
      <motion.div
        className="cardMotion"
        style={{
          borderRadius: "25px",
          position: "absolute",
          right: "20px",
          top: "150px",
        }}
        initial={{ y: initialY }}
        animate={controls}
      >
        <div className="insideOfCard">
          <div
            className="insideOfCardImg"
            style={{
              backgroundImage: `URL(${src})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
            }}
          ></div>
        </div>
      </motion.div>
    </div>
  );
}

export default Card;
