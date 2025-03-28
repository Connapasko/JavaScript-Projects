
document.addEventListener('DOMContentLoaded',() => {
    const form = document.getElementById('entryForm');
    const entryText = document.getElementById('entryText');
    const entriesList = document.getElementById('entriesList');

    async function loadEntries() {
        const res = await fetch('/entries')
        const data = await res.json();

    entriesList.innerHTML = '';
    data.forEach(entry => {
        const li = document.createElement('li');
        li.textContent = `[${new Date(entry.date).toLocaleString()}] ${entry.text}`;
        entriesList.appendChild(li);
    });
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const text = entryText.value.trim();
    if (!text) return;

    const res = await fetch('/add-entry', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ text })
    });

    if (res.ok) {
        entryText.value = '';
        loadEntries();
    }
});

loadEntries();

});

        
        
        

       
