import './Cursor.scss'
import  { useRef, useEffect } from 'react';

function Cursor({cursorStyle}:{cursorStyle: String}){
    const cursorRef = useRef<HTMLDivElement | null>(null);

    function updateCursorPosition(event: MouseEvent) {
        const mouseX = event.clientX + window.scrollX; // Account for horizontal scroll
        const mouseY = event.clientY + window.scrollY; // Account for vertical scroll
      
        if (cursorRef.current) {
          const cursorWidth = cursorRef.current.offsetWidth;
          const cursorHeight = cursorRef.current.offsetHeight;
          const screenWidth = document.documentElement.clientWidth; // Get viewport width
          const screenHeight = window.innerHeight; // Use window.innerHeight to get the visible height
          
          // Calculate the maximum allowable position, taking into account the scroll position
          const maxX = screenWidth - cursorWidth;
          const maxY = screenHeight - cursorHeight + window.scrollY; // Adjust maxY for scroll position
      
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