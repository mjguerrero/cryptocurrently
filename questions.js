//DOM selectors
const questionsElem = document.querySelector('#questions'); 
const questionAskedElem = document.querySelector('#question-asked'); 
const choiceElem = document.getElementById('multichoices');
const option1 = document.querySelector('#option1')
const option2 = document.querySelector('#option2')
const option3 = document.querySelector('#option3')
const showResultElem = document.querySelector('#result')


//questions
let questionsList = [
    {
        question: 'How many months of experience do you have with crypto currency',
        choices:['0-3 months', '3-6 months', '6+ months'],
        
    },

    {
        question: 'Is this for a long term or short term investment?',
        choices: ['Long Term', 'Short Term', 'Undecided'],
    
        
    },

    {   
        question: 'How much are you looking to invest?',
        choices :['Under $300', '$300-$500', '$500+'],
       

    },
    {
        question: 'Where are you located?',
        choices: ['Within the USA', 'Canada', 'Rest of the world'],
    }
];   
//the elements that wont change (the score total and amount of questions)
const max_questions = 4
let currentQuestion = 0

startPageElem = document.getElementById('home');
//functions - telling the game to start game and start timer
startAssessment = () => {
    // startPageElem.setAttribute('class', 'hidden');
    // questionsElem.removeAttribute('class');
    
    
    questionsElem.style.display = 'block' // SHOW QUESTIONS
    // present first question and options
    questionAskedElem.innerHTML = questionsList[currentQuestion].question
    option1.innerHTML = questionsList[currentQuestion].choices[0]
    option2.innerHTML = questionsList[currentQuestion].choices[1]
    option3.innerHTML = questionsList[currentQuestion].choices[2]

}

function chooseAnswer (event) {
  currentQuestion = currentQuestion + 1
  let answer;
  let foundQuestion = questionAskedElem.innerHTML;

  // which choice did they pick?
  for(let i=0; i<questionsList.length; i++) {
    if(event.target.id === 'option1') {
      answer = questionsList[i].choices[0];
    }
    if(event.target.id === 'option2') {
      answer = questionsList[i].choices[1];
    }
    if(event.target.id === 'option3') {
      answer = questionsList[i].choices[2];
    }

  }

    if(questionsList[currentQuestion] !== undefined) {
      // show the next question and options
      questionAskedElem.innerHTML = questionsList[currentQuestion].question
      option1.innerHTML = questionsList[currentQuestion].choices[0]
      option2.innerHTML = questionsList[currentQuestion].choices[1]
      option3.innerHTML = questionsList[currentQuestion].choices[2]
    } else {
      endAssessment()
    }

}

// EVENT LISTNERS

choiceElem.addEventListener('click', chooseAnswer)
choiceElem.addEventListener('click', chooseAnswer)