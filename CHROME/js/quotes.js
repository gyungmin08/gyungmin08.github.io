const quotes = [
        {
                quote: "Look again at that dot. That's here. That's home. That's us.",
                author: "Carl Sagan",
        },
        {
                quote: "Every one of us is, in the cosmic perspective, precious.",
                author: "Carl Sagan",
        },
        {
                quote: "Somewhere, something incredible is waiting to be known.",
                author: "Carl Sagan",
        },
        {
                quote: "A good plan today is better than a perfect plan tomorrow. Don't wait for an inspired ending to come to mind. Work your way to the ending and see what comes up.",
                author: "Andy Weir",
        },
        {
                quote: "I guess you could call it a 'failure', but I prefer the term 'learning experience'.",
                author: "Andy Weir",
        },
        {
                quote: "I'm telling you, people. Everyday we wake up is another blessing. Follow your dreams and don't let anyone stop you. Never say never.",
                author: "Justin Bieber",
        },
        {
                quote: "Feeling beautiful has nothing to do with what you look like, I promise.",
                author: "Emma Watson",
        },
        {
                quote: "I don’t want other people to decide who I am. I want to decide that for myself.",
                author: "Emma Watson",
        },
        {
                quote: "If not me, who? If not now, when?",
                author: "Emma Watson",
        },
        {
                quote: "But don’t forget to keep going. You still have a long way to go. Even though you have to go through it all alone. But don’t too worry. You will find some friends on your way.",
                author: "AKMU"
        },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;