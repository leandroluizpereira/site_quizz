
alert("Hello world");


var element = document.getElementById("btn");
var text = document.getElementById("text");

var qtdQuestion = [7];
var question = [];


var question = document.getElementById("question");



element.onclick = function (){

    alert("onclick , here ");

    text.textContent="Correct question !!";
}

for(i = 0; qtdQuestion<11; i++){
    
     question = question +1;
     console.log(question);
     qtdQuestion = qtdQuestion+1;

}
