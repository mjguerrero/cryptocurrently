$(document).foundation();
$('.breadcrumb-counter-nav-item').click(function () {
  $('.breadcrumb-counter-nav-item').removeClass('current');
  $(this).addClass('current');
});


// DOM SELECTORS
const assessForm = document.getElementById("assessmentForm")
const question1 = document.getElementById('question1')
const question2 = Array.from(document.querySelectorAll('input[name = "term"]'))
const question3 = Array.from(document.querySelectorAll('input[name = "invest"]'))
const submitBtn = document.getElementById('submitComplete')
console.log(question1.value)
// FUNCTIONS
const submitForm = e => {
  
  
  // GET ANSWERS FROM FORM
  let answer1
  let answer2
  let answer3
  
  answer1 = question1.value
  console.log(question1.value)
  question2.forEach(option => {
    if(option.checked) {
      answer2 = option.id
    }
  })
  question3.forEach(option => {
    if(option.checked) {
      answer3 = option.id
    }
  })

//
//retrieving api news and coin content based on answer 1
localStorage.setItem('coinNews1', answer1)
localStorage.setItem('coinInfo1', answer1)
if (answer2 === "longTerm" ){
  //pulling api for users who selected long-term
  let termCoin1 = 'bitcoin';
  let termCoin2 = 'ethereum';
  localStorage.setItem('termCoin1', termCoin1)
  localStorage.setItem('termCoin2', termCoin2)
}else if (answer2 === "shortTerm" ){
  //pulling api for users who selected short-term
  let termCoin1 = 'dogecoin';
  let termCoin2 = 'iota';
  localStorage.setItem('termCoin1', termCoin1)
  localStorage.setItem('termCoin2', termCoin2)
}else {
  //pulling api for users who selected undecided
  let termCoin1 = 'ethereum';
  let termCoin2 = 'dogecoin';
  localStorage.setItem('termCoin1', termCoin1)
  localStorage.setItem('termCoin2', termCoin2)
}

if (answer3 === "300orLess" ){
    //pulling api for users who selected 300orLess
    let termCoin3 = 'cardano';
    localStorage.setItem('coinNews2', termCoin3)//added news 
    localStorage.setItem('termCoin3', termCoin3)
  }else if (answer3 === "300-500" ){
    //pulling api for users who selected 300-500
    let termCoin3 = 'ripple';
    localStorage.setItem('coinNews2', termCoin3)//added news 
    localStorage.setItem('termCoin3', termCoin3)
  }else {
    //pulling api for users who selected undecided
    let termCoin3 = 'bitcoin';
    localStorage.setItem('coinNews2', termCoin3)//added news 
    localStorage.setItem('termCoin3', termCoin3)
  }


  window.location.assign("./cryptocur.html")

}


// EVENT LISTNERS

submitBtn.addEventListener('click', function(e){
  // Run validation
  e.preventDefault()

  let formIsValid = 0; 
  //If question 1 value is not empty then user has selected a coin
  if (question1.value !== "") {
      formIsValid++ 
  }
 
  for (let i = 0; i < question2.length; i++) {
    if (question2[i].checked == true) {
      formIsValid++
    }
    
  } 
  
  for (let i = 0; i < question3.length; i++) {
    if (question3[i].checked == true) {
      formIsValid++ 
    }
    
  }

  console.log("the form is valid = "+formIsValid)
    if (formIsValid === 3) {
     submitForm()
    }

}) 
