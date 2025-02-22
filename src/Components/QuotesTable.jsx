import '../Styles/QuotesTable.css'
import Quote from '../Models/Quote'         // Import Quote class
import {quotes} from '../Models/Quote'      // Import instance of quotes list
import React, {useState} from 'react'

function QuotesTable()
{
    // const quote1 = {...quotes[0]};          // Creates shallow copy of quotes[0], copying top-level properties

    for (let i = 0; i< quotes.length; i++)
    {
        // (Needs implementing) Include link if quote has associated clip
        if (quotes[i].embed == true)
        {
            quotes[i].embed = "Watch here";
        }
        // Use dash to indicate quote has no associated clip
        else
        {
            quotes[i].embed = "-";
        }
    }

    const [quoteData, setQuotes] = useState(quotes);

    // Delete quote with matching quote ID
    const deleteQuote = (id) => {
        console.log('Delete button clicked for Quote: ', id);
        const quoteBeingDeleted = quoteData.find(quote => quote.quoteID === id);
        console.log('Deleted quote: ', quoteBeingDeleted);
        // Filter list to exclude deleted quote
        const updatedQuotesList = quoteData.filter(quote => quote.quoteID !== id);
        console.log('Updated quotes list:', updatedQuotesList);
        setQuotes(updatedQuotesList);
        console.log('Number of quotes: ', updatedQuotesList.length);
    };
    

    return(
        <>
            {/*If quotes list has data, display it!*/}
            {quoteData.length > 0 ? (
                <table className="w3-table-all w3-centerd w3-hoverable">
                    <thead>
                        <tr className="w3-light-grey">
                            <th>Quote ID</th>
                            <th>Speaker</th>
                            <th>Quote</th>
                            <th>Season</th>
                            <th>Episode</th>
                            <th>Clip</th>
                            <th colSpan="2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {quoteData.map(quote => (
                            <tr key={quote.quoteID}>
                                <td>{quote.quoteID}</td>
                                <td>{quote.speaker}</td>
                                <td>"{quote.quoteText}"</td>
                                <td>{quote.season}</td>
                                <td>{quote.episode}</td>
                                <td>{quote.embed}</td>
                                <td>
                                    <button onClick={() => deleteQuote(quote.quoteID)} className="w3-button w3-black">
                                        Delete Quote
                                    </button>
                                </td>
                                <td>
                                    <button className="w3-button w3-black">
                                        Update Quote
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                // If list empty, don't diplay tables; display message indicating empty list
                <h5>Quotes list is empty!</h5>
            )}
        </>
    );
}

export default QuotesTable