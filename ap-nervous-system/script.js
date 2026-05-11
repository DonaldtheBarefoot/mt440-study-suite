/**
 * A&P: Nervous System (MT450) - Application Logic
 * Meticulously reviewed for robust execution and strict HTML ID correspondence.
 */

let currentQuestionIndex = 0;
let score = 0;
let activeExamPool = [];

// --- DOM Dictionary ---
// These variables must exactly match the IDs in your index.html file.
const DOM = {
    configSection: document.getElementById('config-section'),
    examSection: document.getElementById('exam-section'),
    resultsSection: document.getElementById('results-section'),
    errorMsg: document.getElementById('error-msg'),
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    progressText: document.getElementById('progress-text'),
    nextBtn: document.getElementById('next-btn'),
    hintContainer: document.getElementById('hint-container'),
    hintText: document.getElementById('hint-text'),
    finalScore: document.getElementById('final-score'),
    startBtn: document.getElementById('start-btn'),
    restartBtn: document.getElementById('restart-btn')
};

// --- Utility Functions ---

/**
 * Fisher-Yates Shuffle Algorithm
 * Randomizes array elements in place.
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * Retrieves checked categories robustly via attribute targeting.
 */
function getSelectedCategories() {
    if (!DOM.configSection) return [];
    const checkboxes = DOM.configSection.querySelectorAll('input[type="checkbox"]:checked');
    return Array.from(checkboxes).map(cb => cb.value);
}

// --- Core Application Flow ---

/**
 * Validates configuration and initializes the clinical simulation.
 */
function startExam() {
    const selectedCategories = getSelectedCategories();

    // Guard: Empty Selection
    if (selectedCategories.length === 0) {
        if (DOM.errorMsg) {
            DOM.errorMsg.style.display = 'block';
            DOM.errorMsg.innerText = "Clinical finding: No categories selected. Please select at least one to begin.";
        } else {
            alert("Please select at least one category to begin.");
        }
        return;
    }

    if (DOM.errorMsg) DOM.errorMsg.style.display = 'none';

    // Filter master array based on user selection
    const filteredQuestions = allQuestions.filter(q => selectedCategories.includes(q.category));

    // Deep copy to isolate the active session from the master bank
    activeExamPool = JSON.parse(JSON.stringify(filteredQuestions));

    // Shuffle question order and internal options
    shuffleArray(activeExamPool);
    activeExamPool.forEach(q => shuffleArray(q.options));

    currentQuestionIndex = 0;
    score = 0;

    // Transition UI
    if (DOM.configSection) DOM.configSection.classList.add('hidden');
    if (DOM.resultsSection) DOM.resultsSection.classList.add('hidden');
    if (DOM.examSection) DOM.examSection.classList.remove('hidden');

    renderQuestion();
}

/**
 * Renders the active question and maps clinical hints.
 */
function renderQuestion() {
    const currentQuestion = activeExamPool[currentQuestionIndex];

    // Update Progress
    if (DOM.progressText) {
        DOM.progressText.innerText = `Question ${currentQuestionIndex + 1} of ${activeExamPool.length} | Category: ${currentQuestion.category}`;
    }

    // Render Question
    if (DOM.questionText) {
        DOM.questionText.innerText = currentQuestion.question;
    }

    // Render Options
    if (DOM.optionsContainer) {
        DOM.optionsContainer.innerHTML = ''; // Purge previous elements
        
        currentQuestion.options.forEach(option => {
            const button = document.createElement('button');
            button.className = "w-full text-left p-4 mb-3 rounded-xl border-2 border-slate-200 hover:bg-slate-50 hover:border-indigo-400 transition-all focus:outline-none";
            button.innerText = option;
            button.onclick = () => handleAnswerSelection(button, option, currentQuestion.answer, currentQuestion.hint);
            DOM.optionsContainer.appendChild(button);
        });
    }

    // Reset UI State for new question
    if (DOM.hintContainer) DOM.hintContainer.classList.add('hidden');
    if (DOM.nextBtn) DOM.nextBtn.classList.add('hidden');
}

/**
 * Evaluates selection, locks the UI, and reveals clinical findings.
 */
function handleAnswerSelection(selectedElement, selectedOption, correctAnswer, hint) {
    if (!DOM.optionsContainer) return;
    
    const buttons = DOM.optionsContainer.getElementsByTagName('button');

    // UI Lockout
    for (let btn of buttons) {
        btn.disabled = true;
        btn.style.pointerEvents = 'none'; // Prevent further hover interactions
        
        // Universally reveal correct answer
        if (btn.innerText === correctAnswer) {
            btn.classList.remove('border-slate-200', 'hover:bg-slate-50');
            btn.classList.add('bg-emerald-100', 'border-emerald-500', 'text-emerald-900', 'font-bold');
        }
    }

    // Evaluate user selection
    if (selectedOption === correctAnswer) {
        score++;
    } else {
        selectedElement.classList.remove('border-slate-200');
        selectedElement.classList.add('bg-rose-100', 'border-rose-500', 'text-rose-900');
    }

    // Reveal Clinical Hint
    if (DOM.hintContainer && DOM.hintText) {
        DOM.hintText.innerText = hint;
        DOM.hintContainer.classList.remove('hidden');
    }

    // Reveal Next Button
    if (DOM.nextBtn) DOM.nextBtn.classList.remove('hidden');
}

/**
 * Advances the simulation sequence.
 */
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < activeExamPool.length) {
        renderQuestion();
    } else {
        finishExam();
    }
}

/**
 * Concludes the simulation and calculates performance metrics.
 */
function finishExam() {
    if (DOM.examSection) DOM.examSection.classList.add('hidden');
    if (DOM.resultsSection) DOM.resultsSection.classList.remove('hidden');

    if (DOM.finalScore) {
        const percentage = Math.round((score / activeExamPool.length) * 100);
        DOM.finalScore.innerText = `Clinical Impression: ${score} / ${activeExamPool.length} (${percentage}%)`;
    }
}

/**
 * Resets the application state to the configuration interface.
 */
function restartApp() {
    if (DOM.resultsSection) DOM.resultsSection.classList.add('hidden');
    if (DOM.configSection) DOM.configSection.classList.remove('hidden');
    
    // Purge checkbox selections
    if (DOM.configSection) {
        const checkboxes = DOM.configSection.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(cb => cb.checked = false);
    }
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    if (DOM.startBtn) DOM.startBtn.addEventListener('click', startExam);
    if (DOM.nextBtn) DOM.nextBtn.addEventListener('click', nextQuestion);
    if (DOM.restartBtn) DOM.restartBtn.addEventListener('click', restartApp);
});
