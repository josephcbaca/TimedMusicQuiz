
//High Score
document.getElementById("cursorpointer").addEventListener("click", openNav);
document.getElementById("myNav").addEventListener("click", closeNav);

function openNav() {
    document.getElementById("myNav").style.display = "block";
}

function closeNav() {
    document.getElementById("myNav").style.display = "none";
}

//Start Button
let startButton = document.createElement("button");
startButton.textContent = "Start Quiz!"
document.getElementById("questionText").appendChild(startButton);
startButton.setAttribute("class", "btn btn-md button-custom");
startButton.setAttribute("id", "myStart");

document.getElementById("myStart").addEventListener("click", closeButton);

function closeButton() {
    document.getElementById("myStart").style.display = "none";
}



//Timer: Starts onClick and runs down to 0
let timer = document.querySelector(".timer");
let secondsLeft = 75;
let minusTime = 5;

document.getElementById("myStart").addEventListener("click", function setTime() {
    let timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = " " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }

    }, 1000);
});

function sendMessage() {
    alert("You have run out of time!")

}

//Sound effects

//--Buzzer when answered wrong

//--Ding when answered correctly


//Quiz Questions

let quizQuestions = [

    {
        question: "What is Bob Dylan's birth name?",
        choices: ["Robert Dylanson", "Robert Zimmerman", "Robert Plant", "John Wesley Harding"],
        answer: "Robert Zimmerman",
    },
    {
        question: "Where is Radiohead originally from?",
        choices: ["New York", "Australia", "England", "Los Angeles"],
        answer: "England",
    }
];

//Question function will wait for button to be clicked to run placement of attributes for empty elements

let currentQuestion = 0;
let score = 0;



document.getElementById("myStart").addEventListener("click", questionLayout);

function questionLayout() {
    let questionData = quizQuestions[currentQuestion];
    //Question populate
    document.getElementById("questions").textContent = questionData.question;
    //Choices populate
    for (i = 0; i < questionData.choices.length; i++) {
        let choiceElem = document.createElement("button");
        choiceElem.textContent = questionData.choices[i];
        document.getElementById("choices").appendChild(choiceElem);
        choiceElem.setAttribute("class", "btn btn-primary btn-md col-md-3 my-1");

        choiceElem.addEventListener("click", function () {
            submitAnswer(questionData.choices[i])
        });
    };

    // let x = document.getElementById("submit-click").textContent;


    function submitAnswer(submission) {
        let questionData = quizQuestions[currentQuestion];
        console.log(submission)
        console.log(questionData.answer)
        if (submission === questionData.answer) {
            console.log("correct")
        }
        else {
            console.log("incorrect")
        }

        // // currentQuestion += 1;
        // if (currentQuestion === questionData.length) {
        //     currentQuestion = 0;
    }

    currentQuestion++;
}


// 1. Click Start Quiz and disappears
// 2. First question appears(cycle through questions using for loop)
// 3. Answer to question correct or not will go to next question
// 4. Wrong answer will subtract 5 seconds from the Timer
// 5. Correct answer will add +1 to score
// 6. Timer expires and you are shown your score
// 7. 