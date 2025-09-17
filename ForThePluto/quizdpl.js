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

/*let teama = "Hyderabad";  */
/* let teamb = "Gurugram"; */



// GRABBING THE QUIZ SETUP ELEMENTS

const teamForm = document.getElementById("quiz-setup-form");
const resetTeamForm = document.getElementById("reset-team-button");
const quizSetupContainer = document.getElementById("quiz-setup");
const mainQuizContainer = document.getElementById("main-quiz-container");
const quizTeamMetrics = document.getElementById("team-metrics");
const teamA = document.getElementById("team1name").value;
const teamB = document.getElementById("team2name").value;
const teamC = document.getElementById("team3name").value;
const teamD = document.getElementById("team4name").value;
const teamE = document.getElementById("team5name").value;

const autoInputTeamNameA = document.getElementById("autoInputTeamNameA");
const autoInputTeamNameB = document.getElementById("autoInputTeamNameB");
const autoInputTeamNameC = document.getElementById("autoInputTeamNameC");
const autoInputTeamNameD = document.getElementById("autoInputTeamNameD");
const autoInputTeamNameE = document.getElementById("autoInputTeamNameE");

const quizSetupButton = document.getElementById("form-submit");

quizTeamMetrics.style.visibility = "hidden";
const teamNames = [teamA, teamB, teamC, teamD, teamE];



  
// Attaching a event listener to quiz setup button and putting data in a form.

quizSetupButton.addEventListener("click", () => {

    alert("Data submitted");
    quizSetupContainer.classList.add('hide');
    mainQuizContainer.classList.remove('hide');
    quizTeamMetrics.style.visibility = "visible";
   
});

// DISPLAYING TEAM NAMES

autoInputTeamNameA.innerHTML = teamA;
autoInputTeamNameB.innerHTML = teamB;
autoInputTeamNameC.innerHTML = teamC;
autoInputTeamNameD.innerHTML = teamD;
autoInputTeamNameE.innerHTML = teamE;



// RESETTING TEAM NAME FORM

resetTeamForm.addEventListener('click', () => {
teamForm.reset();
});

// DPL FINAL ROUND GAME SETUP
// GAME TYPE - FIRST ROUND 5 TEAMS 20 QUESTIONS - 5 QUESTIONS EACH - ONLY ONE ROUND - 2 TEAMS QUALIFY TO NEXT ROUND
// IF TIE CONTINUE THE GAME WITH ONE QUESTION EACH TILL TIE BREAKS
// EXISTING SCORES ARE TAKE FORWARD
// GAME TYPE - SECOND ROUND 2 TEAMS - 10 QUESTIONS - 5 QUESTIONS EACH - FIRST ROUND
// GAME TYPE - FINAL ROUND 2 TEAMS - 10 QUESTIONS - (BIDDING ROUND) - 5 QUESTIONS EACH - FINAL ROUND
// ROUND NAMES - FIRST, SECOND AND FINAL

// PRELIMINARY ROUND
// first round with option - 10 points no negative marking - 30 seconds to answer. all 5 will go through. - 3 questions each (15 questions in total)
// second round with or without options - 20 marks without options, 10 marks with options, -10 for wrong answers. scores of earlier added too.
// top  

let firstRoundCounter = 0;
let secondRoundCounter = 0;


// GRABBING THE ELEMENTS

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answers-buttons");
const nextButtonElement = document.getElementById("next-btn");
const explanationElement = document.getElementById("explanation");
const progress = document.getElementById("progress-text");
const qtimer = document.getElementById("quiz-timer");
const teamName = document.getElementById("team-name");
const teamAScore = document.getElementById("teamAScore");
const teamBScore = document.getElementById("teamBScore");
const teamCScore = document.getElementById("teamCScore");
const teamDScore = document.getElementById("teamDScore");
const teamEScore = document.getElementById("teamEScore");

// QUIZ INITIALISING AND SCORING

let currentQuestionIndex = 0;
/*let score = 0; */
let aScore = 0;
let bScore = 0;
let cScore = 0;
let dScore = 0;
let eScore = 0;
let shuffledQuestions;
shuffledQuestions = questions.sort(() => Math.random() - .5)

// STARTING THE QUIZ

function startQuiz() {
    currentQuestionIndex = 0;       // Initializing the current question index to 0 everytime the quiz is started.
    /* score = 0; */                     // Initializing the score to 0 everytime the quiz is started.
    aScore = 0;
    bScore = 0;
    cScore = 0;
    dScore = 0;
    eScore = 0;
    nextButtonElement.innerHTML = "Next";   // Adding the words next to the next button element that we grabbed from html markup
    showQuestion();                 // showing the questions

}

// QUIZ TIMER

function quizTimer(t, d) {
    
    const timer = setInterval(() => {
    qtimer.innerHTML = t + " seconds left";
    t--;
    window.globalTimer = timer;
    if (t === d) {
        clearInterval(timer);
        qtimer.innerHTML = "Timer stopped";
        timerOut();
    }
}, 1000);
}

function stopTimer() {
    clearInterval(globalTimer);
}
    


// SHOW QUESTIONS

function showQuestion () {
    resetState();
    let currentQuestion = shuffledQuestions[currentQuestionIndex];      // we are storing the question based on index in current question
    let questionNo = currentQuestionIndex + 1;                  // we are creating a new variable for question number
    questionElement.innerHTML = questionNo + ".  " + currentQuestion.question;      // we are adding inner html to the new question element
    /* isEven(questionNo); */
    alternatingQuestions(questionNo);
    
    explanationElement.innerHTML = currentQuestion.explanation;
    explanationElement.style.display = "none";
    progress.innerHTML = "Question " + questionNo + " out of " + questions.length;
    quizTimer(30, 0);

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
    stopTimer();

    if (isCorrect && teamNameNumber == 0.1 || isCorrect && teamNameNumber == 0.6 || isCorrect && teamNameNumber == 1.1 || isCorrect && teamNameNumber == 1.6 || isCorrect && teamNameNumber == 2.1) {
        selectedBtn.classList.add("correct");
        aScore = aScore + 10;
        /*teamHYDScore.innerHTML = `${aScore}`; */
        teamAScore.innerHTML = `${aScore}`;
    } else if (isCorrect && teamNameNumber == 0.2 || isCorrect && teamNameNumber == 0.7 || isCorrect && teamNameNumber == 1.2 || isCorrect && teamNameNumber == 1.7 || isCorrect && teamNameNumber == 2.2) {
        bScore = bScore + 10;
        teamBScore.innerHTML = `${bScore}`;
    } else if (isCorrect && teamNameNumber == 0.3 || isCorrect && teamNameNumber == 0.8 || isCorrect && teamNameNumber == 1.3 || isCorrect && teamNameNumber == 1.8 || isCorrect && teamNameNumber == 2.3) {
        cScore = cScore + 10;
        teamCScore.innerHTML = `${cScore}`;
    } else if (isCorrect && teamNameNumber == 0.4 || isCorrect && teamNameNumber == 0.9 || isCorrect && teamNameNumber == 1.4 || isCorrect && teamNameNumber == 1.9 || isCorrect && teamNameNumber == 2.4) {
        dScore = dScore + 10;
        teamDScore.innerHTML = `${dScore}`;
    } else if (isCorrect && teamNameNumber == 0.5 || isCorrect && teamNameNumber == 1.0 || isCorrect && teamNameNumber == 1.5 || isCorrect && teamNameNumber == 2.0 || isCorrect && teamNameNumber == 2.5) {
        eScore = eScore + 10;
        teamEScore.innerHTML = `${eScore}`;
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
        autoBrowserRefresh();
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
    teamAScore.innerHTML = `${aScore}`;
    teamBScore.innerHTML = `${bScore}`;
    teamCScore.innerHTML = `${bScore}`;
    teamDScore.innerHTML = `${bScore}`;
    teamEScore.innerHTML = `${bScore}`;
    nextButtonElement.innerHTML = "Restart Quiz";
    nextButtonElement.style.display = "block";
    /*questionElement.innerHTML = `You scored ${aScore} out of ${questions.length} `;*/
}


// RESET SCORE

function resetScore() {
    aScore = 0;
    bScore = 0;
    cScore = 0;
    dScore = 0;
    eScore = 0;
}

// PROGRESS BAR


function addProgress() {
    const progress = (currentQuestionIndex / questions.length) * 100;
    document.querySelector('.quiz-progress').style.width = `${progress}`;
}

// ALTERNATING THE QUESTIONS BETWEEN FIVE TEAMS

function alternatingQuestions(a) {
   teamNameNumber = (a/10);
   
    if (teamNameNumber === 0.1 || teamNameNumber === 0.6 || teamNameNumber === 1.1 || teamNameNumber === 1.6 || teamNameNumber ===2.1) {
        teamName.innerHTML = "This question is for " + teamA;
    } else if (teamNameNumber === 0.2 || teamNameNumber === 0.7 || teamNameNumber === 1.2 || teamNameNumber === 1.7 || teamNameNumber === 2.2) {
        teamName.innerHTML = "This question is for " + teamB;
    } else if (teamNameNumber === 0.3 || teamNameNumber === 0.8 || teamNameNumber === 1.3 || teamNameNumber === 1.8 || teamNameNumber === 2.3) {
        teamName.innerHTML = "This question is for " + teamC;
    } else if (teamNameNumber === 0.4 || teamNameNumber === 0.9 || teamNameNumber === 1.4 || teamNameNumber === 1.9 || teamNameNumber === 2.4) {
        teamName.innerHTML = "This question is for " + teamD;
    } else if (teamNameNumber === 0.5 || teamNameNumber === 0.10 || teamNameNumber === 1.5 || teamNameNumber === 2.0 || teamNameNumber === 2.5) {
        teamName.innerHTML = "This question is for " + teamE;
    }

};



// ALTERNATING THE QUESTIONS BETWEEN TWO TEAMS

/*
function isEven(a) {
        teamNameNumber = a % 2 === 0;
        if (teamNameNumber == 0) {
            teamName.innerHTML = "This question is for " + teama;
        } else {
            teamName.innerHTML = "This question is for " + teamb;
        }        
        
} */

// FUNCTION TO DO SOMETHING WHEN TIMER IS OUT.

function timerOut() {

    Array.from(answerElement.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButtonElement.style.display = "block";

}

// REFRESH BROWSER

function autoBrowserRefresh() {
    window.location.refresh();
};

// ROUND 2 STARTS WHERE WE SHOW bidding buttons

// select 3 from the top and put them in an array as per scores.
// create questions in a constant array
// Bidding buttons


// CALLING THE START QUIZ FUNCTION
startQuiz();
