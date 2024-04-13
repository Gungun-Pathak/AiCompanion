import { useState } from "react";
import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards";
import Cardsunion from "./Components/Cardsunion";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Carousel from "./Components/Carousel";
import Product from "./Pages/Product";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-white">
      <Navbar />
      <Hero />

      <Cardsunion />
      <div className="w-full h-24 bg-slate-900 pl-8 pt-5">
        <h1 className="text-4xl font-medium text-white ">Listed Products:</h1>
      </div>

      <Carousel />
      <Footer />
      <Product />
    </div>
  );
}

export default App;
