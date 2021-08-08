const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //String만 들어간 변수에는 변수이름을 대문자사용
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault(); //submit을 실행했을 때 새로고침을 막는것
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`; // "안녕 + username" 을 보관법을 사용해 간결하게 바꿀수 있다.
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY); // function에 ()추가하는건 '즉시' 실행한다는 뜻 

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername); //값이 있을 경우 새로고침해도 이 값이 유지
}


