import { motion,AnimatePresence  } from 'framer-motion';

function Text({text}:{text:String}){
    const variants = {
        hidden: {  opacity: 0,y:-20  }, // Initially, slide out to the right
        visible: { opacity: 1,y:0 ,transition: { duration: 1, ease: 'easeIn' } },      
      };

      const htmlContent = { __html: text };

    return(
        <AnimatePresence>
        <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        dangerouslySetInnerHTML={htmlContent} 
        >
        </motion.div>
        </AnimatePresence>

    )
}
export default Text;