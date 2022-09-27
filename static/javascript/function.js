


//btn questions for selection
var btnQuestionOne = document.getElementById("btnQuestionOne");
var btnQuestionTwo = document.getElementById("btnQuestionTwo");
var btnQuestionThree = document.getElementById("btnQuestionThree");
var btnQuestionFour = document.getElementById("btnQuestionFour");
var btnQuestionFive = document.getElementById("btnQuestionFive");
var btnQuestionSix = document.getElementById("btnQuestionSix");
var btnQuestionSeven = document.getElementById("btnQuestionSeven");
var btnQuestionSix = document.getElementById("btnQuestionSix");
var btnQuestionSeven = document.getElementById("btnQuestionSeven");
var btnQuestionEight = document.getElementById("btnQuestionEight");
var btnQuestionNine = document.getElementById("btnQuestionNine");
var btnQuestionTen = document.getElementById("btnQuestionTen");
//btn answer e question
var element = document.getElementById("btn");
var btnOk = document.getElementById("btnOk");
var text = document.getElementById("text");
var question = document.getElementById("question");
var answerOne = document.getElementById("questionOne");
var answerTwo = document.getElementById("questionTwo");
var answerThree = document.getElementById("questionThree");
var answerFour = document.getElementById("questionFour");
let qtdQuestion = [1,2,7];
//test vetor var question = []
var question = [];
let test = 0;
var question = document.getElementById("question");
//Validation question
var tot = document.getElementById("tot");
var correct = 0;



btnQuestionOne.onclick = function(){       
    question.textContent="1. question about tecnology , whats is the variable that is constant"
    answerOne.textContent=" var number = 0;";
    answerOne.onclick = function(){
    answerOne.textContent=" is serius , erro ";
    tot.textContent=correct;
    }
    answerTwo.textContent=" let number = 0;";
    answerTwo.onclick = function(){
      answerTwo.textContent="Errado";
      answerTwo.style.backgeoundColor="#990000";
    }
    answerThree.textContent=" const number = 0;";
    answerFour.textContent=" int number = 0;";
}
btnQuestionTwo.onclick = function (){
    question.textContent="2. Qual é a impressora que economiza mais tinta "
    answerOne.textContent=" A Hp torner ";
    answerTwo.onclick = function(){
       // tot.textContent=correct+1;
    answerOne.textContent=" errado ";
    }
    answerTwo.textContent=" B Hp cartucho";
    answerThree.textContent=" C Hp laser";
    answerFour.textContent=" D nenhuma das alternativas ";
}
btnQuestionThree.onclick = function (){
    question.textContent="3"
    answerOne.textContent=" 3";
    answerOne.onclick = function(){
    answerOne.textContent=" errado ";
    }
    answerTwo.textContent="3";
    answerThree.textContent="3";
    answerFour.textContent="3";
}
btnQuestionFour.onclick = function (){
    question.textContent="4"
    answerOne.textContent="4";
    answerOne.onclick = function(){
    answerOne.textContent=" errado ";
    }
    answerTwo.textContent="4";
    answerThree.textContent="4";
    answerFour.textContent=" 4";
}
btnQuestionFive.onclick = function (){
    question.textContent="5"
    answerOne.textContent="5";
    answerOne.onclick = function(){
    answerOne.textContent=" errado ";
    }
    answerTwo.textContent=" 5";
    answerThree.textContent=" 5";
    answerFour.textContent=" 5";
}

btnQuestionSix.onclick = function (){
    question.textContent="6"
    answerOne.textContent="6";
    answerOne.onclick = function(){
    answerOne.textContent=" errado ";
    }
    answerTwo.textContent=" 6";
    answerThree.textContent=" 6";
    answerFour.textContent=" 6";
    
}
btnQuestionSeven.onclick = function (){
    question.textContent="7"
    answerOne.textContent="7";
    answerOne.onclick = function(){
    answerOne.textContent=" errado ";
    }
    answerTwo.textContent=" 7";
    answerThree.textContent=" 7";
    answerFour.textContent=" 7";
    
}

btnQuestionEight.onclick = function (){
    question.textContent="8"
    answerOne.textContent="8";
    answerOne.onclick = function(){
    answerOne.textContent=" errado ";
    }
    answerTwo.textContent=" 8";
    answerThree.textContent=" 8";
    answerFour.textContent=" 8";      
}
btnQuestionNine.onclick = function (){
    question.textContent="9"
    answerOne.textContent="9";
    answerOne.onclick = function(){
    answerOne.textContent=" errado ";
    }
    answerTwo.textContent=" 9";
    answerThree.textContent=" 9";
    answerFour.textContent=" 9";  
}

btnQuestionTen.onclick = function (){
    question.textContent="10"
    answerOne.textContent="10";
    answerOne.onclick = function(){
    answerOne.textContent=" errado ";
    }
    answerTwo.textContent=" 10";
    answerThree.textContent=" 10";
    answerFour.textContent=" 10";  
}

element.onclick = function (){
    text.textContent="Correct question !!";
    for(i=0;i<qtdQuestion.length;i++){     
    question.textContent="-"    
    answerOne.textContent="-";
    answerTwo.textContent="-";
    answerThree.textContent="-";
    answerFour.textContent="-";     
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

btnOk.onclick = function(){

    alert("OK");
}





/*
element.onclick = function (){
    text.textContent="Correct question !!";
    for(i=0;i<qtdQuestion.length;i++){      
        if(i==0){              
        }
        answerTwo.textContent="the segund answer";
        answerThree.textContent="the three answer";
        answerFour.textContent="the four answer";       
    }
       if(i == 1){
        alert("1");
        answerOne.textContent=" one answer";
        answerTwo.textContent=" one answer";
        answerThree.textContent=" one answer";
        answerFour.textContent=" one answer";
       }

       if(i==2){
        alert("2");
        answerOne.textContent=" two answer";
        answerTwo.textContent=" two answer";
        answerThree.textContent=" two answer";
        answerFour.textContent=" two answer";
       }

       if(i==3){
        alert("3");
        answerOne.textContent=" three answer";
        answerTwo.textContent=" three answer";
        answerThree.textContent=" three answer";
        answerFour.textContent=" three answer";
       }
    }

    */

    // criar mais um for aqui com as perguntas colocando o incremento fora do for e fazendo outro for em seguida para proxima pergunta
    

      //aqui se o botão for clicado e for certo  e se o indice do vetor for dois faça e ir pra proxima pergunta 

    // if(&&qtdQuestion == 2){

       // answerTwo.textContent="A segunda pergunta"

    /*
           qtdQuestion = qtdQuestion+1;
 

    */
