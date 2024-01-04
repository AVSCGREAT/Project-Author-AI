function uploadEbook() {
    const ebookFileInput = document.getElementById('ebookFile');
    const ebookList = document.getElementById('ebookList');

    const ebookName = ebookFileInput.files[0].name;
    const listItem = document.createElement('li');
    listItem.className = 'ebook-item';
    listItem.innerHTML = `
        <span>${ebookName}</span>
        <button class="download-btn" onclick="downloadEbook('${ebookName}')">Download</button>
    `;

    // Simulate storing the uploaded ebook in local storage
    const storedEbooks = JSON.parse(localStorage.getItem('ebooks')) || [];
    storedEbooks.push(ebookName);
    localStorage.setItem('ebooks', JSON.stringify(storedEbooks));

    ebookList.appendChild(listItem);

    // Clear the file input
    ebookFileInput.value = '';
}

function downloadEbook(ebookName) {
    // Simulate downloading from a server
    alert(`Downloading ${ebookName}`);
}

// Display existing ebooks from local storage
document.addEventListener('DOMContentLoaded', function () {
    const storedEbooks = JSON.parse(localStorage.getItem('ebooks')) || [];
    const ebookList = document.getElementById('ebookList');

    storedEbooks.forEach(ebookName => {
        const listItem = document.createElement('li');
        listItem.className = 'ebook-item';
        listItem.innerHTML = `
            <span>${ebookName}</span>
            <button class="download-btn" onclick="downloadEbook('${ebookName}')">Download</button>
        `;
        ebookList.appendChild(listItem);
    });
});
