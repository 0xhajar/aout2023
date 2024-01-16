import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';
import questions from './utils/questions';

const NB_QUESTIONS = 3;

mainFunction();

function mainFunction(){
    for (let i = 0; i < NB_QUESTIONS; i+=1) {
        const question = getRandomQuestion();
        displayQuestion(question);
    }
    endGame();
}

function getRandomQuestion(){
    return questions[Math.floor(Math.random() * questions.length)];
}

function displayQuestion(question){
    const main = document.querySelector('main');
    const title = document.createElement('h1');
    title.textContent = question.question;
    main.appendChild(title);
    question.answers.forEach((a) => {
        const answer = document.createElement('p');
        answer.textContent = a.text;
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = question.id;
        radio.value = a.isCorrect;
        answer.appendChild(radio);
        main.appendChild(answer);
    })
}

function endGame(){
    const main = document.querySelector('main');
    const button = document.createElement('button');
    button.textContent = 'Calculate score';
    main.appendChild(button);
    button.addEventListener('click', () => {
        const score = calculateScore();
        displayScore(score);
    })
}

function calculateScore(){
    const answers = document.querySelectorAll('input');
    let score = 0;
    answers.forEach((a) => {
        if(a.checked){
            if(a.value === 'true') score+=1;
        }
    })
    return score;
}

function displayScore(score){
    const main = document.querySelector('main');
    main.innerHTML = `Your score is ${score}/${NB_QUESTIONS}`;
    displayReplay();
}

function displayReplay(){
    const main = document.querySelector('main');
    const button = document.createElement('button');
    button.textContent = 'Replay';
    main.appendChild(button);
    button.addEventListener('click', () => {
        main.innerHTML = '';
        mainFunction();
    })
}