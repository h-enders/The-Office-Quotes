import './Home.css'
import DunderMifflinLogo from '/DunderMifflinLogo.png'
import {Link} from "react-router-dom"

function Home()
{
    
    return (
    <>
        <div>
            <a href="https://en.wikipedia.org/wiki/Dunder_Mifflin" target="_blank">
                <img src={DunderMifflinLogo} className="logo" alt="Dunder Mifflin logo" 
                    width="550"
                />
            </a>
        </div>
        <h1><em>The Office</em> Quotes Database</h1>
        <div style={{ position: "relative", width: "100%", paddingBottom: "56.25%" }}>
            <iframe
                style={{ position: "absolute", width: "100%", height: "100%" }}
                src="https://getyarn.io/yarn-clip/f32c7e55-16af-4b3e-b7d0-ff8a3239e8fd/embed?autoplay=false&responsive=true"
                frameBorder="0"
            ></iframe>
        </div>
    </>
    );

}

export default Home