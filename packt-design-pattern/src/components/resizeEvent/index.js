import { useLayoutEffect, useEffect, useState } from "react";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

function App() {
  const [dimensions, setDimesions] = useState({
    width: 0,
    height: 0,
  });

  const updateSize = () => {
    setDimesions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    updateSize();
  }, []);

  return (
    <div>
      height: {dimensions.height} * width: {dimensions.width}
    </div>
  );
}

export default App;
