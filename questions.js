Survey
    .StylesManager
    .applyTheme("modern");

const surveyValueChanged = function (sender, options) {
    let el = document.getElementById(options.name);
    if (el) {
        el.value = options.value;
    }
};
//questions to display to user
const json = {
    questions: [
        {
          type: "dropdown",
          isRequired: true,
          name: "Which currency would you like to purchase in?",
          choices: ['USD', 'CAD', 'GBP', 'EUR', 'Other']
            
        },{
          type: "checkbox",
          name: "How many months of experience do you have with crypto currency",
          isRequired: true,
          colRow: 2,
          choices: ["0-3 months", '3-6 months', '6-12 months', '12 months +']
        }, {
          type: "checkbox",
          name: "Is this for a long term or short term investment?",
          isRequired: true,
          colRow: 2,
          choices: ["long-term", 'short-term', 'undecided',]
        }, {
          type: "checkbox",
          title: "How much are you looking to invest?",
          isRequired: true,
          colCount: 2,
          choices: ['$300 or less', '$300-$500', '$500+', 'undecided',]
                
        }
    ]
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document.querySelector('#surveyResult')
            });
    $("#surveyElement").Survey({model: survey, onValueChanged: surveyValueChanged});