const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    console.log(h1.style.color);
    h1.classList.toggle("clicked");
    console.log("just clicked!");
    console.log(h1.style.color);
}

h1.addEventListener("click",handleTitleClick);