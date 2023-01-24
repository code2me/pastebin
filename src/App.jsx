import { useState, useEffect, useRef } from "react";
import './index.css'
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";
import Favicon from "react-favicon";
import HTML_logo from "./assets/favicon/HTML_logo.ico";
import JS_logo from "./assets/favicon/JS_logo.ico";
import TS_logo from "./assets/favicon/TS_logo.ico";
import CSS_logo from "./assets/favicon/CSS_logo.ico";
import ReactJS_logo from "./assets/favicon/ReactJS_logo.ico";
import Redux_logo from "./assets/favicon/Redux_logo.ico";
import ComingSoon from "./components/comingsoon/ComingSoon";

function App() {
const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    const threeScript = document.createElement("script");
    threeScript.setAttribute("id", "threeScript");
    threeScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
    );
    document.getElementsByTagName("head")[0].appendChild(threeScript);

    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
        })
      );
    }
    return () => {
      if (threeScript) {
        threeScript.remove();
      }
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
    return (
    <div className="vanta" ref={vantaRef}>
      <Favicon url={[HTML_logo, CSS_logo, JS_logo, TS_logo, ReactJS_logo, Redux_logo]} />
      <ComingSoon/>
    </div>
  )
}

export default App
