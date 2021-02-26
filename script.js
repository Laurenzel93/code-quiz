let q1 = {
    question1: "What is JavaScript responsible for?",
    choices: {
        A: "A. JavaScript specifies the design and layout of the web page",
        B: "B. JavaScript defines the content of the web page",
        C: "C. Javascript programs the behavior and interactivity of the web page",
        D: "D. None of the above"
    },
    correctAnswer: "C. Javascript programs the behavior and interactivity of the web page"
};

let q2 = {
    question2: "Pretend this is a valid question, ok?",
    choices: {
        A: "A. This is the wrong answer",
        B: "B. This is the RIGHT answer. Pick this one!",
        C: "C. This is the wrong answer",
        D: "D. This is the wrong answer"
    },
    correctAnswer: "B. This is the RIGHT answer. Pick this one!"
};

let q3 = {
    question3: "Another test question",
    choices: {
        A: "A. This is the RIGHT answer. Pick this one!",
        B: "B. This is the wrong answer",
        C: "C. This is the wrong answer",
        D: "D. This is the wrong answer"
    },
    correctAnswer: "A. This is the RIGHT answer. Pick this one!"
};

let q4 = {
    question4: "Another test question",
    choices: {
        A: "A. This is the wrong answer",
        B: "B. This is the wrong answer",
        C: "C. This is the wrong answer",
        D: "D. This is the RIGHT answer. Pick this one!"
    },
    correctAnswer: "D. This is the RIGHT answer. Pick this one!"
};

let q5 = {
    question5: "Are you feeling lucky? I won't tell you which is the right answer this time!",
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

for (let i =0; i < allQuestions.length; i++){
    console.log(allQuestions[i]);
}

function failure() {
    window.alert("You lose! Wanna try again?");
}

beginBtn.addEventListener("click", beginGame);

let remainingTime = 60;
function beginGame() {
    beginBtn.style.visibility = "hidden";
    let timerInterval = setInterval(function () {
        remainingTime--;
        countdownEl.textContent = remainingTime + " seconds remaining";
        console.log(remainingTime);
        
        if (remainingTime === 0) {
            clearInterval(timerInterval);
            failure();
        }

    }, 1000);
}

function showQuestion1() {
    let printQ1 = document.getElementById("QUESTION");
    printQ1.innerHTML = q1.question1;

    let answer1 = document.getElementById("answer1");
    answer1.innerHTML = q1.choices.A;
    let answer2 = document.getElementById("answer2");
    answer2.innerHTML = q1.choices.B;
    let answer3 = document.getElementById("answer3");
    answer3.innerHTML = q1.choices.C;
    let answer4 = document.getElementById("answer4");
    answer4.innerHTML = q1.choices.D;

    document.getElementById("begin").addEventListener("click", showQuestion1);

    answer1.addEventListener("click", function (){
        if (answer1.innerHTML ==  q1.correctAnswer){
            points++; 
        } else {
            remainingTime = remainingTime - 5;
        }
    });
}
beginBtn.addEventListener("click", showQuestion1);

function showQuestion2() {
    let printQ2 = document.getElementById("QUESTION");
    printQ2.innerHTML = q2.question2;

    let answer1 = document.getElementById("answer1");
    answer1.innerHTML = q2.choices.A;
    let answer2 = document.getElementById("answer2");
    answer2.innerHTML = q2.choices.B;
    let answer3 = document.getElementById("answer3");
    answer3.innerHTML = q2.choices.C;
    let answer4 = document.getElementById("answer4");
    answer4.innerHTML = q2.choices.D;

    answer2.addEventListener("click", function (){
        if (answer2.innerHTML ==  q2.correctAnswer){
            points++; 
        } else {
            remainingTime = remainingTime - 5;
        }
    });
}
beginBtn.addEventListener("click", showQuestion2);

function showQuestion3() {
    let printQ3 = document.getElementById("QUESTION");
    printQ3.innerHTML = q3.question3;

    let answer1 = document.getElementById("answer1");
    answer1.innerHTML = q3.choices.A;
    let answer2 = document.getElementById("answer2");
    answer2.innerHTML = q3.choices.B;
    let answer3 = document.getElementById("answer3");
    answer3.innerHTML = q3.choices.C;
    let answer4 = document.getElementById("answer4");
    answer4.innerHTML = q3.choices.D;

    answer3.addEventListener("click", function (){
        if (answer3.innerHTML ==  q3.correctAnswer){
            points++; 
        } else {
            remainingTime = remainingTime - 5;
        }
    });
}
beginBtn.addEventListener("click", showQuestion3);

function showQuestion4() {
    let printQ4 = document.getElementById("QUESTION");
    printQ4.innerHTML = q4.question4;

    let answer1 = document.getElementById("answer1");
    answer1.innerHTML = q4.choices.A;
    let answer2 = document.getElementById("answer2");
    answer2.innerHTML = q4.choices.B;
    let answer3 = document.getElementById("answer3");
    answer3.innerHTML = q4.choices.C;
    let answer4 = document.getElementById("answer4");
    answer4.innerHTML = q4.choices.D;

    answer4.addEventListener("click", function (){
        if (answer4.innerHTML ==  q4.correctAnswer){
            points++; 
        } else {
            remainingTime = remainingTime - 5;
        }
    });
}
beginBtn.addEventListener("click", showQuestion4);

function showQuestion5() {
    let printQ5 = document.getElementById("QUESTION");
    printQ5.innerHTML = q5.question5;

    let answer1 = document.getElementById("answer1");
    answer1.innerHTML = q5.choices.A;
    let answer2 = document.getElementById("answer2");
    answer2.innerHTML = q5.choices.B;
    let answer3 = document.getElementById("answer3");
    answer3.innerHTML = q5.choices.C;
    let answer4 = document.getElementById("answer4");
    answer4.innerHTML = q5.choices.D;

    answer5.addEventListener("click", function (){
        if (answer5.innerHTML ==  q5.correctAnswer){
            points++; 
        } else {
            remainingTime = remainingTime - 5;
        }
    });
}
beginBtn.addEventListener("click", showQuestion5);
