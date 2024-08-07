import { useEffect, useState } from 'react'

function useTrackMouse() {
  // Initialize state with the current online status
  const [positon, setPosition] = useState({x: 0, y: 0});
  
  const handleMouseMove = (e) => {
    setPosition({x: e.screenX, y: e.screenY});
  }

  useEffect(() => {
    window.addEventListener('mousemove',handleMouseMove);

    return () => {
      window.removeEventListener('mousemove',setPosition);
    };
  }, []);

  return positon;
}

function App() {
  const status = useTrackMouse();
  return (
    <>
      Your mouse pointer is on positon X:{status.x}, Y:{status.y}
    </>
  )
}


export default App