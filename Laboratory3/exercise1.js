
const button = document.getElementById("button");

button.addEventListener("click", (event) => {
    console.log("Hello!");
    event.stopPropagation();
}, { once: true, capture:true });

const parent = document.getElementById("parent");

parent.addEventListener("click", (event) => {
    console.log("Hi parent!");
});