$(document).ready(function(){

    var question1 = {
        question: "What does BMW stand for?",
        choices: ["Best Motor Works", "Bavarian Motor Works", "Bavarian Money Wagens", "Beautiful Mechanical Wonders"],
        correctAnswer: 1,
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
        question: "Which car holds the fastest lap around the Nurburgring?",
        choices: ["Lamborghini Aventador SVJ", "Pontiac Firebird", "Reliant Robin", "Aston Martin DB11"],
        correctAnswer: 0
    }

    var question5 = { 
        question: "what does an internal combustion engine need in order to run",
        choices: ["Air/Fuel", "Compression", "Spark/Ignition", "All of the above"],
        correctAnswer: 3
    }

    var myVar;

    var timer = 10;

    var correct = 0;

    var incorrect = 0;

    console.log(question1.question);
    console.log(question1.choices);

    //on click function to start the game
    $("#start").on("click", function(){

        $("#start").hide();
        $('.jumbotron').show();

         myVar = setInterval(countD, 1000);

    });

    //function that counts down the timer
        function countD(){
            timer --;

            $('#time').empty();
            $('#time').append("<h2 class='timme'>Time Left: "+timer+"</h2>");

            if(timer === 0){
                
                timer = 10;
                $("#start").show();
                $('.jumbotron').hide();
                alert("too slow")
                clearInterval(myVar);
            }
        }
    //function that resets DOM    
        function clrA(){
            timer = 10;
            $('h2').empty();
            $('#time').empty();
            $('h4').remove();
        }

        //function to show timer correct/incorrect
        function showIt(){
            $('#time').append("<h2>Time Left: "+timer+"</h2>");
            $('#win').append("<h2>Correct: "+correct+"</h2>");
            $('#loss').append("<h2>Incorrect: "+incorrect+"</h2>");
        }

    // functions to display trivia questions and choices
        function showTrivia1(){

            showIt();
            $('#Quest').append("<h2 class = QSTN>" + question1.question + "</h2>");

            for(var i = 0; i < question1.choices.length; i++){
              
                $('#choices').append('<h4 id="' + [i] + '">'+question1.choices[i]+"</h4>");
                $("<h4>").addClass([i]);
                console.log(question1.choices[i]);
            }
            //on click event to see if you're correct or not
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

                    incorrect++;
                    $("#loss").empty();
                    $('#loss').append("<h2>Incorrect: "+incorrect+"</h2>");
                    alert('Wrong')
                }
            });
        }    

        function showTrivia2(){
            
            showIt();
            $('#Quest').append("<h2 class = QSTN>" + question2.question + "</h2>");

            for(var i = 0; i < question2.choices.length; i++){
 
                $('#choices').append('<h4 id="' + [i] + '">'+question2.choices[i]+"</h4>");
                $("<h4>").addClass([i]);
                console.log(question2.choices[i]);

            }
            $("h4").on("click", function(){
                let ChId = event.target.id;
                console.log(ChId);
                if(ChId == question2.correctAnswer){

                    correct++;
                    alert("Correct");
                    clrA();
                    showTrivia3();
                }
                else{
                    incorrect ++;
                    alert('Wrong');
                }
            });
        }
        
        function showTrivia3(){
            
            showIt();
            $('#Quest').append("<h2 class = QSTN>" + question3.question + "</h2>");

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

                    correct++;
                    alert("Correct");
                    clrA();
                    showTrivia4();

                }
                else{

                    incorrect ++;
                    alert('Wrong')
                }
            });
        } 

        function showTrivia4(){
            
            showIt();
            $('#Quest').append("<h2 class = QSTN>" + question4.question + "</h2>");

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
                    $("#loss").empty();
                    $('#loss').append("<h2>Incorrect: "+incorrect+"</h2>");
                    alert('Wrong')
                }
            });
        } 

        function showTrivia5(){
           
            showIt();
            $('#Quest').append("<h2 class = QSTN>" + question5.question + "</h2>");

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
                    $('#Quest').append("<h1 class = uWin>You Win!</h1>");
                    clearInterval(myVar);
                    clrA();
                    

                }
                else{

                    incorrect++
                    $("#loss").empty();
                    $('#loss').append("<h2>Incorrect: "+incorrect+"</h2>");
                    alert('Wrong')
                }
            });
        } 

        //calls show1 to getr goin
        showTrivia1();
});    