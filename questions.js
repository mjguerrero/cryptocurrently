// DOM SELECTORS
const assessForm = document.getElementById("assessmentForm")
const question1 = document.getElementById('question1')
const question2 = Array.from(document.querySelectorAll('input[name = "experience"]'))
const question3 = Array.from(document.querySelectorAll('input[name = "term"]'))
const question4 = Array.from(document.querySelectorAll('input[name = "invest"]'))
const submitBtn = document.getElementById('submitComplete')
console.log(question1.value)
// FUNCTIONS
const submitForm = e => {
  
  
  // GET ANSWERS FROM FORM
  let answer1
  let answer2
  let answer3
  let answer4
  
  answer1 = question1.value
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
  question4.forEach(option => {
    if(option.checked) {
      answer4 = option.id
     
    }
  })

 
  //let coinName; <--- coinName needs a value after the assessment is done
  let coinName1 = 'bitcoin';
  let coinName2 = 'dogecoin';
  localStorage.setItem('coinName1', coinName1)
  localStorage.setItem('coinName2', coinName2)
  window.location.assign("./cryptocur.html")


  // MAKE A FETCH FROM API
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${answer1}`
  fetch(url)
    .then(res => res.json())
    .then(data => {
    console.log("data", data)
    localStorage.setItem ('answer1', 'answer2', 'answer3', data);
    window.location.replace("./cryptocur.html")
    })

}


// EVENT LISTNERS

submitBtn.addEventListener('click', function(e){
  // Run validation
  e.preventDefault()
  let formIsValid = false
  
  for (let i = 0; i < question3.length; i++) {
    if (question3[i].checked == true) {
      formIsValid = true
    
    }
    
  } console.log("checking q3")
  console.log("the form is valid = "+formIsValid)
  for (let i = 0; i < question4.length; i++) {
    if (question4[i].checked == true) {
      formIsValid = true 
    
    }
    
  }console.log("checking q4")
  console.log("the form is valid = "+formIsValid)
    if (formIsValid === true) {
     submitForm()
      
    }

}) 
