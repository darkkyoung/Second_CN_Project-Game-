/*
랜덤번호 지정
번호 입력, 시작 버튼 누름
if 번호 맞춤
    맞췄습니다
else
    Up, Down
리셋 버튼 누르면 게임 리셋
기회는 다섯번
범위 밖 숫자 입력 시 알림, 기회 깎임 x
입력한 숫자 재입력 시 알림, 기회 깎임 x
*/

let com_num = 0;
let playButton = document.getElementById("play_button");
let userInput = document.getElementById("user_input");
let resultArea = document.getElementById("result_area");
let resetButton = document.getElementById("reset_button");
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance_area");
let history = [];

playButton.addEventListener("click", play); //함수를 매개변수처럼 넘김
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function(){
    userInput.value=""
}) //다음 숫자 입력하려고 누르면 원 숫자 사라짐

function pickRandNum() {
    com_num = Math.floor(Math.random() * 100) + 1;
    console.log("정답", com_num);
}

function play() {
    let userValue = userInput.value;

    //chances가 감소하기 전, 이 숫자가 범위 내에 있는지 확인
    if (userValue > 100 || userValue < 1) {
        resultArea.textContent = "1과 100 사이 숫자를 입력해 주세요"
        return;
    }

    if (history.includes(userValue)) { //history에 있는지 확인,
        resultArea.textContent = "이미 입력한 숫자입니다."
        return;
    }

    chances--;
    chanceArea.textContent = `남은 기회: ${chances}번`; //개 중요!
    console.log("기회:", chances);


    if (userValue > com_num) {
        resultArea.textContent = "Down!";
    }
    else if (userValue < com_num) {
        resultArea.textContent = "Up!";
    }
    else {
        resultArea.textContent = "Bingo!";
    }

    history.push(userValue); //히스토리에 값을 계속 저장

    if (chances < 1) {
        gameOver=true;
    }

    if (gameOver == true) {
        playButton.disabled = true;
    }
}

function reset() {
    //user input 창이 깨끗하게 정리
    userInput.value = "";
    //새로운 번호 생성
    pickRandNum();

    resultArea.textContent = "결과 값이 나왔습니다";
}

pickRandNum();