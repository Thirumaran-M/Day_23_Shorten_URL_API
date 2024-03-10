document.getElementById("submitBtn").addEventListener("click", shortenUrl);

async function shortenUrl() {
    var longUrl = document.getElementById("longUrlInput").value;
    if (!longUrl.trim()) {
        alert("Please enter a valid URL.");
        return;
    }

    const response = await fetch('https://cleanuri.com/api/v1/shorten', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'url=' + encodeURIComponent(longUrl)
    });

    const data = await response.json();
    console.log(data);
    document.getElementById("shortUrlOutput").value = data.result_url;
}
