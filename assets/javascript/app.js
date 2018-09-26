var questions = [{
    question: "What does BMW stand for?",
    choices: ["Best Motor Works", "Beautiful Mechanical Wonders", "Bavarian Money Wagens", "Bavarian Motor Works"],
    correctAnswer: 3
}, {
    question: "What is the fastest production vehicle?",
    choices: ["Ford Crown Victoria", "Any Honda Ever", "Koenigsegg Agera RS", "GMC Delorean"],
    correctAnswer: 2
}, {
    question: "What kind of car was the General Lee?",
    choices: ["1969 Dodge Charger", "1905 Ford Focus", "1776 Jeep Patriot", "1993 Toyota Supra"],
    correctAnswer: 0
}, {
    question: "what kind of car does matthew mcconaughey drive in dazed and confused?",
    choices: ["Chevrolet Chevelle SS", "1973 Pontiac Firebird", "1975 Chevy Camero", "2015 BMW M4"],
    correctAnswer: 0
}, {
    question: "what does an internal combustion engine need in order to run",
    choices: ["Air/Fuel", "Compression", "Spark/Ignition", "All of the above"],
    correctAnswer: 3
}];

$(document).ready(function () {
 
    let varID;
    let count = 0;
    function countD(){
        count ++;
        console.log(count);
        $('#count').text(count);
    }

    $("#start").on("click", function(){
    setInterval(countD, 1000);
    console.log(count);
    });

    function showTrivia(){
        $('#Question').html(questions.question);
    }

    function countD(){

    }
});    