import { BrowserRouter, Routes, Route } from "react-router";
import About from "./components/About";
import Home from "./components/Home";
import Product from "./components/Product";
import PageLinks from "./components/PageLinks";


function App() {
    return (
        <BrowserRouter>
            <Routes path="" Component ={PageLinks}>

                    <Route path="Home" Component={Home}/>
                    <Route path= "About" Component={About} />
                    <Route path="Contacts" Component={Product} />
                

            </Routes>
        </BrowserRouter>
    );
}

export default App;

