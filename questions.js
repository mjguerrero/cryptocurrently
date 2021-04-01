// DOM SELECTORS
const question1 = document.getElementById('question1')
const question2 = Array.from(document.querySelectorAll('input[name = "experience"]'))
const question3 = Array.from(document.querySelectorAll('input[name = "term"]'))
const question4 = Array.from(document.querySelectorAll('input[name = "invest"]'))
const submitBtn = document.getElementById('submitComplete')


// FUNCTIONS
const submitForm = e => {
  // add form validation:
  // if the answers are not undefined, continue,
  // if answers are undefined, display error message

  e.preventDefault()


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
      console.log('answer1', 'answer2', 'answer3', 'answer4')
    }
  })


  // MAKE A FETCH WITH ANSWERS
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${answer1}`
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log("data", data)
    localStorage.setItem ('responseData', data);
    window.location.replace("./cryptocur.html")
    })
}


// EVENT LISTNERS
submitBtn.addEventListener('click', submitForm)