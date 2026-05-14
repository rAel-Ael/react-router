import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Product from "./components/Product";
import PageLinks from "./components/PageLinks";


function App() {
    return (
        <BrowserRouter>
            <Routes>

                    
                <Route path="" element={<PageLinks />}>
                    <Route path="home" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="product" element={<Product />} />
                </Route>
                

            </Routes>
        </BrowserRouter>
    );
}

export default App;

