const myCustomEvent = new CustomEvent("myCustomEvent", {
    detail: { message: "Hello!" }
});

const outputDiv = document.getElementById("output");

outputDiv.addEventListener("myCustomEvent", (event) => {
    console.log(event.detail.message);
    outputDiv.textContent = event.detail.message;
}, { once: true });

const button = document.getElementById("triggerButton");
button.addEventListener("click", () => {
    outputDiv.dispatchEvent(myCustomEvent);
});