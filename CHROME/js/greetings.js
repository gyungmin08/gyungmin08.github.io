const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const greeting = document.querySelector("#greeting");
const USERNAME_KEY = "username";

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
        event.preventDefault();
        const username = loginInput.value;
        localStorage.setItem(USERNAME_KEY, username);
        loginForm.classList.add(HIDDEN_CLASSNAME);
        paintGreetings(username);
}

function paintGreetings(username) {
        greeting.innerText = `Hello, ${username}!`;
        greeting.classList.remove(HIDDEN_CLASSNAME);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null) {
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        loginForm.addEventListener("submit", onLoginSubmit);
}
else {
        paintGreetings(saveUsername);
}