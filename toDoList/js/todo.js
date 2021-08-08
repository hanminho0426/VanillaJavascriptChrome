const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){ //localstorage에 string타입으로 저장
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));  //JSON.stringify(toDos) 테이더를 string타입으로 변경해주는 기능
}
  

function deleteToDo(event) { //삭제메소드
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}


function paintToDo(newTodo) { //paintToDo는 newTodo의 내용을 받는다.
  const li = document.createElement("li"); //li 태그 추가
  li.id = newTodo.id;
  const span = document.createElement("span"); //span 태그 추가 
  span.innerText = newTodo.text;//입력한 내용이 span에 오게 
  const button = document.createElement("button");
  button.innerText = "❌"; // 이모지 단축키 -> 윈도우 + .
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}
 

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;//input의 현재 value를 새로운 변수에 복사하는 것;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}


//JSON.stringify -> array(배열)을 가지고 단순한 String으로 바꿀수 있다.
//JSON.parse -> 단순한 String을 가지고 JS가 이해할 수 있는 살아있는 실제로 무언가 할 수 있는 array(js object)로 만들어준다.

//#7.4 Loading To Dos part One (11:19) //07:24;