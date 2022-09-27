
alert("Hello world");


var element = document.getElementById("btn");
var text = document.getElementById("text");
var answerOne = document.getElementById("questionOne");
var answerTwo = document.getElementById("questionTwo");
var answerThree = document.getElementById("questionThree");
var answerFour = document.getElementById("questionFour")

let qtdQuestion = [1,2,7];
//test vetor var question = []
var question = [];
let test = 0;


var question = document.getElementById("question");



element.onclick = function (){

    alert("onclick , here ");

    text.textContent="Correct question !!";

    for(i=0;i<qtdQuestion.length;i++){

        console.log("aqui vai fazer a leitura dos vetores");
        answerOne.textContent=" the segund answer";
        answerTwo.textContent="the segund answer";
        answerThree.textContent="the three answer";
        answerFour.textContent="the four answer";
   

    // criar mais um for aqui com as perguntas colocando o incremento fora do for e fazendo outro for em seguida para proxima pergunta
    

      //aqui se o botão for clicado e for certo  e se o indice do vetor for dois faça e ir pra proxima pergunta 

    // if(&&qtdQuestion == 2){

       // answerTwo.textContent="A segunda pergunta"
    }
    

    }

    



    questionOne.onclick = function(){

        alert("Certa resposta ");
    }



// denido a variavél , condicional , incremento 
for(; qtdQuestion.length<10;){
     qtdQuestion.length++;
     qtdQuestion.push(qtdQuestion.length,3);
     test++;

}
console.log(qtdQuestion);
console.log(test);

// estrutura para criaçâo do vetor definido varias perguntas para o quizz 
// new variable vet of qtdQuestion
// new variable vet of answer 
// insert the vets em cada indice 