import './Cursor.scss'
import  { useRef, useEffect } from 'react';

function Cursor({cursorStyle}:{cursorStyle: String}){
    const cursorRef = useRef<HTMLDivElement | null>(null);

    function updateCursorPosition(event: MouseEvent) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
      
        if (cursorRef.current) {
          const cursorWidth = cursorRef.current.offsetWidth;
          const cursorHeight = cursorRef.current.offsetHeight;
          const screenWidth = window.innerWidth;
          const screenHeight = window.innerHeight;
      
          // Calculate the maximum allowable position
          const maxX = screenWidth - cursorWidth;
          const maxY = screenHeight - cursorHeight;
      
          // Ensure the cursor stays within the screen boundaries
          const newX = Math.min(maxX, Math.max(0, mouseX));
          const newY = Math.min(maxY, Math.max(0, mouseY));
      
          cursorRef.current.style.left = newX + 'px';
          cursorRef.current.style.top = newY + 'px';
        }
    }
    useEffect(() => {
        document.addEventListener('mousemove', updateCursorPosition);

        // Clean up the event listener when the component unmounts
        return () => {
            document.removeEventListener('mousemove', updateCursorPosition);
        };
    }, []);
    const elementStyle= {
      backgroundImage: `URL(${cursorStyle})`,

    };

   
    return(
        <div id="Cursor" ref={cursorRef} style={elementStyle}>


        </div>
    )
}
export default Cursor;