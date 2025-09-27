import React from "react";

export default function Review() {
  return (
    <div className="mx-43 mt-14">
      <h1 className="Heading mb-2">Student Results and Reviews</h1>
      <p className="paragraphs mb-8">
        Real experiences from learners who reached their target band scores.
      </p>
      <div className="grid grid-cols-3 gap-5">
        <div className="review shadow-md/6">
          <p className="quote">
            "The mock tests and speaking feedback were spot on. I knew exactly
            where to improve."
          </p>
          <p className="font-medium">Ananya S.</p>
          <p className="paragraphs">Band 7.5</p>
        </div>
        <div className="review shadow-md/6">
          <p className="quote">
            “AI band score insights saved me weeks. The study plan kept me
            consistent.”
          </p>
          <p className="font-medium">Rahul M.</p>
          <p className="paragraphs">Band 7.0</p>
        </div>
        <div className="review shadow-md/6">
          <p className="quote">
            “Clear strategies, great mentors, and realistic practice. Highly
            recommended!”
          </p>
          <p className="font-medium">Fatima K.</p>
          <p className="paragraphs">Band 8.0</p>
        </div>
      </div>
    </div>
  );
}
