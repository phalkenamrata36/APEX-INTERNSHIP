
// Practice Quiz Function
function checkAnswer() {

    let selectedAnswer = document.querySelector(
        'input[name="answer"]:checked'
    );

    let result = document.getElementById("quiz-result");

    if (selectedAnswer === null) {
        result.textContent = "Please select an answer!";
        return;
    }

    if (selectedAnswer.value === "a") {
        result.textContent = "Correct! Well Done! 🎉";
    } else {
        result.textContent = "Incorrect! Try Again.";
    }
}


// Contact Form Function
document.getElementById("contactForm").addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        let studentName = document.getElementById("name").value;

        let result = document.getElementById("form-result");

        result.textContent =
            "Thank you, " + studentName +
            "! Your message has been received.";

        document.getElementById("contactForm").reset();

    }
);
