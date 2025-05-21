document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("snippet-form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const title = document.getElementById("title").value;
        const language = document.getElementById("language").value;
        const description = document.getElementById("description").value;
        const snippet = document.getElementById("snippet").ariaValueText;

        const code = {
            title,
            language,
            description,
            snippet,
        };

        const existing =JSON.parse(localStorage.getItem("snippets")) || [];
        existing.push(code);
        localStorage.setItem("snippets", JSON.stringify(existing));

        form.reset();
        renderSnippets(existing);
    })

    function renderSnippets(snippets){
        const container = document.getElementById("snippet-container");
        container.innerHTML = "";

        snippets.forEach((snippet, index) => {
            const snippetCard =document.createElement("div");
            snippetCard.classList.add("snippet-card");

            snippetCard.innerHTML = `
            <h3>${snippet.title}</h3>
            <p><strong>Language:</strong> ${snippet.language}</p>
            <p>${snippet.description}</p>
            <pre><code>${snippet.code}</code></pre>
            `;

            container.appendChild(snippetCard);
        })

    }
    const savedSnippets = JSON.parse(localStorage.getItem("snippets")) || [];
    renderSnippets(savedSnippets);


})