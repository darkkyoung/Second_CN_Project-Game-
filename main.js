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

playButton.addEventListener("click", play); //함수를 매개변수처럼 넘김
resetButton.addEventListener("click", reset);

function pickRandNum() {
    com_num = Math.floor(Math.random() * 100) + 1;
    console.log("정답", com_num);
}

function play() {
    let userValue = userInput.value;

    chances--;
    console.log("기회:", chances);

    if (userValue > com_num) {
        resultArea.textContent = "Down!";
    }
    else if (userValue == com_num) {
        resultArea.textContent = "Bingo!";
    }
    else {
        resultArea.textContent = "Up!";
    }

    if (chances < 1) {
        gameOver=true;
    }

    if (gameOver = true) {
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