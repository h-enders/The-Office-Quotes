import '../Styles/NavBar.css'
import DunderMifflinLogo from '../assets/DunderMifflinLogo.png'
import {Link} from "react-router-dom"

function NavBar()
{
    const nav1 = "Home";
    const nav2 = "Quotes List";
    const nav3 = "About";

    return(
        <>
            <link rel="stylesheet" href="styles.css"/>

            <header>
                <div className="container">
                    
                    <nav>
                        <ul className="nav-links">
                            <li><Link to="/"><img src={DunderMifflinLogo} width="100px"/></Link></li>
                            <li><Link to="/">{nav1}</Link></li>
                            <li><Link to="/quotes">{nav2}</Link></li>
                            <li><Link to="/about">{nav3}</Link></li>
                            <li className="nav-body">Limitless Paper in a Paperless World   </li>
                            
                        </ul>
                    </nav>
                                     
                </div>
            </header>
        </>
    );

}

export default NavBar