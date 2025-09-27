import React from "react";

export default function Hero() {
  return (
    <div className="md:grid md:grid-cols-2 mt-33  mx-6 md:mx-20 xl:mx-43 gap-10" id="home">
      <div className="flex justify-center items-start flex-col">
        <h1 className="heroHeading mb-5">
          Ace Your IELTS with Expert Guidance and Smart Practice
        </h1>
        <p className="paragraphs mb-5">
          Join thousands of successful students. Structured lessons, real exam
          strategies, and AI-powered feedback to boost your band score.
        </p>
        <div className="flex gap-5">
          <button className="whiteTextBlackBorder">Start Your journey</button>
          <button className="blackTextGreyBorder">See Our Programs</button>
        </div>
      </div>
      <img src="classroom.png" className="classroom mt-10 md:mt-0" />
    </div>
  );
}
