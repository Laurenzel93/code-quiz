let q1 = {
    content: "What is JavaScript responsible for?",
    choices: {
        A: "A. JavaScript specifies the design and layout of the web page",
        B: "B. JavaScript defines the content of the web page",
        C: "C. Javascript programs the behavior and interactivity of the web page",
        D: "D. None of the above"
    },
    correctAnswer: "C. Javascript programs the behavior and interactivity of the web page"
};

let q2 = {
    content: "Pretend this is a valid question, ok?",
    choices: {
        A: "A. This is the wrong answer",
        B: "B. This is the RIGHT answer. Pick this one!",
        C: "C. This is the wrong answer",
        D: "D. This is the wrong answer"
    },
    correctAnswer: "B. This is the RIGHT answer. Pick this one!"
};

let q3 = {
    content: "Another test question",
    choices: {
        A: "A. This is the RIGHT answer. Pick this one!",
        B: "B. This is the wrong answer",
        C: "C. This is the wrong answer",
        D: "D. This is the wrong answer"
    },
    correctAnswer: "A. This is the RIGHT answer. Pick this one!"
};

let q4 = {
    content: "Another test question",
    choices: {
        A: "A. This is the wrong answer",
        B: "B. This is the wrong answer",
        C: "C. This is the wrong answer",
        D: "D. This is the RIGHT answer. Pick this one!"
    },
    correctAnswer: "D. This is the RIGHT answer. Pick this one!"
};

let q5 = {
    content: "Are you feeling lucky? I won't tell you which is the right answer this time!",
    choices: {
        A: "A. Is this the right answer?",
        B: "B. Maybe this is the right answer!",
        C: "C. Or maybe it's C?",
        D: "D. Nope, it's D. I promise. You can trust me."
    },
    correctAnswer: "C. Or maybe it's C?"
};

let allQuestions = [q1, q2, q3, q4, q5];
let quizEl = document.getElementById("quiz");
let countdownEl = document.getElementById("countdown");
let beginBtn = document.getElementById("begin");

for (let i = 0; i < allQuestions.length; i++) {
    console.log(allQuestions[i]);
}

beginBtn.addEventListener("click", beginGame);

let remainingTime = 60;
function beginGame() {
    beginBtn.style.visibility = "hidden";
    let timerInterval = setInterval(function () {
        remainingTime--;
        countdownEl.textContent = remainingTime + " seconds remaining";
        console.log(remainingTime);

        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            failure();
        } else {
            remainingTime === 0;
        }

    }, 1000);
}

function failure() {

    let restartGame = window.alert("You lose! Wanna try again?");
    if (restartGame === true) {
        beginGame();
    }
}

function showQuestion1() {
    let printQ1 = document.getElementById("QUESTION");
    printQ1.innerHTML = q1.content;

    let answer1 = document.getElementById("answer1");
    answer1.innerHTML = q1.choices.A;
    let answer2 = document.getElementById("answer2");
    answer2.innerHTML = q1.choices.B;
    let answer3 = document.getElementById("answer3");
    answer3.innerHTML = q1.choices.C;
    let answer4 = document.getElementById("answer4");
    answer4.innerHTML = q1.choices.D;

}

function checkAnswer(answer) {
    let questionContent = document.getElementById("QUESTION").innerHTML;
    if (questionContent === q1.content){ //question 1 check
        if (answer.innerHTML == q1.correctAnswer) {
            showQuestion2();
            points++;
        } else {
            remainingTime = remainingTime - 5;
        }
    }

    if (questionContent === q2.content){ //question 2 check
        if (answer.innerHTML == q2.correctAnswer) {
            showQuestion3();
            points++;
        } else {
            remainingTime = remainingTime - 5;
        }
    }

    if (questionContent === q3.content){ //question 3 check
        if (answer.innerHTML == q3.correctAnswer) {
            showQuestion4();
            points++;
        } else {
            remainingTime = remainingTime - 5;
        }
    }

    if (questionContent === q4.content){ //question 4 check
        if (answer.innerHTML == q4.correctAnswer) {
            showQuestion5();
            points++;
        } else {
            remainingTime = remainingTime - 5;
        }
    }

    if (questionContent === q5.content){ //question 5 check
        if (answer.innerHTML == q5.correctAnswer) {
            getScore();
            points++;
        } else {
            remainingTime = remainingTime - 5;
        }
    }
}


function showQuestion2() {
    let printQ2 = document.getElementById("QUESTION");
    printQ2.innerHTML = q2.content;

    let answer1 = document.getElementById("answer1");
    answer1.innerHTML = q2.choices.A;
    let answer2 = document.getElementById("answer2");
    answer2.innerHTML = q2.choices.B;
    let answer3 = document.getElementById("answer3");
    answer3.innerHTML = q2.choices.C;
    let answer4 = document.getElementById("answer4");
    answer4.innerHTML = q2.choices.D;
}

function showQuestion3() {
    let printQ3 = document.getElementById("QUESTION");
    printQ3.innerHTML = q3.content;

    let answer1 = document.getElementById("answer1");
    answer1.innerHTML = q3.choices.A;
    let answer2 = document.getElementById("answer2");
    answer2.innerHTML = q3.choices.B;
    let answer3 = document.getElementById("answer3");
    answer3.innerHTML = q3.choices.C;
    let answer4 = document.getElementById("answer4");
    answer4.innerHTML = q3.choices.D;
}

function showQuestion4() {
    let printQ4 = document.getElementById("QUESTION");
    printQ4.innerHTML = q4.content;

    let answer1 = document.getElementById("answer1");
    answer1.innerHTML = q4.choices.A;
    let answer2 = document.getElementById("answer2");
    answer2.innerHTML = q4.choices.B;
    let answer3 = document.getElementById("answer3");
    answer3.innerHTML = q4.choices.C;
    let answer4 = document.getElementById("answer4");
    answer4.innerHTML = q4.choices.D;

}


function showQuestion5() {
    let printQ5 = document.getElementById("QUESTION");
    printQ5.innerHTML = q5.content;

    let answer1 = document.getElementById("answer1");
    answer1.innerHTML = q5.choices.A;
    let answer2 = document.getElementById("answer2");
    answer2.innerHTML = q5.choices.B;
    let answer3 = document.getElementById("answer3");
    answer3.innerHTML = q5.choices.C;
    let answer4 = document.getElementById("answer4");
    answer4.innerHTML = q5.choices.D;
}
