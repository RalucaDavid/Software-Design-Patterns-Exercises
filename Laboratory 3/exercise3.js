function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Error retrieving data');
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            document.getElementById('jsonContent').textContent = JSON.stringify(data, null, 2);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

fetchData();