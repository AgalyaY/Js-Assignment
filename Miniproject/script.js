
//Make sure DOM is ready
document.addEventListener("DOMContentLoaded",function(){
  
// DATA
// 1. dataset of quotes and their authors
  const quotesPool = [["Less is More", "Ludwig Mies Van Der Rohe"],
                ["God is in the Details", "Ludwig Mies Van Der Rohe"],
                ["The secret to life is to love who you are - warts and all.", "David DeNotaris"],
                ["Look for opportunities in every change in your life.", "Meir Liraz"],
                ["There are 360 degrees, so why stick to one?", "Zaha Hadid"],
                ["Form ever follows function", "Louis Sullivan"],
                ["The light heart lives long.", "Irish Proverb"],
                ["Life is a question and how we live it is our answer.", "Gary Keller"],
                ["An idea is salvation by imagination", "Frank Lloyd Wright"],
                ["When I'm working on a problem, I never think about beauty. But when I've finished, if the solution is not beautiful I know it's wrong", "Buckminster Fuller"],
                ["Accept life as it is. Then work to make it the way you want it to be. ", "Cindy Francis"],
                ["People without self-awareness go through life simply reacting out of habit.", "John C. Allen, Emotional Intelligence"],
                ["To create, one must first question everything", "Eileen Gray"],
                ["The more you love the least deserving on your list, the more your life will change.", "Mike Dooley"],
                ["You’ve got to bumble forward into the unknown", "Frank Gehry"]];
  let oldQuoteIndex;
 //Generate a random number based on argument's length
  function generateNumber(dataPool) {
    return Math.floor(Math.random() * dataPool.length);
  }

//1. Get random number from generateNumber()
//2. check random number to make sure it's not same as last one
//3. Use random number to get new quote from array
//4. Display the quote
  function generateNewQuote() {
    let index = generateNumber(quotesPool);
//While loop so no same quote is generated in a row
    while (index === oldQuoteIndex) {
      index = generateNumber(quotesPool);
    }
    let newQuote = quotesPool[index];
    let quote = document.getElementById("quote");
    let author = document.getElementById("author");
//Show new quote and author on page
    quote.innerHTML = newQuote[0];
    author.innerHTML = newQuote[1];
//update index checker
    oldQuoteIndex = index;
  }

//1. Get random number from generateNumber()
//2. check random number to make sure it's not same as last one
//3. Use random number to get new color scheme from array
//4. Update page with new color scheme
  function generateNewColor() {
    let index = generateNumber(colorsPool);
// While loop so no same color scheme is generated in a row
  
    let randomQuoteButton = document.querySelectorAll(".btn")[0];
    let background = document.body;
    let text = document.querySelector(".container");
    let border = document.querySelector(".border");
    let randomQuoteBorder = document.querySelectorAll(".border-smaller")[0];
  }

//Show new quote and change color scheme on 'Random Quote' button click
  function onQuoteButtonClick() {
    let randomQuoteButton = document.querySelector("#random-quote");
    randomQuoteButton.addEventListener("click", function(){
      generateNewQuote();
    });
  }

  onQuoteButtonClick();

// Get the first quote on window load
  window.onload = function () {
    generateNewQuote();
  };
  
});
