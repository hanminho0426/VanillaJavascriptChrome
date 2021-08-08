const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
// padStart 조건에 앞 쪽에 문자를 채우는 함수
// endStart 조건에 뒷 쪽에 문자를 채우는 함수                       

// setInterval(sayHello, 5000); //run function every 5000ms
getClock(); //여기서 즉시호출하고 지워버리면 1초뒤에 화면에 나타난다.
setInterval(getClock, 1000); //반복실행 함수 매 초마다 getClock을 다시 실행 
                            //위에 한번 실행 시켰기 때문에 바로 보인다.



