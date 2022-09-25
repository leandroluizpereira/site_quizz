
alert("Hello world");


var element = document.getElementById("btn");
var text = document.getElementById("text");

let qtdQuestion = [1,2,7];
var question = [];
let test = 0;


var question = document.getElementById("question");



element.onclick = function (){

    alert("onclick , here ");

    text.textContent="Correct question !!";
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