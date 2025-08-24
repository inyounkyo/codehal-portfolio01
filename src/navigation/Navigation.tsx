import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";


const Navigation = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
       
      </Route>
      
     
    </Routes>
  </BrowserRouter>
);

export default Navigation;
