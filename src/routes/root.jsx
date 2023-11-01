import { Route, Routes } from "react-router-dom";
import Home from "../container/Home";
import About from "../container/About";
import VanList from "../container/VanList";
// import Van from "../container/Van";

export default function Root(){
    return (
        <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<VanList />} />
          {/* <Route path="/vans/show" element={<Van />} /> */}
        </Routes>
        </>
    )
}