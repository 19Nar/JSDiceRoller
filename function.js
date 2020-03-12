// HTML Elements

// var dice1 = document.getElementById("dice1");
// var dice2 = document.getElementById("dice2");
var diceRollButton = document.getElementById("diceRollerbutton");



diceRollButton.addEventListener("click", diceRollerFunction);

function diceRollerFunction(){

    var diceRollerSides = 6;
    let diceRollMatchs =[];
    var randomNumber1 = Math.floor(Math.random() * diceRollerSides) +1;
    var randomNumber2 = Math.floor(Math.random() * diceRollerSides) +1;
    document.images["dice1"].src="dice"+randomNumber1 + ".png";
    document.images["dice2"].src="dice" + randomNumber2 + ".png";
    if(randomNumber1==randomNumber2){
        //console.log("number of match",randomNumber1, "", randomNumber2);
        diceRollMatchs.push(randomNumber1);
        diceRollMatchs.push(randomNumber2);
    };

    var myArray = ["black","yellow"];
     var i = 0;

     
 document.getElementById("diceRollerbutton").style.backgroundColor = myArray[i];
     changeColour=function(){

         if(i == myArray.length-1) 
         {i=0;}
         else
         {i=i+1;}

       document.getElementById("diceRollerbutton").style.backgroundColor = myArray[i];
       };
    
    //dice1.innerText=randomNumber1;
    //dice2.innerText=randomNumber2;

console.log(changeColour);
    console.log(randomNumber1 + "" + randomNumber2);
    console.log(diceRollMatchs);
    //console.log("testing");
};

