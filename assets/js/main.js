const questions = document.querySelectorAll('.question');
let currentQuestionIndex = 0;

function showNextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        questions[currentQuestionIndex].style.display = 'none';
        currentQuestionIndex++;
        questions[currentQuestionIndex].style.display = 'block';
    } else {
        showResultsScreen(); // Change the color to match your design
    }
}

const answerButtons = document.querySelectorAll('.answer');

function showResultsScreen(color) {
    alert('Quiz Completed. Showing Results Screen!'); // Replace this with your logic

    document.body.style.backgroundColor = color;
    document.querySelector('.quizContainer').style.display = 'none';
    document.querySelector('.results-container').style.display = 'block';
}



function handleButtonClick(button) {
    if (currentQuestionIndex === 0 && button.textContent === 'No') {
        showResultsScreen('#00D2BE'); // Mercedes color
    } else if (currentQuestionIndex === 1 && button.textContent === 'I\'ll look at my team...') {
        showResultsScreen('#1E41FF'); // Alpha Tauri color
    } else if (currentQuestionIndex === 2 && button.textContent === 'It\'s my favorite feeling!') {
        showResultsScreen('#DC0000'); // Ferrari color
    } else if (currentQuestionIndex === 4 && button.textContent === 'Fame') {
        showResultsScreen('#FF8700'); // Mclaren color
    } else if (currentQuestionIndex === 4 && button.textContent === 'Money') {
        showResultsScreen('#006F62'); // Aston Martin color
    } else if (currentQuestionIndex === 5 && button.textContent === 'Yes, I\'m an academic weapon.') {
        showResultsScreen('#FFFFFF'); // Williams color
    } else if (currentQuestionIndex === 6 && button.textContent === 'Cotton Candy tastes better than it looks') {
        showResultsScreen('#0090FF'); // Alpine color
    } else if (currentQuestionIndex === 7 && button.textContent === 'Yes') {
        showResultsScreen('#595959'); // Haas color
    } else if (currentQuestionIndex === 8 && button.textContent === 'Yes.') {
        showResultsScreen('#1E41FF'); // Red Bull color
    } else if (currentQuestionIndex === 8 && button.textContent === 'No') {
        showResultsScreen('#900000'); // Alfa Romeo color
    } else {
        showNextQuestion();
    }
}



// Display the first question
// Display the first question
questions.forEach((question, index) => {
    question.style.display = index === 0 ? 'block' : 'none';
});

