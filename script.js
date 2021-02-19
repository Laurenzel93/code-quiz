let q1 = {
    question: "What is JavaScript responsible for?",
    choices: {
        A: "A. JavaScript spcifies the design and layout of the web page",
        B: "B. JavaScript defines the content of the web page",
        C: "C. Javascript programs the behavior and interactivity of the web page",
        D: "D. None of the above"
    },
    correctChoice: "C"
};

let q2 = {
    question: "Pretend this is a valid question, ok?",
    choices: {
        A: "A. This is the wrong answer",
        B: "B. This is the RIGHT answer. Pick this one!",
        C: "C. This is the wrong answer",
        D: "D. This is the wrong answer"
    },
    correctChoice: "B"
};

let q3 = {
    question: "Another test question",
    choices: {
        A: "A. This is the RIGHT answer. Pick this one!",
        B: "B. This is the wrong answer",
        C: "C. This is the wrong answer",
        D: "D. This is the wrong answer"
    },
    correctChoice: "A"
};

let q4 = {
    question: "Another test question",
    choices: {
        A: "A. This is the wrong answer",
        B: "B. This is the wrong answer",
        C: "C. This is the wrong answer",
        D: "D. This is the RIGHT answer. Pick this one!"
    },
    correctChoice: "D"
};

let q5 = {
    question: "Are you feeling lucky? I won't tell you which is the right answer this time!",
    choices: {
        A: "A. Is this the right answer?",
        B: "B. Maybe this is the right answer!",
        C: "C. Or maybe it's C?",
        D: "D. Nope, it's D. I promise. You can trust me."
    },
    correctChoice: "C"
};

let allQuestions = [q1, q2, q3, q4, q5];
let quizEl = document.getElementById("quiz");
let countdownEl = document.getElementById("countdown");
let beginBtn = document.getElementById("begin");

function failure() {
    window.alert("You lose! Wanna try again?");
}

beginBtn.addEventListener("click", beginGame);

function beginGame() {
let remainingTime = 60;

    let timerInterval = setInterval(function () {
        timeRemaining--;
        countdownEl.textContent = remainingTime + " seconds remaining.";

        if (remainingTime === 0) {
            clearInterval(timerInterval);
            failure();
        }

    }, 1000);
}
