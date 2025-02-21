import Quote from '../Models/Quote.js'
import QuotesTable from '../Components/QuotesTable.jsx'
import AddQuoteModal from '../Components/AddQuoteModal.jsx';


function Quotes()
{



    return(
        <>
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
            <header>
                <h1>This is the quotes page</h1>
            </header>
            
            <QuotesTable/>
        </>
        
    );

}

export default Quotes