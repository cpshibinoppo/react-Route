import { BrowserRouter, Link } from "react-router-dom";
import Root from "./routes/root";
import Navbar from "./layout/navbar/Navbar";
import Footer from "./layout/footer/Footer";

import './server'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Root />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
