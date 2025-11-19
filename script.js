// Quiz Data
const quizData = {
    science: {
        name: 'Science',
        icon: '🔬',
        questions: [
            {
                question: 'What is the chemical symbol for Gold?',
                options: ['Go', 'Gd', 'Au', 'Ag'],
                correct: 2,
                category: 'Chemistry'
            },
            {
                question: 'Which planet is known as the Red Planet?',
                options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
                correct: 1,
                category: 'Astronomy'
            },
            {
                question: 'What is the speed of light in vacuum?',
                options: ['300,000 km/s', '150,000 km/s', '450,000 km/s', '200,000 km/s'],
                correct: 0,
                category: 'Physics'
            },
            {
                question: 'Which gas do plants absorb from the atmosphere?',
                options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
                correct: 2,
                category: 'Biology'
            },
            {
                question: 'What is the smallest unit of life?',
                options: ['Atom', 'Molecule', 'Cell', 'Tissue'],
                correct: 2,
                category: 'Biology'
            },
            {
                question: 'How many bones are in the human body?',
                options: ['186', '206', '226', '246'],
                correct: 1,
                category: 'Biology'
            },
            {
                question: 'What is the boiling point of water at sea level?',
                options: ['90°C', '100°C', '110°C', '120°C'],
                correct: 1,
                category: 'Chemistry'
            },
            {
                question: 'Which element has the atomic number 1?',
                options: ['Helium', 'Hydrogen', 'Lithium', 'Beryllium'],
                correct: 1,
                category: 'Chemistry'
            },
            {
                question: 'What is the powerhouse of the cell?',
                options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Chloroplast'],
                correct: 2,
                category: 'Biology'
            },
            {
                question: 'How many chromosomes do humans have?',
                options: ['23', '46', '69', '92'],
                correct: 1,
                category: 'Biology'
            }
        ]
    },
    history: {
        name: 'History',
        icon: '📚',
        questions: [
            {
                question: 'In which year did World War II end?',
                options: ['1943', '1944', '1945', '1946'],
                correct: 2,
                category: 'Modern History'
            },
            {
                question: 'Who was the first President of the United States?',
                options: ['Thomas Jefferson', 'George Washington', 'John Adams', 'Benjamin Franklin'],
                correct: 1,
                category: 'American History'
            },
            {
                question: 'Which ancient wonder of the world is still standing?',
                options: ['Statue of Zeus', 'Colossus of Rhodes', 'Great Pyramid of Giza', 'Hanging Gardens of Babylon'],
                correct: 2,
                category: 'Ancient History'
            },
            {
                question: 'In which year did the Titanic sink?',
                options: ['1910', '1912', '1914', '1916'],
                correct: 1,
                category: 'Modern History'
            },
            {
                question: 'Who invented the printing press?',
                options: ['Galileo', 'Johannes Gutenberg', 'Leonardo da Vinci', 'Isaac Newton'],
                correct: 1,
                category: 'Renaissance'
            },
            {
                question: 'Which empire built the Great Wall of China?',
                options: ['Han Dynasty', 'Ming Dynasty', 'Qing Dynasty', 'Tang Dynasty'],
                correct: 1,
                category: 'Asian History'
            },
            {
                question: 'In what year did the French Revolution begin?',
                options: ['1787', '1789', '1791', '1793'],
                correct: 1,
                category: 'European History'
            },
            {
                question: 'Who was the first human to walk on the moon?',
                options: ['Buzz Aldrin', 'Neil Armstrong', 'John Glenn', 'Yuri Gagarin'],
                correct: 1,
                category: 'Space History'
            },
            {
                question: 'Which civilization built Machu Picchu?',
                options: ['Aztecs', 'Mayans', 'Incas', 'Olmecs'],
                correct: 2,
                category: 'Pre-Columbian History'
            },
            {
                question: 'In which year did Columbus reach the Americas?',
                options: ['1492', '1498', '1500', '1502'],
                correct: 0,
                category: 'Age of Exploration'
            }
        ]
    },
    geography: {
        name: 'Geography',
        icon: '🌍',
        questions: [
            {
                question: 'What is the capital of France?',
                options: ['Lyon', 'Marseille', 'Paris', 'Nice'],
                correct: 2,
                category: 'Europe'
            },
            {
                question: 'Which is the largest desert in the world?',
                options: ['Kalahari', 'Gobi', 'Sahara', 'Arabian'],
                correct: 2,
                category: 'Deserts'
            },
            {
                question: 'What is the longest river in the world?',
                options: ['Amazon', 'Yangtze', 'Nile', 'Mississippi'],
                correct: 2,
                category: 'Rivers'
            },
            {
                question: 'Which country has the most volcanoes?',
                options: ['Philippines', 'Japan', 'Indonesia', 'Chile'],
                correct: 2,
                category: 'Volcanoes'
            },
            {
                question: 'What is the capital of Japan?',
                options: ['Osaka', 'Kyoto', 'Tokyo', 'Yokohama'],
                correct: 2,
                category: 'Asia'
            },
            {
                question: 'Which is the highest mountain in the world?',
                options: ['K2', 'Everest', 'Kilimanjaro', 'Denali'],
                correct: 1,
                category: 'Mountains'
            },
            {
                question: 'How many continents are there?',
                options: ['5', '6', '7', '8'],
                correct: 2,
                category: 'Geography'
            },
            {
                question: 'What is the capital of Australia?',
                options: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
                correct: 2,
                category: 'Oceania'
            },
            {
                question: 'Which ocean is the largest?',
                options: ['Atlantic', 'Indian', 'Arctic', 'Pacific'],
                correct: 3,
                category: 'Oceans'
            },
            {
                question: 'What is the capital of Brazil?',
                options: ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Salvador'],
                correct: 2,
                category: 'South America'
            }
        ]
    },
    technology: {
        name: 'Technology',
        icon: '💻',
        questions: [
            {
                question: 'Who is known as the father of computers?',
                options: ['Alan Turing', 'Charles Babbage', 'Grace Hopper', 'Bill Gates'],
                correct: 1,
                category: 'Computing'
            },
            {
                question: 'In which year was the internet invented?',
                options: ['1969', '1977', '1985', '1991'],
                correct: 0,
                category: 'Internet'
            },
            {
                question: 'What does HTML stand for?',
                options: ['Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language', 'High Tech Modern Language'],
                correct: 0,
                category: 'Web Development'
            },
            {
                question: 'Which company developed the Java programming language?',
                options: ['Microsoft', 'Apple', 'Sun Microsystems', 'IBM'],
                correct: 2,
                category: 'Programming'
            },
            {
                question: 'What is the name of the largest social media platform?',
                options: ['Twitter', 'Instagram', 'Facebook', 'YouTube'],
                correct: 2,
                category: 'Social Media'
            },
            {
                question: 'Who is the co-founder of Microsoft?',
                options: ['Steve Ballmer', 'Paul Allen', 'Bill Gates', 'Steve Jobs'],
                correct: 2,
                category: 'Technology Companies'
            },
            {
                question: 'What does AI stand for?',
                options: ['Applied Intelligence', 'Artificial Intelligence', 'Automated Intelligence', 'Advanced Integration'],
                correct: 1,
                category: 'AI & ML'
            },
            {
                question: 'Which programming language is known for web development?',
                options: ['C++', 'Python', 'JavaScript', 'Java'],
                correct: 2,
                category: 'Web Development'
            },
            {
                question: 'What is the most used programming language in the world?',
                options: ['Java', 'C', 'Python', 'JavaScript'],
                correct: 2,
                category: 'Programming'
            },
            {
                question: 'What does GPU stand for?',
                options: ['Graphics Processing Unit', 'General Purpose Utility', 'Graphical Programming Utility', 'Global Processing Unit'],
                correct: 0,
                category: 'Hardware'
            }
        ]
    },
    sports: {
        name: 'Sports',
        icon: '⚽',
        questions: [
            {
                question: 'How many players are there in a football team?',
                options: ['9', '10', '11', '12'],
                correct: 2,
                category: 'Football'
            },
            {
                question: 'In which sport is the term "love" used?',
                options: ['Baseball', 'Tennis', 'Badminton', 'Volleyball'],
                correct: 1,
                category: 'Tennis'
            },
            {
                question: 'How many holes are in a standard golf course?',
                options: ['9', '15', '18', '21'],
                correct: 2,
                category: 'Golf'
            },
            {
                question: 'What is the highest score in a single frame of bowling?',
                options: ['100', '150', '200', '300'],
                correct: 3,
                category: 'Bowling'
            },
            {
                question: 'How many players are in a basketball team on court?',
                options: ['3', '4', '5', '6'],
                correct: 2,
                category: 'Basketball'
            },
            {
                question: 'What is the maximum score in a game of badminton?',
                options: ['15 points', '21 points', '25 points', '30 points'],
                correct: 2,
                category: 'Badminton'
            },
            {
                question: 'In which year was the first FIFA World Cup held?',
                options: ['1930', '1932', '1935', '1938'],
                correct: 0,
                category: 'Football'
            },
            {
                question: 'How long is an Olympic swimming pool?',
                options: ['25 meters', '45 meters', '50 meters', '75 meters'],
                correct: 2,
                category: 'Swimming'
            },
            {
                question: 'What is the national sport of India?',
                options: ['Football', 'Cricket', 'Hockey', 'Badminton'],
                correct: 2,
                category: 'National Sports'
            },
            {
                question: 'In which sport do you use a racquet and shuttlecock?',
                options: ['Tennis', 'Squash', 'Badminton', 'Racquetball'],
                correct: 2,
                category: 'Racquet Sports'
            }
        ]
    }
};

// Feature Details Data
const featureDetails = [
    {
        title: 'Diverse Topics',
        icon: '🎯',
        description: 'Explore a wide range of quiz categories covering multiple subjects and knowledge areas. From Science and History to Technology and Sports, there\'s something for everyone!',
        samples: [
            { title: '🔬 Science', text: 'Chemistry, Physics, Biology, Astronomy - Test your scientific knowledge' },
            { title: '📚 History', text: 'Modern History, Renaissance, Ancient History - Journey through time' },
            { title: '🌍 Geography', text: 'Countries, Continents, Landmarks - Explore the world' },
            { title: '💻 Technology', text: 'Programming, Web Dev, AI & ML - Master modern tech' }
        ]
    },
    {
        title: 'Quick & Fun',
        icon: '⚡',
        description: 'Experience fast-paced, engaging quizzes designed to keep you entertained while testing your knowledge. Each quiz is perfectly timed to maintain optimal challenge levels.',
        samples: [
            { title: '⏱️ 10 Questions', text: 'Each quiz contains exactly 10 questions for a quick session' },
            { title: '🎮 Interactive', text: 'Real-time feedback and instant answer validation' },
            { title: '🎨 Engaging UI', text: 'Beautiful, responsive interface for smooth experience' },
            { title: '💡 Smart Questions', text: 'Well-crafted questions with varying difficulty levels' }
        ]
    },
    {
        title: 'Instant Results',
        icon: '📊',
        description: 'Get comprehensive performance analysis immediately after completing your quiz. View detailed breakdowns of correct and incorrect answers with explanations.',
        samples: [
            { title: '📈 Score Breakdown', text: 'See exactly how many questions you got right and wrong' },
            { title: '🏆 Grade Display', text: 'Instant grade assignment from A+ to F based on performance' },
            { title: '⏰ Time Tracking', text: 'Know exactly how long you spent on the quiz' },
            { title: '📋 Detailed Review', text: 'Review each question with your answer and correct solution' }
        ]
    },
    {
        title: 'Track Progress',
        icon: '🏆',
        description: 'Monitor your improvement over time as you retake quizzes and explore different categories. Build your knowledge gradually and achieve mastery!',
        samples: [
            { title: '📊 Performance Stats', text: 'Track your scores across different quiz categories' },
            { title: '🎯 Progress Goals', text: 'Set goals and work towards improving your scores' },
            { title: '🔄 Retake Options', text: 'Retake any quiz to improve your performance' },
            { title: '🌟 Achievement System', text: 'Earn achievements as you progress and master topics' }
        ]
    }
];

// Global Variables
let currentCategory = null;
let currentQuestionIndex = 0;
let selectedAnswers = [];
let score = 0;
let quizStartTime = null;
let questionStartTime = null;
let answers = [];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('Quiz app loaded');
});

// Feature Detail Modal Functions
function showFeatureDetail(index) {
    const feature = featureDetails[index];
    document.getElementById('detailIcon').textContent = feature.icon;
    document.getElementById('detailTitle').textContent = feature.title;
    document.getElementById('detailDescription').textContent = feature.description;
    
    const samplesContainer = document.getElementById('detailSamples');
    samplesContainer.innerHTML = '';
    
    feature.samples.forEach(sample => {
        const sampleDiv = document.createElement('div');
        sampleDiv.className = 'sample-item';
        sampleDiv.innerHTML = `
            <div class="sample-title">${sample.title}</div>
            <div class="sample-text">${sample.text}</div>
        `;
        samplesContainer.appendChild(sampleDiv);
    });
    
    document.getElementById('featureModal').classList.add('active');
}

function closeFeatureDetail() {
    document.getElementById('featureModal').classList.remove('active');
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    const modal = document.getElementById('featureModal');
    if (e.target === modal) {
        closeFeatureDetail();
    }
});

// Screen Navigation
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function startQuiz() {
    renderCategories();
    showScreen('categoryScreen');
}

function backToWelcome() {
    showScreen('welcomeScreen');
}

function goToHome() {
    currentCategory = null;
    currentQuestionIndex = 0;
    selectedAnswers = [];
    score = 0;
    answers = [];
    showScreen('welcomeScreen');
}

// Category Selection
function renderCategories() {
    const categoryGrid = document.getElementById('categoryGrid');
    categoryGrid.innerHTML = '';

    Object.entries(quizData).forEach(([key, category]) => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.innerHTML = `
            <div class="category-icon">${category.icon}</div>
            <h3>${category.name}</h3>
            <p>Test your knowledge</p>
            <span class="category-count">${category.questions.length} Questions</span>
        `;
        card.onclick = () => selectCategory(key);
        categoryGrid.appendChild(card);
    });
}

function selectCategory(categoryKey) {
    currentCategory = quizData[categoryKey];
    currentQuestionIndex = 0;
    selectedAnswers = new Array(currentCategory.questions.length).fill(null);
    score = 0;
    quizStartTime = Date.now();
    answers = [];
    showQuiz();
}

// Quiz Display
function showQuiz() {
    showScreen('quizScreen');
    displayQuestion();
    updateProgress();
}

function displayQuestion() {
    const question = currentCategory.questions[currentQuestionIndex];
    
    document.getElementById('questionText').textContent = question.question;
    document.getElementById('questionCategory').textContent = question.category;
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    document.getElementById('totalQuestions').textContent = currentCategory.questions.length;
    
    const optionsSection = document.getElementById('optionsSection');
    optionsSection.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        
        if (selectedAnswers[currentQuestionIndex] === index) {
            optionDiv.classList.add('selected');
        }
        
        optionDiv.innerHTML = `
            <div class="option-radio"></div>
            <span>${option}</span>
        `;
        
        optionDiv.onclick = () => selectOption(index);
        optionsSection.appendChild(optionDiv);
    });
    
    // Update button states
    document.querySelector('[onclick="previousQuestion()"]').disabled = currentQuestionIndex === 0;
    const nextBtn = document.getElementById('nextBtn');
    
    if (currentQuestionIndex === currentCategory.questions.length - 1) {
        nextBtn.textContent = 'Finish Quiz →';
        nextBtn.onclick = () => finishQuiz();
    } else {
        nextBtn.textContent = 'Next →';
        nextBtn.onclick = () => nextQuestion();
    }
    
    questionStartTime = Date.now();
}

function selectOption(index) {
    selectedAnswers[currentQuestionIndex] = index;
    displayQuestion();
}

function nextQuestion() {
    if (currentQuestionIndex < currentCategory.questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
        updateProgress();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
        updateProgress();
    }
}

function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / currentCategory.questions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    
    // Calculate current score
    let currentScore = 0;
    selectedAnswers.forEach((answer, index) => {
        if (answer === currentCategory.questions[index].correct) {
            currentScore += 10;
        }
    });
    document.getElementById('scoreDisplay').textContent = currentScore;
}

function finishQuiz() {
    // Calculate final score
    let correctCount = 0;
    selectedAnswers.forEach((answer, index) => {
        if (answer === currentCategory.questions[index].correct) {
            correctCount++;
            answers.push({
                question: currentCategory.questions[index].question,
                userAnswer: currentCategory.questions[index].options[answer],
                correctAnswer: currentCategory.questions[index].options[currentCategory.questions[index].correct],
                isCorrect: true
            });
        } else {
            answers.push({
                question: currentCategory.questions[index].question,
                userAnswer: answer !== null ? currentCategory.questions[index].options[answer] : 'Not answered',
                correctAnswer: currentCategory.questions[index].options[currentCategory.questions[index].correct],
                isCorrect: false
            });
        }
    });
    
    const totalQuestions = currentCategory.questions.length;
    const percentageScore = (correctCount / totalQuestions) * 100;
    const quizEndTime = Date.now();
    const timeTaken = Math.round((quizEndTime - quizStartTime) / 1000);
    
    displayResults(correctCount, totalQuestions, percentageScore, timeTaken);
}

// Results Display
function displayResults(correctCount, totalQuestions, percentageScore, timeTaken) {
    const incorrectCount = totalQuestions - correctCount;
    
    document.getElementById('finalScore').textContent = Math.round(percentageScore);
    document.getElementById('correctCount').textContent = correctCount;
    document.getElementById('incorrectCount').textContent = incorrectCount;
    document.getElementById('timeTaken').textContent = formatTime(timeTaken);
    
    // Animate circular progress
    const scoreCircle = document.getElementById('scoreCircle');
    const circumference = 2 * Math.PI * 95;
    const offset = circumference - (percentageScore / 100) * circumference;
    scoreCircle.style.strokeDashoffset = offset;
    
    // Set grade and message
    let grade, message;
    if (percentageScore >= 90) {
        grade = 'A+';
        message = 'Outstanding Performance! 🌟';
    } else if (percentageScore >= 80) {
        grade = 'A';
        message = 'Excellent Work! 👏';
    } else if (percentageScore >= 70) {
        grade = 'B';
        message = 'Good Job! 😊';
    } else if (percentageScore >= 60) {
        grade = 'C';
        message = 'Not Bad! Keep Improving! 💪';
    } else if (percentageScore >= 50) {
        grade = 'D';
        message = 'You Can Do Better! 🎯';
    } else {
        grade = 'F';
        message = 'Better Luck Next Time! 🚀';
    }
    
    document.getElementById('gradeBadge').textContent = grade;
    document.getElementById('gradeMessage').textContent = message;
    
    // Display detailed results
    const detailedResults = document.getElementById('detailedResults');
    detailedResults.innerHTML = '';
    
    answers.forEach((answer, index) => {
        const resultItem = document.createElement('div');
        resultItem.className = `result-item ${answer.isCorrect ? 'correct' : 'incorrect'}`;
        resultItem.innerHTML = `
            <div class="result-question">Q${index + 1}: ${answer.question}</div>
            <div class="result-answer">Your Answer: <strong>${answer.userAnswer}</strong></div>
            <div class="result-answer">Correct Answer: <strong>${answer.correctAnswer}</strong></div>
        `;
        detailedResults.appendChild(resultItem);
    });
    
    showScreen('resultsScreen');
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    if (minutes > 0) {
        return `${minutes}m ${secs}s`;
    }
    return `${secs}s`;
}

function retakeQuiz() {
    selectCategory(Object.keys(quizData).find(key => quizData[key].name === currentCategory.name));
}
