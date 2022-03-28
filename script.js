const quotes = [
    `I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.`,
    `Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.`,
    `You've gotta dance like there's nobody watching,
    Love like you'll never be hurt,
    Sing like there's nobody listening,
    And live like it's heaven on earth.`,
    `I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.`,
    `Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that`
];

let words = [];
let wordIndex = 0;

let startTime = Date.now();

const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');

document.getElementById('start').addEventListener('click', () => {

const quoteIndex = Math.floor(Math.random() * quotes.length);
const quote = quotes[quoteIndex];

words = quote.split(' ');

const spanWords = words.map(function(word) {return `<span>${word} </span>`});
quoteElement.innerHTML = spanWords.join(' ');
//highlight the word
quoteElement.childNodes[0].className = 'highlight';
//clear any prior messages
messageElement.innerText = '';
//setup the textbox
//clear the textbox
typedValueElement.innerText = '';
//set focus
typedValueElement.focus();
//set event handler
//start the timer
startTime = new Date.getTime();
});

typedValueElement.addEventListener('input', () => {
    const currentWord = words[wordIndex];
    const typedValue = typedValueElement.value;

    if (typedValue === currentWord && wordIndex === words.length-1) {
        const elapsedTime = new Date().getTime() - startTime;
        const message = `Congratulations, you finished in ${elapsedTime/1000} seconds`;
        message.innerText = message;
    } else if (typedValue.endsWith() === ' ' && typedValue.trim() === currentWord) {
        typedValueElement.value = ' ';
        wordIndex++;
        wordIndex++;
        
    // reset the class name for all elements in quote
    for (const wordElement of quoteElement.childNodes) {
      wordElement.className = '';
    }
    // highlight the new word
    quoteElement.childNodes[wordIndex].className = 'highlight';
  } else if (currentWord.startsWith(typedValue)) {
    // currently correct
    // highlight the next word
    typedValueElement.className = '';
  } else {
    // error state
    typedValueElement.className = 'error';
  
    }
})

