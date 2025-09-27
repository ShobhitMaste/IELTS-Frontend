import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-between mt-3">
      <div className="flex place-content-center">
        <img src="logo.png" className="ms-4" id="logo"></img>
        <p className="ms-2 boldfont">IELTS Institute</p>
      </div>
      <div className="flex justify-center gap-5 me-4 mainfont">
        <p>Home</p>
        <p>Courses</p>
        <p>Results</p>
        <p>Contact</p>
        <p>Book a Free Demo</p>
      </div>
    </div>
  );
}
