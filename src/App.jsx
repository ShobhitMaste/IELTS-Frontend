import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/navbar";
import Review from "./components/Review";

export default function App() {
  return (
    <div>
      <div className="header w-full">
        <Navbar />
        <hr className="mt-5" />
      </div>
      <Hero/>
      <hr className="mt-14"/>
      <Features/>
      <hr className="mt-14"/>
      <Review/>
      <hr className="mt-14"/>
      <Footer/>
    </div>
  );
}
