function fetchVisitCount() {
    fetch('/counter')
        .then(response => response.json())
        .then(data => {
            document.getElementById('visitCount').textContent = `Number of visits: ${data.visitCount}`;
        })
        .catch(error => {
            console.error('Eroare:', error);
        });
}

window.onload = fetchVisitCount;