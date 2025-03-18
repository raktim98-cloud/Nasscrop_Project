import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Page/Home";
import About from "./Page/About";
import Praicing from "./Page/Pricing";
import Contact from "./Page/Contact";
import Layout from "./Components/layout";
import Pricing from "./Page/Pricing";
import Product from "./Page/Product";




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>} > 
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="contact" element={<Contact />} />
        <Route path="product" element={<Product />} />
      
      </Route>
      
      
    </Routes>
  </BrowserRouter>
  )
}

export default App