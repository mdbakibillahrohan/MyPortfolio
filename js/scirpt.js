

async function getQuoteText (){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1c64caf002mshe373f2fcf5ed3b9p1e9aedjsnb5f2aba1153d',
            'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
        }
    };
    
    let response = await fetch('https://quotes15.p.rapidapi.com/quotes/random/', options);
    response = await response.json();
    
    return response.content;

}

const QuoteIntegration = (quote)=>{
    let QuoteText = document.getElementById("quoteText");
    QuoteText.innerText = quote;
}

async function showQuoteText(){
    let text = await getQuoteText();
    QuoteIntegration(text);
}
// Get quote options 
  let QuoteBtn = document.getElementById('getQuoteBtn');
  QuoteBtn.addEventListener("click", showQuoteText);
//   showQuoteText();