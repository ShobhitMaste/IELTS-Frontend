import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-between mt-4">
      <div className="flex items-center justify-center">
        <img src="logo.png" className="ms-5" id="logo"></img>
        <p className="ms-2 boldfont">IELTS Institute</p>
      </div>
      <div className="flex items-center justify-center gap-5 me-5 mainfont">
        <p className="navbarLinks">Home</p>
        <p className="navbarLinks">Courses</p>
        <p className="navbarLinks">Results</p>
        <p className="navbarLinks">Contact</p>
        <p className="whiteTextBlackBorder">Book a Free Demo</p>
      </div>
    </div>
  );
}
