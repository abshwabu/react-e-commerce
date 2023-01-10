import "./App.css";
import Header from './components/header/Header'
import Hero from "./components/hero/Hero";
import Slider from "./components/slider/Slider";
import Virtual from "./components/virtual/Virtual";
import Product from "./components/products/Product";
import Testimonial from "./components/testimonial/Testimonial";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Slider/>
      <Virtual/>
      <Product/> 
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;
