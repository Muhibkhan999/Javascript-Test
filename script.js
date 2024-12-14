var questions = [
            { question: "What is the output of `console.log(typeof NaN)`?", options: ["number", "string", "boolean", "undefined"], points: 10 },
            { question: "What will `[] == ![]` return?", options: ["true", "false", "undefined", "error"], points: 10 },
            { question: "Which of the following is a way to create an object in JavaScript?", options: ["{};", "Object.create();", "new Object();", "All of the above"], points: 10 },
            { question: "How do you check if an object is an array?", options: ["Array.isArray()", "typeof obj == 'array'", "obj instanceof Array", "All of the above"], points: 10 },
            { question: "What is the value of `null == undefined`?", options: ["true", "false", "null", "undefined"], points: 10 },
            { question: "Which of the following methods is used to add an element to the beginning of an array?", options: ["push()", "pop()", "shift()", "unshift()"], points: 10 },
            { question: "How do you create a new promise in JavaScript?", options: ["new Promise()", "new PromiseFunction()", "new PromiseObject()", "Promise.new()"], points: 10 },
            { question: "What will `console.log(0.1 + 0.2 == 0.3)` output?", options: ["true", "false", "undefined", "error"], points: 10 },
            { question: "Which of these is used to handle exceptions in JavaScript?", options: ["try/catch", "if/else", "finally", "all of the above"], points: 10 },
            { question: "What is the default value of `this` inside a method in JavaScript?", options: ["global object", "undefined", "method itself", "null"], points: 10 },
            { question: "What will `console.log([1] == [1])` output?", options: ["true", "false", "error", "undefined"], points: 10 },
            { question: "Which of the following methods is used to remove the last element from an array?", options: ["pop()", "shift()", "push()", "unshift()"], points: 10 },
            { question: "What does `JSON.stringify()` do?", options: ["Converts JavaScript objects to JSON strings", "Converts JSON strings to JavaScript objects", "Prints JSON objects", "None of the above"], points: 10 },
            { question: "Which of the following is NOT a falsy value in JavaScript?", options: ["false", "null", "undefined", "0", "1"], points: 10 },
            { question: "What will `console.log(1 + '1')` output?", options: ["11", "2", "error", "undefined"], points: 10 },
            { question: "What is the purpose of the `bind()` method in JavaScript?", options: ["To bind a function to an object", "To create a copy of a function", "To invoke a function immediately", "None of the above"], points: 10 },
            { question: "What does `typeof NaN` return?", options: ["number", "string", "object", "undefined"], points: 10 },
            { question: "Which of these is used to convert a string to a number?", options: ["Number()", "parseInt()", "parseFloat()", "All of the above"], points: 10 },
            { question: "How do you declare a constant variable in JavaScript?", options: ["const", "let", "var", "constant"], points: 10 },
            { question: "What does the `this` keyword refer to inside a method?", options: ["The object the method is called on", "The global object", "The method itself", "undefined"], points: 10 },
            { question: "How do you create a function in JavaScript?", options: ["function myFunction() {}", "function: myFunction() {}", "myFunction() => {}", "None of the above"], points: 10 },
            { question: "Which of the following is a correct way to declare an array in JavaScript?", options: ["[]", "new Array()", "Array()", "All of the above"], points: 10 },
            { question: "Which statement is used to stop a loop in JavaScript?", options: ["stop", "exit", "break", "continue"], points: 10 },
            { question: "How can you get the type of a variable in JavaScript?", options: ["typeof", "instanceof", "typeOf", "None of the above"], points: 10 },
            { question: "What is the output of `console.log(5 == '5')`?", options: ["true", "false", "undefined", "error"], points: 10 },
            { question: "Which of these is used to iterate over an array?", options: ["for loop", "forEach()", "map()", "All of the above"], points: 10 },
            { question: "What is a closure in JavaScript?", options: ["A function that remembers its lexical scope", "A block of code that is executed after a function", "A variable defined inside a function", "None of the above"], points: 10 },
            { question: "What does `Array.prototype.map()` do?", options: ["Creates a new array by applying a function to each element", "Filters an array based on a condition", "Converts an array to a string", "None of the above"], points: 10 },
            { question: "Which of the following is used to stop code execution for a moment in JavaScript?", options: ["setTimeout()", "clearTimeout()", "setInterval()", "clearInterval()"], points: 10 },
            { question: "Which of the following is NOT a primitive type in JavaScript?", options: ["string", "number", "object", "boolean"], points: 10 },
            { question: "What will `console.log(0 == false)` output?", options: ["true", "false", "undefined", "error"], points: 10 }
        ];
        window.userAnswers = []; // To store the user's answers

        // Function to render the quiz
        function renderQuiz() {
            var quizContainer = document.getElementById("quiz-container");

            for (var i = 0; i < questions.length; i++) {
                var questionDiv = document.createElement("div");
                questionDiv.className = "question";

                var questionText = document.createElement("p");
                questionText.textContent = questions[i].question;
                questionDiv.appendChild(questionText);

                for (var j = 0; j < questions[i].options.length; j++) {
                    var radioButton = document.createElement("input");
                    radioButton.type = "radio";
                    var radioName = `question_${i}`;
                    radioButton.setAttribute("name", radioName);
                    radioButton.setAttribute("value", questions[i].options[j]);

                    var label = document.createElement("label");
                    label.textContent = questions[i].options[j];

                    var lineBreak = document.createElement("br");

                    questionDiv.appendChild(radioButton);
                    questionDiv.appendChild(label);
                    questionDiv.appendChild(lineBreak);
                }

                quizContainer.appendChild(questionDiv);
            }
        }

        // Function to start the quiz
        function startQuiz() {
            // Hide the Start button and show the quiz container
            document.getElementById("startBtn").style.display = "none";
            document.getElementById("quiz-container").style.display = "block";
            document.getElementById("submitButton").style.display = "inline-block"; // Show submit button

            renderQuiz(); // Render the quiz
        }

        


// Function to submit the quiz and show the score
function submitQuiz() {


var score = 0;
    window.userAnswers = []; // Reset answers array

    var allAnswered = true; // Flag to check if all questions are answered

    for (var i = 0; i < questions.length; i++) {
        var radioName = `question_${i}`;
        var radios = document.getElementsByName(radioName);
        var questionAnswered = false; // Flag to check if the current question has an answer

        for (var j = 0; j < radios.length; j++) {
            if (radios[j].checked) {
                // Store the user's answer
                window.userAnswers.push({
                    questionIndex: i,
                    answer: radios[j].value
                });

                // Check if the answer is correct
                if (radios[j].value === questions[i].options[0]) {
                    score++;
                }
                questionAnswered = true;
                break;
            }
        }

        // If any question is not answered, set the flag to false
        if (!questionAnswered) {
            allAnswered = false;
        }
    }

    // If not all questions are answered, alert the user
    if (!allAnswered) {
        alert("Please complete the entire quiz before submitting.");
    } else {
        // Hide the quiz container and show the score container
        document.getElementById("quiz-container").style.display = "none";
        document.getElementById("score-container").style.display = "block";

        // Hide the submit button
        document.getElementById("submitButton").style.display = "none"; // Hide the submit button

        // Show the restart button
        document.getElementById("restartBtn").style.display = "block"; // Show the restart button

        // Get the score element
        var scoreElement = document.getElementById("score");

        // Create and append score text
        var scoreText = document.createElement("p");
        scoreText.innerHTML = `Your score: ${score} / ${questions.length}`;
        scoreElement.appendChild(scoreText);

        // Calculate the percentage
        var percentage = (score / questions.length) * 100;

        // Create and append percentage text
        var percentageText = document.createElement("p");
        percentageText.innerHTML = `Percentage: ${percentage.toFixed(2)}%`;
        scoreElement.appendChild(percentageText);

        // Determine the grade based on percentage
        var grade = '';
        if (percentage >= 90) {
            grade = 'A';
        } else if (percentage >= 80) {
            grade = 'B';
        } else if (percentage >= 70) {
            grade = 'C';
        } else if (percentage >= 60) {
            grade = 'D';
        } else {
            grade = 'F';
        }

        // Create and append grade text
        var gradeText = document.createElement("p");
        gradeText.innerHTML = `Grade: ${grade}`;
        scoreElement.appendChild(gradeText);

        // Enable the "See Answers" button after quiz is completed
        document.getElementById("seeAnswersBtn").disabled = false;
    }
}



        // Function to display the user's answers and correctness in the modal
        function seeAnswers() {
            var answersDiv = document.getElementById("answers");
            answersDiv.innerHTML = ''; // Clear any previous answers

            // Loop through the answers and display them
            for (var i = 0; i < window.userAnswers.length; i++) {
                var answerItem = document.createElement("div");
                answerItem.className = "answer-item";

                var questionIndex = window.userAnswers[i].questionIndex;
                var userAnswer = window.userAnswers[i].answer;
                var correctAnswer = questions[questionIndex].options[0]; // Assuming the first option is the correct one

                // Display the question with the user's answer
                var answerText = document.createElement("p");
                answerText.textContent = "Question: " + questions[questionIndex].question;
                answerItem.appendChild(answerText);

                // Create result text to show if the answer is correct or not
                var resultText = document.createElement("p");
                resultText.textContent = "Your answer: " + userAnswer;

                // Show the correct answer if the user's answer is wrong
                if (userAnswer === correctAnswer) {
                    resultText.textContent = resultText.textContent + " (Correct)";
                    resultText.className = "correct";
                } else {
                    resultText.textContent = resultText.textContent + " (Wrong)";
                    resultText.className = "wrong";
                    
                    // Also show the correct answer
                    var correctAnswerText = document.createElement("p");
                    correctAnswerText.textContent = "Correct answer: " + correctAnswer;
                    correctAnswerText.className = "correct";
                    answerItem.appendChild(correctAnswerText);
                }

                answerItem.appendChild(resultText);
                answersDiv.appendChild(answerItem);
            }

            // Show the modal
            var modal = document.getElementById("myModal");
            modal.style.display = "block";
        }

        // Function to close the modal
        function closeModal() {
            var modal = document.getElementById("myModal");
            modal.style.display = "none";
        }

        // Function to restart the quiz
        function restartQuiz() {
            // Hide the score container and restart button
            document.getElementById("score-container").style.display = "none";
            document.getElementById("restartBtn").style.display = "none";
            document.getElementById("seeAnswersBtn").disabled = true;

            // Reset the quiz container
            document.getElementById("quiz-container").style.display = "block";
            document.getElementById("submitButton").style.display = "inline-block"; // Show submit button again

            // Clear the user's answers
            window.userAnswers = [];

            // Re-render the quiz
            document.getElementById("quiz-container").innerHTML = ''; // Clear the existing quiz content
            renderQuiz();
        }
