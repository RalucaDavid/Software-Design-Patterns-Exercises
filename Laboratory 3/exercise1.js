const button = document.getElementById("button");

button.addEventListener("click", (event) => {
    console.log("Hello!");
}, { once: true, capture: true });