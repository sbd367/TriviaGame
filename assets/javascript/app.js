$(document).ready(function(){

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

    var placeholder;

    var timer = 5;

    var correct = 0;

    var incorrect = 0;

    $('#Question').append("<h2>this</h2>");
    console.log(question1.question);
    console.log(question1.choices);

    //on click function to start the game
    $("#start").on("click", function(){

        $("#start").hide();
        $('.jumbotron').show();

        // let myVar = setInterval(countD, 1000);

    });

    //function that counts down the timer
        function countD(){
            // timer --;

            $('.time').empty();
            $('.time').append("<h2>"+timer+"</h2>");

            if(timer === 0){
                alert("too slow")
                clearInterval(myVar);
            }
        }
    //function that resets DOM    
        function clrA(){
            $('h2').empty();
            $('.time').empty();
            $('h4').remove();
        }

    // function to display trivia question and choices
        function showTrivia1(){
            $('.time').append("<h2>"+timer+"</h2>");
            $('#Quest').append("<h2>" + question1.question + "</h2>");
            $('.win').append("<h2>Correct: "+correct+"</h2>");
            $('.loss').append("<h2>Incorrect: "+incorrect+"</h2>");


            for(var i = 0; i < question1.choices.length; i++){
                // var answers = $('<h2>'+question1.choices[i]+'<h2>');
                $('#choices').append('<h4 id="' + [i] + '">'+question1.choices[i]+"</h4>");
                $("<h4>").addClass([i]);
                console.log(question1.choices[i]);
            }

            $("h4").on("click", function(){
                let ChId = event.target.id;
                console.log(ChId);
                if(ChId == question1.correctAnswer){

                    correct ++;
                    alert("Correct");
                    clrA();
                    showTrivia2();

                }
                else{

                    incorrect++
                    $(".loss").empty();
                    $('.loss').append("<h2>Incorrect: "+incorrect+"</h2>");
                    alert('Wrong')
                }
            });
        }    

        function showTrivia2(){
            $('.time').append("<h2>"+timer+"</h2>");
            $('#Quest').append("<h2>" + question2.question + "</h2>");
            $('.win').append("<h2>Correct: "+correct+"</h2>");
            $('.loss').append("<h2>Incorrect: "+incorrect+"</h2>");

            for(var i = 0; i < question2.choices.length; i++){
                // var answers = $('<h2>'+question1.choices[i]+'<h2>');
                $('#choices').append('<h4 id="' + [i] + '">'+question2.choices[i]+"</h4>");
                $("<h4>").addClass([i]);
                console.log(question2.choices[i]);
            }
            $("h4").on("click", function(){
                let ChId = event.target.id;
                console.log(ChId);
                if(ChId == question2.correctAnswer){
                    alert("Correct");
                    clrA();
                    showTrivia3();
                }
                else{
                    alert('Wrong')
                }
            });
        }
        
        function showTrivia3(){
            $('.time').append("<h2>"+timer+"</h2>");
            $('#Quest').append("<h2>" + question3.question + "</h2>");
            $('.win').append("<h2>Correct: "+correct+"</h2>");
            $('.loss').append("<h2>Incorrect: "+incorrect+"</h2>");

            for(var i = 0; i < question3.choices.length; i++){
                // var answers = $('<h2>'+question1.choices[i]+'<h2>');
                $('#choices').append('<h4 id="' + [i] + '">'+question3.choices[i]+"</h4>");
                $("<h4>").addClass([i]);
                console.log(question2.choices[i]);
            }
            $("h4").on("click", function(){
                let ChId = event.target.id;
                console.log(ChId);
                if(ChId == question3.correctAnswer){
                    alert("Correct");
                    clrA();
                    showTrivia4();
                }
                else{
                    alert('Wrong')
                }
            });
        } 
        function showTrivia4(){
            $('.time').append("<h2>"+timer+"</h2>");
            $('#Quest').append("<h2>" + question4.question + "</h2>");
            $('.win').append("<h2>Correct: "+correct+"</h2>");
            $('.loss').append("<h2>Incorrect: "+incorrect+"</h2>");


            for(var i = 0; i < question4.choices.length; i++){
                // var answers = $('<h2>'+question1.choices[i]+'<h2>');
                $('#choices').append('<h4 id="' + [i] + '">'+question4.choices[i]+"</h4>");
                $("<h4>").addClass([i]);
                console.log(question4.choices[i]);
            }

            $("h4").on("click", function(){
                let ChId = event.target.id;
                console.log(ChId);
                if(ChId == question4.correctAnswer){

                    correct ++;
                    alert("Correct");
                    clrA();
                    showTrivia5();

                }
                else{

                    incorrect++
                    $(".loss").empty();
                    $('.loss').append("<h2>Incorrect: "+incorrect+"</h2>");
                    alert('Wrong')
                }
            });
        } 

        function showTrivia5(){
            $('.time').append("<h2>"+timer+"</h2>");
            $('#Quest').append("<h2>" + question5.question + "</h2>");
            $('.win').append("<h2>Correct: "+correct+"</h2>");
            $('.loss').append("<h2>Incorrect: "+incorrect+"</h2>");


            for(var i = 0; i < question5.choices.length; i++){
                // var answers = $('<h2>'+question1.choices[i]+'<h2>');
                $('#choices').append('<h4 id="' + [i] + '">'+question5.choices[i]+"</h4>");
                $("<h4>").addClass([i]);
                console.log(question5.choices[i]);
            }

            $("h4").on("click", function(){
                let ChId = event.target.id;
                console.log(ChId);
                if(ChId == question5.correctAnswer){

                    correct ++;
                    alert("Correct");
                    clrA();
                    ;

                }
                else{

                    incorrect++
                    $(".loss").empty();
                    $('.loss').append("<h2>Incorrect: "+incorrect+"</h2>");
                    alert('Wrong')
                }
            });
        } 

        //function that compares user click to correctAnswer
            // $("h4").on("click", function(){
            //     let ChId = event.target.id;
            //     console.log(ChId);
            //     if(ChId == question1.correctAnswer){
            //         alert("Cgorrect");
            //         showTrivia2();
            //     }
            //     else{
            //         alert('Wrong')
            //     }
            // });
            
        

        // $("#Ch").on("click", function(){
        //     console.log("this");
        // });

        //function that compares user click to correctAnswer
        showTrivia1();
});    