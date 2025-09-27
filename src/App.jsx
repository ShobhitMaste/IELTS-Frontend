import Hero from "./components/Hero";
import Navbar from "./components/navbar";

export default function App() {
  return (
    <div>
      <div className="header w-full">
        <Navbar />
        <hr className="mt-5" />
      </div>
      <Hero/>
      <hr className="mt-14"/>
    </div>
  );
}
