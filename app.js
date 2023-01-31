//document.body.innerHTML += "Hello JavaScript!";
//alert("Hello Dat.js");
console.log("Hello Dat.js");
console.log("Hi Students!");
console.log("This is your first JavaScript App 🎉");

function Sayhello() {
  document.querySelector("h3").textContent =
    "Hej " + document.querySelector("input").value;
}
document.querySelector("button").addEventListener("click", Sayhello);

function Sayhello() {
  document.querySelector("h5").textContent =
    document.querySelector("input").value +
    ", det er faktisk min ynglingsfarve";
}
document.querySelector("button").addEventListener("click", Sayhello);
