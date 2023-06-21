


      $( function() {
        $( "#draggable" ).draggable();
      } );
    
      $( function() {
        $( "#datepicker" ).datepicker();
      } );
    
    
    
    
        window.onload = init;
    
        function init() {
          generateQuote();
          document.getElementById("nextQuoteBtn").addEventListener("click", generateQuote);
        }
    
        function generateQuote() {
          let quoteSize = QUOTEBANK.length;
          let randomIndex = Math.floor(Math.random() * quoteSize);
    
          let randomQuoteData = QUOTEBANK[randomIndex];
          console.log(randomQuoteData);
    
    
    
    
    let twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22People%20often%20say%20that%20motivation%20doesn%E2%80%99t%20last.%20Well%2C%20neither%20does%20bathing.%20%20That%E2%80%99s%20why%20we%20recommend%20it%20daily.%22%20Zig%20Ziglar"
    
      document.getElementById("tweet-quote").href = twitterLink;    
    document.getElementById("text").innerText = randomQuoteData.quote;
          document.getElementById("author").innerText = randomQuoteData.author;
        }
    