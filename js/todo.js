const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function checkToDo(event) {
    //classList로 toggle하는걸로 바꾸기
    //껐다 켜도 그대로 되어있는 상태로 바꾸기
    const li = event.target.parentElement;
    li.style.color= "rgba(98, 98, 98, 0.4)";
    li.style.textDecoration = "line-through";
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    //각 리스트를 구분하기 위해
    //각 리스트마다 id를 object의 id로 설정
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteToDo);
    span.addEventListener("dblclick",checkToDo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    //리스트를 하나 삭제할때 무엇을 삭제할지 분명하게 하기위해
    //리스트마다 id를 설정
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);
//todo리스트에 마우스 올라가야 x표시 나오게하기

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos!==null) {
    const parsedToDos = JSON.parse(savedToDos);
    //paintToDo에 각 요소(sotorage에 저장되어있는)를 하나씩 넘겨준다.
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
