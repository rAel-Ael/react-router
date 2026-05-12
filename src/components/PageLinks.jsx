import { Link, Outlet } from "react-router";

function PageLinks () {
    return <div>
        <nav>
        <Link to = "/Home">Home</Link> 
        <Link to = "/About">About</Link>  
        <Link to="/Product">Prodotti</Link> 
        </nav>
        <Outlet/>
    </div>
    
    
    
}
export default PageLinks;