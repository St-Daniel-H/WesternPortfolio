import "./BlackOverlay.scss"
import { motion,AnimatePresence,easeInOut  } from 'framer-motion';

function BlackOverlay({ isVisible } : {isVisible: Boolean}){
    const overlayVariants = {
        hidden: { x: '-100%', opacity: 1, zIndex: -1 }, // Initially, slide out to the right
        visible: { x: '0%', opacity: 1, zIndex: 1,transition: { duration: 1, ease: easeInOut } }, // Slide in from the left
        exit : { x: '+100%', opacity: 1,zIndex: 1, transition: { duration: 0.5, ease: easeInOut } }
        
      };

    return(
    <div>
        <AnimatePresence>
       {isVisible &&  (<motion.div
        className="black-overlay"
        variants={overlayVariants}
        initial="hidden"
        //initial={{ x: -100, opacity: 0 }}
        animate="visible"
        exit="exit"       
        ></motion.div>)}
        </AnimatePresence>

    </div>
        

    )

}
export default  BlackOverlay;