
class Quote 
{
    quoteID;        // unique identifier for each quote
    speaker;        // person to whom the quote is attributed/said
    quoteText;      // content of the quote; the actual words spoken
    season;         // season of the show in which quote said
    episode;        // episode of the show in which quote said
    embed;          // bool that indicates existence of clip containing quote

    constructor(quoteID, speaker, quoteText, season = null, episode = null, embed = false) 
    {
        this.quoteID = quoteID;
        this.speaker = speaker;
        this.quoteText = quoteText;
        this.season = season;
        this.episode = episode;
        this.embed = embed;
    }
}

let quote1 = new Quote(1, "Michael Scott", "Boom! Roasted.", 5, 14);
const quotes = [quote1];

export default Quote    // Export Quote class
export {quotes}         // Export instance of quotes list
