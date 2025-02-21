import Quote from '../Models/Quote'         // Import Quote class
import {quotes} from '../Models/Quote'      // Import instance of quotes list

function QuotesTable()
{
    // const quote1 = {...quotes[0]};          // Creates shallow copy of quotes[0], copying top-level properties

    for (let i = 0; i< quotes.length; i++)
    {
        if (quotes[i].embed == true)
        {
            quotes[i].embed = "Watch here";
        }
        else
        {
            quotes[i].embed = "-";
        }
    }
    

    return(
        <>
            {quotes.length > 0 ? (
                <table className="w3-table-all w3-centerd w3-hoverable">
                    <thead>
                        <tr className="w3-light-grey">
                            <th>Quote ID</th>
                            <th>Speaker</th>
                            <th>Quote</th>
                            <th>Season</th>
                            <th>Episode</th>
                            <th>Clip</th>
                        </tr>
                    </thead>
                    <tbody>
                        {quotes.map((quote) => (
                            <tr key={quote.quoteID}>
                                <td>{quote.quoteID}</td>
                                <td>{quote.speaker}</td>
                                <td>"{quote.quoteText}"</td>
                                <td>{quote.season}</td>
                                <td>{quote.episode}</td>
                                <td>{quote.embed}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Quotes list is empty!</p>
            )}
        </>
    );
}

export default QuotesTable