import NavBar from "./Components/NavBar"
import Footer from "./Components/Footer"
import {Outlet} from "react-router-dom"

{/*Acts as parent to rest of routes; all pages will be children to Layout*/}
function Layout() 
{
    return(
        <>
            <NavBar/>
            <main>
                {/*{/*Renders all child routes */}
                <Outlet/> 
            </main>
            <Footer/>
        </>
    );
}


export default Layout