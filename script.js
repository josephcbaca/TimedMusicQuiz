
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

document.getElementById("myStart").addEventListener("click", closeButton);

function closeButton() {
    document.getElementById("myStart").style.display = "none";
}

//Timer:  Starts onClick and runs down to 0

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
    // , {
    //     question3: "When do you use a conditional if/else staement?",
    //     choices: ["To return 1 or 0 condition", "To return a true or false condition", "To return a < or > condition", "To return [1] or [0] condition"],
    //     answer: "",
    // }, {
    //     question: "What is the highest node in the DOM hierarchy?",
    //     choices: ["document", "HTML", "window", "XML"],
    //     answer: "",
    // }, {
    //     question4: " What is the correct syntax to display “Alert Me!” in an alert box using JavaScript??",
    //     choices: ["alertme(Alert Me!)", "prompt(Alert Me!)", "alert(Alert Me!)", "alertbox(Alert Me!)"],
    //     answer: "",
    // }, {
    //     question5: "In the array let index = ['A', 'B', 'C', 'D'] what is the .indexOf D?",
    //     choices: ["D", "3", "'D'", "4"],
    //     answer: "3",
    // }, {
    //     question: "Which of the following is not ?",
    //     choices: ["a", "b", "c", "d"],
    //     answer: "a",
    // }, {
    //     question: "What does .querySelector do?",
    //     choices: ["a", "b", "c", "d"],
    //     answer: "a",
    // }
];

//Question function will wait for button to be clicked to run placement of attributes for empty elements

let currentQuestion = 0;
let score = 0;
let questionData = quizQuestions[currentQuestion];

document.getElementById("myStart").addEventListener("click", questionLayout);

function questionLayout() {
    //Question populate
    document.getElementById("questions").textContent = questionData.question;
    //Choices populate
    for (i = 0; i < questionData.choices.length; i++) {
        let choiceElem = document.createElement("button");
        choiceElem.textContent = questionData.choices[i];
        document.getElementById("choices").appendChild(choiceElem);
        choiceElem.setAttribute("class", "btn btn-primary btn-md col-md-3 my-1");
        choiceElem.setAttribute("role", "button");
        choiceElem.addEventListener("click", submitAnswer);
    };
  
    function submitAnswer() {

        if (questionData.choices = questionData.answer) {
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
// document.getElementById("submit").addEventListener("click", questionLayout)
// questionLayout()

    //Button clicked correct or incorrect


//if answered right then tally 1 to score if answered incorrect then tally -1 to score

