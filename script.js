
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
        question1: "Where do you place the <script> tag to insert a JavaScript?",
        choices: ["<header>", "<.js>", "<head>", "<body>"],
        answer: "<body>",
    },
    {
        question2: "What attribute do you use to refer to an external JavaScript(.js) file?",
        choices: ["src=", "<a>", "href=", "link="],
        answer: "src=",
    }, {
        question3: "When do you use a conditional if/else staement?",
        choices: ["To return 1 or 0 condition", "To return a true or false condition", "To return a < or > condition", "To return [1] or [0] condition"],
        answer: "",
    }, {
        question: "What is the highest node in the DOM hierarchy?",
        choices: ["document", "HTML", "window", "XML"],
        answer: "",
    }, {
        question4: " What is the correct syntax to display “Alert Me!” in an alert box using JavaScript??",
        choices: ["alertme(Alert Me!)", "prompt(Alert Me!)", "alert(Alert Me!)", "alertbox(Alert Me!)"],
        answer: "",
    }, {
        question5: "In the array let index = ['A', 'B', 'C', 'D'] what is the .indexOf D?",
        choices: ["D", "3", "'D'", "4"],
        answer: "3",
    }, {
        question: "Which of the following is not ?",
        choices: ["a", "b", "c", "d"],
        answer: "a",
    }, {
        question: "What does .querySelector do?",
        choices: ["a", "b", "c", "d"],
        answer: "a",
    }
];

//for loop will run through creating

//Create button to click to disappear and then start questions

//Question function will wait for button to be clicked to run placement of attributes for empty elements



document.getElementById("myStart").addEventListener("click", function questionLayout() {
    let questionText = document.createElement("p");
    let questions = document.createTextNode("Water");
    questionText.appendChild(questions)
    document.getElementById("questionText").appendChild(questionText);

    
    // let jumboSquare = document.getElementById("jumbotron-square");

    // jumboSquare.addClass("jumbotron col-md-12 mx-auto mt-5");
    // jumboSquare.setAttribute("");
    // jumboSquare.textContent("This is a real question");
    // jumboSquare.append(jumboSquare);
})