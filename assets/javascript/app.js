var question1 = {
    question: "What does BMW stand for?",
    choices: ["Best Motor Works", "Beautiful Mechanical Wonders", "Bavarian Money Wagens", "Bavarian Motor Works"],
    correctAnswer: 3,
}

var question2 = {
    question: "What is the fastest production vehicle?",
    choices: ["Ford Crown Victoria", "Any Honda Ever", "Koenigsegg Agera RS", "GMC Delorean"],
    correctAnswer: 2
} 

var question3 = {
    question: "What kind of car was the General Lee?",
    choices: ["1969 Dodge Charger", "1905 Ford Focus", "1776 Jeep Patriot", "1993 Toyota Supra"],
    correctAnswer: 0
}

var question4 = {
    question: "what kind of car does matthew mcconaughey drive in dazed and confused?",
    choices: ["Chevrolet Chevelle SS", "1973 Pontiac Firebird", "1975 Chevy Camero", "2015 BMW M4"],
    correctAnswer: 0
}

var question5 = { 
    question: "what does an internal combustion engine need in order to run",
    choices: ["Air/Fuel", "Compression", "Spark/Ignition", "All of the above"],
    correctAnswer: 3
}
var newQ = $('<h2>'+question1.question+'</h2>')

var timer = 30;

var correct = 0;

var incorrect = 0;


console.log(question1.question);
console.log(question1.choices);

//function that counts down the timer
    function countD(){
        timer --
        if(timer === 0){
            alert("too slow")
        }
    }
 
 //on click function to start the game
    $("#start").on("click", function(){
    setInterval(countD, 1000);
    console.log(count);
    });

// function to display trivia question and choices
    function showTrivia(){
        $('.time').append("<h2>"+timer+"</h2>");
        $('#Qulestion').append(question1.question);

        for(var i = 0; i < question1.choices.length; i++){
            var answers = $('<li>'+question1.choices[i]+'</li>');
            $('#answers').append(answers);
            console.log(question1.choices[i]);
        }
    }


    //function that compares user click to correctAnswer
    showTrivia();
    