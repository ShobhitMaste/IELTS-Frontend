import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#f5f5f5] pt-14 px-6 md:px-20 xl:px-43 footer" id="footer">
      <div className="grid-rows-1 md:grid-cols-3 grid   ">
        <div>
          <h3 className="font-medium mb-4">IELTS Institute</h3>
          <p className="paragraphs">
            Expert-led IELTS coaching with modern tools and proven strategies.
          </p>
        </div>
        <div>
          <h3 className="font-medium mb-4 mt-5 md:mt-0">Links</h3>
          <p className="paragraphs mb-2 navbarLinks">Home</p>
          <p className="paragraphs mb-2 navbarLinks">Programs</p>
          <p className="paragraphs mb-2 navbarLinks">Results</p>
        </div>
        <div>
          <h3 className="font-medium mb-4 mt-3">Contacts</h3>
          <p className="paragraphs mb-2">
            Email: englishlearn@ielts-institute.com
          </p>
          <p className="paragraphs mb-2">Phone: +91 91284 19283</p>
          <p className="paragraphs mb-2">Address: 132 Kelambakkam, Chennai</p>
        </div>
      </div>
      <hr className="mt-10" />
      <div className="flex justify-between items-center mt-6 pb-6">
        <p className="paragraphs text-[12px]">
          © 2025 IELTS Institute. All rights reserved.
        </p>
        <div className="flex gap-3">
          <p className="navbarLinks text-[12px]">Privacy</p>
          <p className="navbarLinks text-[12px]">Terms</p>
        </div>
      </div>
    </div>
  );
}
