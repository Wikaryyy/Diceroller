//TODO: Acing Dices

var n = 1;
var intNumberToRemove = 1;
var rollHistory = document.getElementById("rollHistory");
var changeButton = document.getElementById("changeButton");
//* Do not change this Variables

var highest = 'green';
var lowest = 'red';
var normal = 'white';
//* U can use this variables to change color of the lowest and highest roll.

function changeColors(){
    var listHighest = document.getElementById("highest");
    var usersChoiceForHighest = listHighest.options[listHighest.selectedIndex].text;
    var listLowest = document.getElementById("lowest");
    var usersChoiceForLowest = listLowest.options[listLowest.selectedIndex].text;
    highest = usersChoiceForHighest;
    lowest = usersChoiceForLowest;
}
//*This function is used to change dice colors.

function reset_animation(dice) {
    var el = document.getElementById(dice);
    el.style.animation = 'none';
    el.offsetHeight; /* trigger reflow */
    el.style.animation = null; 
  }

//*This function resets rolling Animation.

function removeElement(elementId) {
    document.getElementById(elementId).remove();
 }

//*This function removes specified element by it's ID.

function refrestList(){
    var countOfImages = rollHistory.getElementsByTagName('img').length;
    if (countOfImages === 6){
    removeElement(""+intNumberToRemove+"");
    intNumberToRemove++;
    }
 }
//*This function refreshes the rollHistory if it's too full.

function rollingSound(){
    new Audio('rollSound.wav').play();
}
//*If u want to use your own roll sound just change the path in the variable rollingSound()

function roll(highestNumber){
    var result =  Math.floor(Math.random() * highestNumber) + 1;
    return result;
 }
//*This function is used for rolling the dices.

function rollDice(diceName, diceHighestNumber){
    rollingSound();
    reset_animation(diceName.toLowerCase());
    setTimeout(x, 2000);
    function x(){
        let diceroll = roll(diceHighestNumber);

            switch(diceroll){
                case 1:
                document.getElementById("circle").innerHTML = diceroll; 
                document.getElementById("circle").style.color = lowest;  
                document.getElementById("rollInformation").innerHTML = diceName.toUpperCase()+ " getting rolled!";
                rollHistory.innerHTML += "<span id='"+n+"' style='color:"+lowest+";'><img src='dices/"+diceName.toLowerCase()+".png' alt='"+diceName.toLowerCase()+"' style='width: 100px; height:100px; vertical-align: middle;'>"+diceroll+"<br></span> ";   
                n++;
                refrestList();
                break;

                case diceHighestNumber:
                document.getElementById("circle").innerHTML = diceroll; 
                document.getElementById("circle").style.color = highest;  
                document.getElementById("rollInformation").innerHTML = diceName.toUpperCase()+" getting rolled!";   
                rollHistory.innerHTML += "<span id='"+n+"' style='color:"+highest+";'><img src='dices/"+diceName.toLowerCase()+".png' alt='"+diceName.toLowerCase()+"' style='width: 100px; height:100px; vertical-align: middle;'>"+diceroll+"<br></span> ";
                n++;
                refrestList();
                break;

                default:
                document.getElementById("circle").innerHTML = diceroll; 
                document.getElementById("circle").style.color = normal;  
                document.getElementById("rollInformation").innerHTML = diceName.toUpperCase()+" getting rolled!";  
                rollHistory.innerHTML += "<span id='"+n+"'><img src='dices/"+diceName.toLowerCase()+".png' alt='"+diceName.toLowerCase()+"' style='width: 100px; height:100px; vertical-align: middle;'>"+diceroll+"<br></span> "; 
                n++;
                refrestList();
                break;
            }
        }
}
//*This function is for rolling dices and returning the results for the User.

function email(){
    alert("Webmasters e-mail: TWikary1986@gmail.com")
}

