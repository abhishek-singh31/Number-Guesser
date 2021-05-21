let x=document.querySelector(".result h2");
function checkAnswer(){
    let userInput=document.querySelector("input").value;
    let randomValue=Math.floor(Math.random()*10)+1;
    if(isNaN(userInput) || userInput<1 || userInput>10){
        alert("Please enter a number from 1 to 10.");
    }
    else{
        if(+userInput==+randomValue){
            x.style.color="#1e881b";
            x.innerHTML="Correct Guess";
            x.style.visibility="visible";
        }
        else{
            x.style.color="red";
            x.innerHTML="Wrong Guess" + ", Correct value is "+ randomValue;
            x.style.visibility="visible";
        }
        document.querySelector(".play").style.display="inline-block";
    }
}
function playAgain(){
    document.querySelector("input").value="";
    x.style.visibility="hidden";
    document.querySelector(".play").style.display="none";

}