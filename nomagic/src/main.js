require('../node_modules/bootstrap/dist/css/bootstrap.min.css')

let counter = 1;

let container = document.createElement("div")
container.classList.add("text-center", "p-3");

let msg = document.createElement("h1");
msg.classList.add("bg-primary", "text-white", "p-3");
msg.textContent = "Button not pressed";

let button = document.createElement("button");
button.textContent = "Press me";
button.classList.add("btn", "btn-secondary");
button.onclick = () => msg.textContent = `Button presses: ${counter++}`;

container.appendChild(msg);
container.appendChild(button);

let app = document.getElementById("app");
app.parentElement.replaceChild(container, app);