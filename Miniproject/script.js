/*var t = prompt("Enter a time in the below format:)","00:00:02:849");
var	clsStopwatch = function() {
    // Private vars
    var	startAt	= 0;	// Time of last start / resume. (0 if not running)
    var	lapTime	= 0;	// Time on the clock when last stopped in milliseconds

    var	now	= function() {
            return (new Date()).getTime(); 
        }; 

    // Public methods
    // Start or resume
    this.start = function() {
            startAt	= startAt ? startAt : now();
        };

    // Stop or pause
    this.stop = function() {
            // If running, update elapsed time otherwise keep it
            lapTime	= startAt ? lapTime + now() - startAt : lapTime;
            startAt	= 0; // Paused
        };

    // Reset
    this.reset = function() {
            lapTime = startAt = 0;
        };

    // Duration
    this.time = function() {
            return lapTime + (startAt ? now() - startAt : 0); 
        };
};

var x = new clsStopwatch();
var $time;
var clocktimer;

function pad(num, size) {
var s = "0000" + num;
return s.substr(s.length - size);
}

function formatTime(time) {
var h = m = s = ms = 0;
var newTime = '';

h = Math.floor( time / (60 * 60 * 1000) );
time = time % (60 * 60 * 1000);
m = Math.floor( time / (60 * 1000) );
time = time % (60 * 1000);
s = Math.floor( time / 1000 );
ms = time % 1000;

newTime = pad(h, 2) + ':' + pad(m, 2) + ':' + pad(s, 2) + ':' + pad(ms, 3);
return newTime;
}

function show() {
$time = document.getElementById('time');
update();
}

function update() {
$time.innerHTML = formatTime(x.time());
}

function start() {
clocktimer = setInterval("update()", 1);
x.start();
}

function stop() {
x.stop();
clearInterval(clocktimer);
}

function reset() {
stop();
x.reset();
update();
}*/


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

// VARIABLES
  let oldQuoteIndex;
  let oldColorIndex;

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

//update index checker
    oldColorIndex = index;
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
