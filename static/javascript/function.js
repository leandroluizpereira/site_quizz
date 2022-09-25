
alert("Hello world");


var element = document.getElementById("btn");
var text = document.getElementById("text");
var answerOne = document.getElementById("questionOne");

let qtdQuestion = [1,2,7];
var question = [];
let test = 0;


var question = document.getElementById("question");



element.onclick = function (){

    alert("onclick , here ");

    text.textContent="Correct question !!";

    for(i=0;i<qtdQuestion.length;i++){

        console.log("aqui vai fazer a leitura dos vetores");
        answerOne.textContent="A primeira pergunta"
    // criar mais um for aqui com as perguntas colocando o incremento fora do for e fazendo outro for em seguida para proxima pergunta 

    }


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