import twitterIcon from '../components/twitter.svg';
import {useState} from 'react'
import datQuotes from '../data/quotes.json'

let quo = datQuotes

const QuoteBox = () => {

    const defaultcolor = "#" + Math.floor(Math.random() * 16777215).toString(16)
    const erikaquote = "Learning React and Javascript is amazing!"
    const erika = "Erika Adriana García"

    const [quote, setQuote] = useState(`${erikaquote}`)
    const [author, setAuthor] = useState(`${erika}`);
    const [myColor, setMyColor] = useState(`${defaultcolor}`);

    const handleClick = () => {
    let randomNum = Math.floor(Math.random() * quo.quotes.length);
    let randomcolory = "#" + Math.floor(Math.random() * 16777215).toString(16)
    let randomQuote = quo.quotes[randomNum];
   
    setQuote(randomQuote.quote);
    setAuthor(randomQuote.author);
    setMyColor(randomcolory)
}

    return (
        <div className="bigbox" style={{backgroundColor: `${myColor}` }} >
            <div className="box">
                <h3> {quote} </h3>
                <h5> {author} </h5>
                <div className="finalb">
                    <div className="social-media" >
                        <a href={`https://twitter.com/intent/tweet?text=${{quote}}`} target="_blank" rel="noopener noreferrer">
                            <span><img src={twitterIcon} alt="" /></span>
                        </a>
                    </div>
                    <button className="button" onClick={handleClick} style={{backgroundColor: `${myColor}` }}> Get quote </button>
                </div> 
            </div>
        </div>
    )
}

export default QuoteBox