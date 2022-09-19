
alert("Hello world");


var element = document.getElementById("btn");
var text = document.getElementById("text");
var question = document.getElementById("question");



element.onclick = function (){

    alert("onclick , here ");

    text.textContent="Correct question !!";
}