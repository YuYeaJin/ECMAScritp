// 기본적인 프로그램의 흐름 -> 동기 방식
// console.log("command1");
// console.log("command2");
// console.log("command3");

// timer 함수
// setTimeout(callback, delay)
function timerTest() {
    console.log("2초 후에 인사합니다.");
    setTimeout(() => {
        console.log("안녕하세요!");
    }, 2000);
    console.log("End of function");
}
// timerTest();

function intervalTest() {
    //interval : 특정 시간 간격으로 호출되는 함수
    let count = 10;
    console.log("10초 후 타이머가 종료됩니다.")
    console.log(count);
    let intervalId = setInterval(() => {
        console.log(--count);
        if (count < 0) {
            console.log("타이머를 종료합니다.");
            clearInterval(intervalId);
        }
    }, 1000);
    console.log("End of function");
}
intervalTest();