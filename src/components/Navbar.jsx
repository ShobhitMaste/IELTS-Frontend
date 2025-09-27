import React, { useEffect, useState } from "react";
import {useWindowSize} from "../hooks/useWindowSize.jsx"

export default function Navbar() {
  const windowSize = useWindowSize();
  const [menuOpen, setMenuOpen] = useState(false);
  const width = windowSize.width;
  const mobileWidth = 768;
  useEffect(() => {
    if(width >= mobileWidth) setMenuOpen(false);
  }, [width])
  function menuInvert(){
    setMenuOpen(!menuOpen);
  }
  return (
    <div>
        <div className="flex justify-between mt-4  mx-6 md:mx-20 xl:mx-43">
        <div className="flex items-center justify-center">
            <img src="logo.png" className="" id="logo"></img>
            <p className="ms-2 boldfont">IELTS Institute</p>
        </div>
        {width >= mobileWidth && <div className="flex items-center justify-center gap-5 mainfont">
            <p onClick={() => document.getElementById("home").scrollIntoView({ behavior: "smooth" })} className="navbarLinks">Home</p>
            <p onClick={() => document.getElementById("features").scrollIntoView({ behavior: "smooth" })}  className="navbarLinks">Courses</p>
            <p onClick={() => document.getElementById("reviews").scrollIntoView({ behavior: "smooth" })}  className="navbarLinks">Results</p>
            <p onClick={() => document.getElementById("footer").scrollIntoView({ behavior: "smooth" })}  className="navbarLinks">Contact</p>
            <p className="whiteTextBlackBorder">Book a Free Demo</p>
        </div>}
            {width < mobileWidth && <div>
                <p className="blackTextWhiteBorder" onClick={menuInvert}>Menu</p>
            </div>
            }
        </div>
        <div className="mx-10 xl:mx-43">
            {menuOpen && <div>
                <p onClick={() => document.getElementById("home").scrollIntoView({ behavior: "smooth" })} className="navbarLinks mb-2">Home</p>
                <p onClick={() => document.getElementById("features").scrollIntoView({ behavior: "smooth" })}  className="navbarLinks mb-2">Courses</p>
                <p onClick={() => document.getElementById("reviews").scrollIntoView({ behavior: "smooth" })}  className="navbarLinks mb-2">Results</p>
                <p onClick={() => document.getElementById("footer").scrollIntoView({ behavior: "smooth" })}  className="navbarLinks mb-2">Contact</p>
                <p className="whiteTextBlackBorder">Book a Free Demo</p>
            </div>}
        </div>
    </div>
  );
}
