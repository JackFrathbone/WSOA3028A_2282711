document.addEventListener("DOMContentLoaded", () => {

    const quote = document.querySelector("blockquote p");
    const cite = document.querySelector("blockquote h3");

    async function updateQuote() {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        if (response.ok) {
            quote.textContent = data.content;
            cite.textContent = data.author;
        } else {
            quote.textContent = "Error";
            console.log(data);
        }
    }

    updateQuote();
});