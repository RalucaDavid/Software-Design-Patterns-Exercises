function fetchVisitCount() {
    fetch('/counter')
        .then(response => response.json())
        .then(data => {
            document.getElementById('visitCount').textContent = `Numărul de vizite: ${data.visitCount}`;
        })
        .catch(error => {
            console.error('Eroare:', error);
        });
}

window.onload = fetchVisitCount;