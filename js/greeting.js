const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);
}

function paintGreetings(username){
    const day = new Date();
    const hr = day.getHours();
    if(hr>="5"&&hr<"12") {
        greeting.innerText = `Good morning, ${username}!`;
    }
    else if(hr>="12"&&hr<"18") {
        greeting.innerText = `Good afternoon, ${username}!`;
    }
    else if(hr>="18"&&hr<"22") {
        greeting.innerText = `Good evening, ${username}!`;
    }
    else if(hr>="22"||hr<="4") {
        greeting.innerText = `Good night, ${username}!`;
    }
    else {
        greeting.innerText = `Hello,  ${username}!`;
    }
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    //show the greetings
    paintGreetings(savedUsername);
}