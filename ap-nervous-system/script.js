// --- APP LOGIC ---
let currentExamQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedOptionIndex = null;
const QUESTIONS_PER_MODULE = 25; 

// DOM Elements
const configScreen = document.getElementById('config-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const startBtn = document.getElementById('start-btn');
const errorMsg = document.getElementById('error-msg');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options');
const progressText = document.getElementById('progress');
const submitBtn = document.getElementById('submit-btn');
const nextBtn = document.getElementById('next-btn');
const explanationDiv = document.getElementById('explanation');
const finalScoreText = document.getElementById('final-score');

// Fisher-Yates Shuffle Algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Start Exam Listener
startBtn.addEventListener('click', () => {
    const selectedModules = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);
    
    if (selectedModules.length === 0) {
        errorMsg.style.display = 'block';
        return;
    }

    // Build the exam array based on configurations
    currentExamQuestions = [];
    selectedModules.forEach(mod => {
        let modQuestions = questionBank.filter(q => q.module === mod || (mod === "Final Exam" && q.module !== "Final Exam")); 
        modQuestions = shuffleArray(modQuestions);
        currentExamQuestions = currentExamQuestions.concat(modQuestions.slice(0, QUESTIONS_PER_MODULE));
    });

    currentExamQuestions = shuffleArray(currentExamQuestions);

    if (currentExamQuestions.length === 0) {
        alert("No questions found for the selected modules. Please update your questions.js file.");
        return;
    }

    // Transition UI
    configScreen.classList.remove('active');
    quizScreen.classList.add('active');
    loadQuestion();
});

// Load Question Data
function loadQuestion() {
    const q = currentExamQuestions[currentQuestionIndex];
    progressText.innerText = `Question ${currentQuestionIndex + 1} of ${currentExamQuestions.length} | Module: ${q.module}`;
    questionText.innerText = q.question;
    optionsContainer.innerHTML = '';
    
    // Reset States
    explanationDiv.style.display = 'none';
    submitBtn.style.display = 'block';
    submitBtn.disabled = true;
    nextBtn.classList.add('hidden');
    selectedOptionIndex = null;

    // Inject Buttons
    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onclick = () => selectOption(btn, index);
        optionsContainer.appendChild(btn);
    });
}

// Handle Option Selection
function selectOption(btn, index) {
    // Lock out selection if already answered
    if (!nextBtn.classList.contains('hidden')) return; 
    
    document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    selectedOptionIndex = index;
    submitBtn.disabled = false;
}

// Submission and Grading Logic
submitBtn.addEventListener('click', () => {
    const q = currentExamQuestions[currentQuestionIndex];
    const buttons = document.querySelectorAll('.option-btn');
    
    // Lock buttons
    buttons.forEach(b => b.disabled = true);

    // Grade logic
    if (selectedOptionIndex === q.answer) {
        buttons[selectedOptionIndex].classList.add('correct');
        score++;
    } else {
        buttons[selectedOptionIndex].classList.add('incorrect');
        buttons[q.answer].classList.add('correct');
    }

    // Reveal Explanation
    explanationDiv.innerHTML = `<strong>Explanation:</strong> ${q.explanation}`;
    explanationDiv.style.display = 'block';
    
    // Toggle Buttons
    submitBtn.style.display = 'none';
    nextBtn.classList.remove('hidden');
    
    if (currentQuestionIndex === currentExamQuestions.length - 1) {
        nextBtn.innerText = "View Results";
    }
});

// Navigation Logic
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex >= currentExamQuestions.length) {
        // End of Quiz
        quizScreen.classList.remove('active');
        resultsScreen.classList.add('active');
        const percentage = Math.round((score / currentExamQuestions.length) * 100);
        finalScoreText.innerText = `Your Score: ${score}/${currentExamQuestions.length} (${percentage}%)`;
    } else {
        // Next Question
        loadQuestion();
    }
});
