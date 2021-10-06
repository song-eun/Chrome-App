const quotes = [
    {
        quote: "To live is the rarest thing in the world. Most people exist, that is all.",
        author: "Oscar Wilde",
    },
    {
        quote: "You only live once, but if you do it right, once is enough",
        author: "Mae West",
    },
    {
        quote: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present",
        author: "Bill Keane",
    },
    {
        quote: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Thomas A. Edison",
    },
    {
        quote: "She was afraid of heights but she was much more afraid of never flying.",
        author: "Atticus Poetry, Love Her Wild",
    },
    {
        quote: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "If you can't explain it to a six year old, you don't understand it yourself.",
        author: "Albert Einstein",
    },
    {
        quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
        author: "Albert Einstein",
    },
    {
        quote: "Everything you can imagine is real.",
        author: "Pablo Picasso",
    },
    {
        quote: "Life isn't about finding yourself. Life is about creating yourself.",
        author: "George Bernard Shaw",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;