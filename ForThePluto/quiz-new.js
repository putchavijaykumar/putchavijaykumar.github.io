// QUESTIONS

const questions = [
    {
        question: "How long ago did dinosaurs die out?",
        answers: [
            { text: "65 million years ago", correct: true},
            { text: "130 million years ago", correct: false},
            { text: "160 million years ago", correct: false},
            { text: "225 million years ago", correct: false}
        ],
        explanation: "Did not not see the movie Jurasic Park!"
    },

    {
        question: "Which animal dominated the earth after dinosaurs?",
        answers: [
            { text: "Mammoths", correct: false},
            { text: "Mammals", correct: true},
            { text: "Reptiles", correct: false},
            { text: "Apes", correct: false}
        ],
        explanation: "We are the dangerous than dinosaurs."
    },

    {
        question: "What is the other name for sea wasp, the most poisonous animal than any other on the earth?",
        answers: [
            { text: "Box-Jellyfish", correct: true},
            { text: "Manatee", correct: false},
            { text: "Stingray", correct: false},
            { text: "Manta Ray", correct: false}
        ],
        explanation: ""
    },

    {
        question: "Which among these is the largest primate that can weigh upto 275 kgs?",
        answers: [
            { text: "Human", correct: false},
            { text: "Gorilla", correct: true},
            { text: "Chimpanzee", correct: false},
            { text: "Orangutan", correct: false}
        ],
        explanation: ""
    },

    {
        question: "Which is not a type of Rhinoceros?",
        answers: [
            { text: "White", correct: false},
            { text: "Horned", correct: false},
            { text: "Indian", correct: false},
            { text: "American", correct: true}
        ],
        explanation: ""
    },

    {
        question: "Which is the longest snake and also the longest animal on earth at over 1.5 m on average?",
        answers: [
            { text: "Indian Python", correct: false},
            { text: "Reticulated Python", correct: true},
            { text: "Anaconda", correct: false},
            { text: "Glass Viper", correct: false}
        ],
        explanation: ""
    },

    {
        question: "Which is the largest fish found with a weight of about 30 tonnes?",
        answers: [
            { text: "Tiger Shark", correct: false},
            { text: "Whale Shark", correct: true},
            { text: "Basking Shark", correct: false},
            { text: "Greenland Shark", correct: false}
        ],
        explanation: ""
    },

    {
        question: "Which of these cat families has the most widespread distribution around India, Africa, China, Siberia and Korea",
        answers: [
            { text: "Lion", correct: false},
            { text: "Tiger", correct: false},
            { text: "Leopard", correct: true},
            { text: "Cheetah", correct: false}
        ],
        explanation: ""
    },

    {
        question: "Which is both the smallest and the longest living breed of dog at life span of 12 to 20 years?",
        answers: [
            { text: "Dachshund", correct: false},
            { text: "Chihuahua", correct: true},
            { text: "Gray Wolves", correct: false},
            { text: "Pekinese", correct: false}
        ],
        explanation: ""
    },

    {
        question: "Most of which animals continue to grow throughout its life span?",
        answers: [
            { text: "Mammals", correct: false},
            { text: "Amphibians", correct: false},
            { text: "Reptiles", correct: true},
            { text: "Marsupials", correct: false}
        ],
        explanation: ""
    },

    {
        question: "The venom of which animal can remain active for weeks even after its death?",
        answers: [
            { text: "Scorpion", correct: false},
            { text: "Jellyfish", correct: true},
            { text: "Stingray", correct: false},
            { text: "King Cobra", correct: false}
        ],
        explanation: ""
    },

    {
        question: "Which is the largest tree-living mammals?",
        answers: [
            { text: "Gazelle", correct: false},
            { text: "Lemur", correct: false},
            { text: "Orangutan", correct: true},
            { text: "Porcupine", correct: false}
        ],
        explanation: ""
    },

    {
        question: "Which is the world's fastest flyer (dive), can top the speed of upto 280 kms/hr?",
        answers: [
            { text: "Spine-tailed swift", correct: false},
            { text: "Frigate bird", correct: false},
            { text: "Peregrine Falcon", correct: true},
            { text: "Spur-winged goose", correct: false}
        ],
        explanation: ""
    },

    {
        question: "Which is the world's smallest fish measuring just 13mm long at most?",
        answers: [
            { text: "Common gold fish", correct: false},
            { text: "Clown fish", correct: false},
            { text: "Butterfly fish", correct: false},
            { text: "Drarf Pygmy Goby", correct: true}
        ],
        explanation: ""
    },

    {
        question: "Which is the world's longest insect that can grow to more than 56cm in length?",
        answers: [
            { text: "Stick Insect", correct: true},
            { text: "Praying Mantis", correct: false},
            { text: "Giant Water Bug", correct: false},
            { text: "Goliath Beetle", correct: false}
        ],
        explanation: ""
    },

    {
        question: "Which is the world's tallest living animal that can grow more than 6m tall?",
        answers: [
            { text: "African Elephant", correct: false},
            { text: "Giraffee", correct: true},
            { text: "Camel", correct: false},
            { text: "Moose", correct: false}
        ],
        explanation: ""
    },

    {
        question: "Which is world's deadliest snake, it releases a venom powerful enough to kill upto 200 humans?",
        answers: [
            { text: "Black Mamba", correct: true},
            { text: "Taipan", correct: false},
            { text: "Russell's Viper", correct: false},
            { text: "Common Krait", correct: false}
        ],
        explanation: ""
    },

    {
        question: "Which is only creature that can turn its head in an almost complete circle as much as 360 degrees because of its telescopic eyes?",
        answers: [
            { text: "Parrot", correct: false},
            { text: "Rabbit", correct: false},
            { text: "Owl", correct: true},
            { text: "Bat", correct: false}
        ],
        explanation: ""
    },

    {
        question: "Which animal with their strange eyes, can focus on two different directions at the same time?",
        answers: [
            { text: "Seahorse", correct: false},
            { text: "Chameleon", correct: false},
            { text: "Both of the above", correct: true},
            { text: "Starfish", correct: false}
        ],
        explanation: ""
    },

    {
        question: "Which species of the big cat has the most number of names (about 40) around the world?",
        answers: [
            { text: "Panther", correct: false},
            { text: "Jaguar", correct: false},
            { text: "Leopard", correct: false},
            { text: "Puma", correct: true}
        ],
        explanation: ""
    }

]

let teama = "Hyderabad";
let teamb = "Gurugram";


// GRABBING TEAM SCORE ELEMENTS


// GRABBING THE ELEMENTS

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answers-buttons");
const nextButtonElement = document.getElementById("next-btn");
const explanationElement = document.getElementById("explanation");
const progress = document.getElementById("progress-text");
const qtimer = document.getElementById("quiz-timer");
const teamName = document.getElementById("team-name");
const teamHYDScore = document.getElementById("teamHYDScore");
const teamGGMScore = document.getElementById("teamGGMScore");

// QUIZ INITIALISING AND SCORING

let currentQuestionIndex = 0;
/*let score = 0; */
let aScore = 0;
let bScore = 0;
let shuffledQuestions;
shuffledQuestions = questions.sort(() => Math.random() - .5)

// STARTING THE QUIZ

function startQuiz() {
    currentQuestionIndex = 0;       // Initializing the current question index to 0 everytime the quiz is started.
    /* score = 0; */                     // Initializing the score to 0 everytime the quiz is started.
    aScore = 0;
    bScore = 0;
    nextButtonElement.innerHTML = "Next";   // Adding the words next to the next button element that we grabbed from html markup
    showQuestion();                 // showing the questions

}

// QUIZ TIMER

function quizTimer(t, d) {
    
    const timer = setInterval(() => {
    qtimer.innerHTML = t + " seconds left";
    t--;
    if (t < d) {
        clearInterval(timer);
        qtimer.innerHTML = "Timer stopped";
    }
}, 1000);
}


// SHOW QUESTIONS

function showQuestion () {
    resetState();
    let currentQuestion = shuffledQuestions[currentQuestionIndex];      // we are storing the question based on index in current question
    let questionNo = currentQuestionIndex + 1;                  // we are creating a new variable for question number
    questionElement.innerHTML = questionNo + ".  " + currentQuestion.question;      // we are adding inner html to the new question element
    isEven(questionNo);
    
    explanationElement.innerHTML = currentQuestion.explanation;
    explanationElement.style.display = "none";
    progress.innerHTML = "Question " + questionNo + " out of " + questions.length;
    quizTimer(10, 0);

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerElement.appendChild(button);       
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    });

}


// RESET STATE
function resetState() {
    nextButtonElement.style.display = "none";
    explanationElement.style.display = "none";
    while(answerElement.firstChild) {
        answerElement.removeChild(answerElement.firstChild);
    }
    
}


// SELECT ANSWER FUNCTION
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";    
    explanationElement.style.display = "block";
    qtimer.innerHTML = "Timer stopped";
    
    if (isCorrect && teamNameNumber == 0) {
        selectedBtn.classList.add("correct");
        aScore++;
        teamHYDScore.innerHTML = `${aScore}`;
    } else if (isCorrect && teamNameNumber != 0){
        bScore++;
        teamGGMScore.innerHTML = `${bScore}`;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerElement.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButtonElement.style.display = "block";
    
}

// NEXT BUTTON FUNCTION

nextButtonElement.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
        resetScore();
    }
});

// HANDLE NEXT BUTTON FUNCTION

function handleNextButton () {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
        teamName.innerHTML = " ";
    }
}


// SHOW SCORES

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored are displayed below`;
    teamHYDScore.innerHTML = `${aScore}`;
    teamGGMScore.innerHTML = `${bScore}`;
    nextButtonElement.innerHTML = "Restart Quiz";
    nextButtonElement.style.display = "block";
    /*questionElement.innerHTML = `You scored ${aScore} out of ${questions.length} `;*/
}


// RESET SCORE

function resetScore() {
    aScore = 0;
    bScore = 0;
}

// PROGRESS BAR


function addProgress() {
    const progress = (currentQuestionIndex / questions.length) * 100;
    document.querySelector('.quiz-progress').style.width = `${progress}`;
}


// ALTERNATING THE QUESTIONS BETWEEN TWO TEAMS

function isEven(a) {
        teamNameNumber = a % 2 === 0;
        if (teamNameNumber == 0) {
            teamName.innerHTML = "This question is for " + teama;
        } else {
            teamName.innerHTML = "This question is for " + teamb;
        }        
        
    }
   

// CALLING THE START QUIZ FUNCTION
startQuiz();

