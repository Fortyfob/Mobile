const questions = [
    {
    question: "Qual é a capital do Brasil?",
    choices: ["Brasília", "Rio de Janeiro", "São Paulo", "Salvador"],
    answer: "Brasília",
    },
    {
    question: "Qual é a capital da Argentina?",
    choices: ["Buenos Aires", "Brasília", "Lisboa", "Paris"],
    answer: "Buenos Aires",
    },
    {
    question: "Qual é a capital da França?",
    choices: ["Roma", "Madri", "Paris", "Londres"],
    answer: "Paris",
    },
    {
    question: "Qual é a capital da Espanha?",
    choices: ["Lisboa", "Madri", "Barcelona", "Valência"],
    answer: "Madri",
    },
    {
    question: "Qual é a capital da Itália?",
    choices: ["Veneza", "Milão", "Roma", "Nápoles"],
    answer: "Roma",
    },
    {
    question: "Qual é a capital do Canadá?",
    choices: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    answer: "Ottawa",
    },
    {
    question: "Qual é a capital dos Estados Unidos?",
    choices: ["Nova York", "Los Angeles", "Chicago", "Washington D.C."],
    answer: "Washington D.C.",
    },
    {
    question: "Qual é a capital do Reino Unido?",
    choices: ["Liverpool", "Manchester", "Edimburgo", "Londres"],
    answer: "Londres",
    },
    {
    question: "Quantos fusos horários existem na Rússia?",
    choices: ["11", "6", "10", "8"],
    answer: "11",
    },
    {
    question: "Qual é a flor nacional do Japão",
    choices: ["flor de cerejeira", "flor de sakura", "flor de glicínias", "flor de nemophilas"],
    answer: "flor de cerejeira",
    },
    {
    question: "Quantas tiras há na bandeira dos Estados Unidos?",
    choices: ["12", "13", "10", "11"],
    answer: "13",
    },
    {
    question: "Quantos dias são necessários para a Terra orbitar o sol?",
    choices: ["365", "366", "350", "352"],
    answer: "365",
    },
    {
    question: "Qual é o animal nacional da Austrália?",
    choices: ["guaxinim", "marsupiais", "canguru vermelho", "canguru"],
    answer: "canguru vermelho",
    },
    {
    question: "Qual dos impérios a seguir não possui um idioma escrito: Inca, Azteca, Egípcio ou Romano?",
    choices: ["Romano", "Egipcio", "Azteca", "Inca"],
    answer: "Inca",
    },
    {
    question: "Até 1923, como era chamada a cidade turca de Istambul? ",
    choices: ["Istambul", "Constantinopla", "Edimburgo", "Turquesa"],
    answer: "Constantinopla",
    },
    {
    question: "Qual país tem mais ilhas no mundo",
    choices: ["Suécia", "USA", "Brasil", "Australia"],
    answer: "Suécia",
    },
    {
    question: "Qual é o menor país do mundo?",
    choices: ["Russia", "Vaticano", "China", "Egito"],
    answer: "Vaticano",
    },
    {
    question: "Qual é a maior (não mais alta) cadeia de montanhas do mundo?",
    choices: ["alpes", "Montanhas rochosas", "Andes", "Himalaia"],
    answer: "(Andes",
    },
    ];
    
    const questionElement = document.getElementById("question");
    const choiceElements = Array.from(document.getElementsByClassName("choice"));
    const nextButton = document.getElementById("next");
    const scoreElement = document.getElementById("score");
    const wrongElement = document.getElementById("wrong");
    
    let currentQuestion = 0;
    let score = 0;
    let wrong = 0;
    let answerChosen = false;
    
    function loadQuestion() {
    const currentQuestionData = questions[currentQuestion];
    questionElement.innerText = currentQuestionData.question;
    
    const choices = shuffleArray(currentQuestionData.choices);
    for (let i = 0; i < choiceElements.length; i++) {
    choiceElements[i].innerText = choices[i];
    }
    answerChosen = false; // reset flag when loading new question
    }
    
    function checkAnswer(e) {
    if (answerChosen) return; // prevent multiple answers
    answerChosen = true;
    
    if (e.target.innerText === questions[currentQuestion].answer) {
    score++;
    scoreElement.innerText = "Pontuação: " + score;
    alert("Correto!");
    } else {
    wrong++;
    wrongElement.innerText = "Erros: " + wrong;
    alert(
    "Errado! A resposta correta é " + questions[currentQuestion].answer + "."
    );
    }
    }
    
    choiceElements.forEach((element) => {
    element.addEventListener("click", checkAnswer);
    });
    
    function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    wrong = 0;
    scoreElement.innerText = "Pontuação: 0";
    wrongElement.innerText = "Erros: 0";
    loadQuestion();
    }
    
    nextButton.addEventListener("click", () => {
    if (!answerChosen) {
    alert("Por favor, escolha uma resposta antes de prosseguir.");
    return;
    }
    
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
    loadQuestion();
    } else {
    alert(
    "Fim do Quiz! Você acertou " +
    score +
    " de " +
    questions.length +
    " perguntas."
    );
    restartQuiz();
    }
    });
    
    function shuffleArray(array) {
    let currentIndex = array.length,
    temporaryValue,
    randomIndex;
    
    while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
    }
    
    return array;
    }
    
    loadQuestion();