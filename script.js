//TODO: Acing Dices


var n = 1;
var intNumberToRemove = 1;
var rollHistory = document.getElementById("rollHistory");
var changeButton = document.getElementById("changeButton");
// Do not change this Variables

var highest = 'green';
var lowest = 'red';
var normal = 'white';
// U can use this variables to change color of the lowest and highest roll.

function changeColors(){
    var listHighest = document.getElementById("highest");
    var usersChoiceForHighest = listHighest.options[listHighest.selectedIndex].text;
    var listLowest = document.getElementById("lowest");
    var usersChoiceForLowest = listLowest.options[listLowest.selectedIndex].text;
    highest = usersChoiceForHighest;
    lowest = usersChoiceForLowest;
}
//This function is used to change dice colors.

function reset_animation(dice) {
    var el = document.getElementById(dice);
    el.style.animation = 'none';
    el.offsetHeight; /* trigger reflow */
    el.style.animation = null; 
  }

//This function resets rolling Animation.

function removeElement(elementId) {
    document.getElementById(elementId).remove();
 }

//This function removes specified element by it's ID.

function refrestList(){
    var countOfImages = rollHistory.getElementsByTagName('img').length;
    if (countOfImages === 6){
    removeElement(""+intNumberToRemove+"");
    intNumberToRemove++;
    }
 }
//This function refreshes the rollHistory if it's too full.

function rollingSound(){
    new Audio('rollSound.wav').play();
}
//If u want to use your own roll sound just change the path in the variable rollingSound()

function roll(highestNumber){
    var result =  Math.floor(Math.random() * highestNumber) + 1;
    return result;
 }
//This function is used for rolling the dices.

function roll4(){
    rollingSound();
    reset_animation("d4");
    setTimeout(rolld4, 2000);
    function rolld4(){
        let rollinf = roll(4);

            switch(rollinf){
                case 1:
                document.getElementById("circle").innerHTML = rollinf; 
                document.getElementById("circle").style.color = lowest;  
                document.getElementById("rollInformation").innerHTML = "D4 getting rolled!";
                rollHistory.innerHTML += "<span id='"+n+"' style='color:"+lowest+";'><img src='dices/d4.png' alt='d4' style='width: 100px; height:100px; vertical-align: middle;'>"+rollinf+"<br></span> ";   
                n++;
                refrestList();
                break;

                case 4:
                document.getElementById("circle").innerHTML = rollinf; 
                document.getElementById("circle").style.color = highest;  
                document.getElementById("rollInformation").innerHTML = "D4 getting rolled!";   
                rollHistory.innerHTML += "<span id='"+n+"' style='color:"+highest+";'><img src='dices/d4.png' alt='d4' style='width: 100px; height:100px; vertical-align: middle;'>"+rollinf+"<br></span> ";
                n++;
                refrestList();
                break;

                default:
                document.getElementById("circle").innerHTML = rollinf; 
                document.getElementById("circle").style.color = normal;  
                document.getElementById("rollInformation").innerHTML = "D4 getting rolled!";  
                rollHistory.innerHTML += "<span id='"+n+"'><img src='dices/d4.png' alt='d4' style='width: 100px; height:100px; vertical-align: middle;'>"+rollinf+"<br></span> "; 
                n++;
                refrestList();
                break;
            }
        }
     
    }
    
function roll6(){
    rollingSound();
    reset_animation("d6");
    setTimeout(rolld6, 2000);
    function rolld6(){
        let rollinf = roll(6);
        switch(rollinf){
            case 1:
            document.getElementById("circle").innerHTML = rollinf;
            document.getElementById("circle").style.color = lowest;  
            document.getElementById("rollInformation").innerHTML = "D6 getting rolled!";
            rollHistory.innerHTML += "<span id='"+n+"' style='color:"+lowest+";'><img src='dices/d6.png' alt='d6' style='width: 100px; height:100px; vertical-align: middle;'>"+rollinf+"<br></span> "; 
            n++;
            refrestList();
            break;

            case 6:
            document.getElementById("circle").innerHTML = rollinf;
            document.getElementById("circle").style.color = highest;  
            document.getElementById("rollInformation").innerHTML = "D6 getting rolled!";
            rollHistory.innerHTML += "<span id='"+n+"' style='color:"+highest+";'><img src='dices/d6.png' alt='d6' style='width: 100px; height:100px; vertical-align: middle;'>"+rollinf+"<br></span> "; 
            n++;
            refrestList();
            break;

            default:
            document.getElementById("circle").innerHTML = rollinf;
            document.getElementById("circle").style.color = normal;  
            document.getElementById("rollInformation").innerHTML = "D6 getting rolled!";
            rollHistory.innerHTML += "<span id='"+n+"'><img src='dices/d6.png' alt='d6' style='width: 100px; height:100px; vertical-align: middle;'>"+rollinf+"<br></span> "; 
            n++;
            refrestList();
            break;
        } 
    }    
}

function roll8(){
    rollingSound();
    reset_animation("d8");
    setTimeout(rolld8, 2000);
    function rolld8(){
        let rollinf = roll(8);
        switch(rollinf){
            case 1:
            document.getElementById("circle").innerHTML = rollinf;
            document.getElementById("circle").style.color = lowest;  
            document.getElementById("rollInformation").innerHTML = "D8 getting rolled!";
            rollHistory.innerHTML += "<span id='"+n+"' style='color:"+lowest+";'><img src='dices/d8.png' alt='d8' style='width: 100px; height:100px; vertical-align: middle;'>"+rollinf+"<br></span> "; 
            n++;
            refrestList();
            break;

            case 8:
            document.getElementById("circle").innerHTML = rollinf;
            document.getElementById("circle").style.color = highest;  
            document.getElementById("rollInformation").innerHTML = "D8 getting rolled!";
            rollHistory.innerHTML += "<span id='"+n+"' style='color:"+highest+";'><img src='dices/d8.png' alt='d8' style='width: 100px; height:100px; vertical-align: middle;'>"+rollinf+"<br></span> "; 
            n++;
            refrestList();
            break;

            default:
            document.getElementById("circle").innerHTML = rollinf;
            document.getElementById("circle").style.color = normal;  
            document.getElementById("rollInformation").innerHTML = "D8 getting rolled!";
            rollHistory.innerHTML += "<span id='"+n+"'><img src='dices/d8.png' alt='d8' style='width: 100px; height:100px; vertical-align: middle;'>"+rollinf+"<br></span> "; 
            n++;
            refrestList();
            break;
        }
    }
}

function roll10(){
    rollingSound();
    reset_animation("d10");
    setTimeout(rolld10, 2000);
    function rolld10(){
        let rollinf= roll(10);
        switch(rollinf){
            case 1:
            document.getElementById("circle").innerHTML = rollinf;
            document.getElementById("circle").style.color = lowest;  
            document.getElementById("rollInformation").innerHTML = "D10 getting rolled!";
            rollHistory.innerHTML += "<span id='"+n+"' style='color:"+lowest+";'><img src='dices/d10.png' alt='d10' style='width: 100px; height:100px; vertical-align: middle;'>"+rollinf+"<br></span> "; 
            n++;
            refrestList();
            break;

            case 10:
            document.getElementById("circle").innerHTML = rollinf;
            document.getElementById("circle").style.color = highest;  
            document.getElementById("rollInformation").innerHTML = "D10 getting rolled!";
            rollHistory.innerHTML += "<span id='"+n+"' style='color:"+highest+";'><img src='dices/d10.png' alt='d10' style='width: 100px; height:100px; vertical-align: middle;'>"+rollinf+"<br></span> "; 
            n++;
            refrestList();
            break;
            
            default:
            document.getElementById("circle").innerHTML = rollinf;
            document.getElementById("circle").style.color = normal;  
            document.getElementById("rollInformation").innerHTML = "D10 getting rolled!";
            rollHistory.innerHTML += "<span id='"+n+"' ><img src='dices/d10.png' alt='d10' style='width: 100px; height:100px; vertical-align: middle;'>"+rollinf+"<br></span> "; 
            n++;
            refrestList();
            break;
        } 
    }
}

function roll12(){
    rollingSound();
    reset_animation("d12");
    setTimeout(rolld12, 2000);
    function rolld12(){
        let rollinf = roll(12);

        switch(rollinf){
            case 1:
            document.getElementById("circle").innerHTML = rollinf;
            document.getElementById("circle").style.color = lowest;  
            document.getElementById("rollInformation").innerHTML = "D12 getting rolled!";
            rollHistory.innerHTML += "<span id='"+n+"' style='color:"+lowest+";'><img src='dices/d12.png' alt='d12' style='width: 100px; height:100px; vertical-align: middle;'>"+rollinf+"<br></span> "; 
            n++;
            refrestList();
            break;

            case 12:
            document.getElementById("circle").innerHTML = rollinf;
            document.getElementById("circle").style.color = highest;  
            document.getElementById("rollInformation").innerHTML = "D12 getting rolled!";
            rollHistory.innerHTML += "<span id='"+n+"' style='color:"+highest+";'><img src='dices/d12.png' alt='d12' style='width: 100px; height:100px; vertical-align: middle;'>"+rollinf+"<br></span> "; 
            n++;
            refrestList();
            break;

            default:
            document.getElementById("circle").innerHTML = rollinf;
            document.getElementById("circle").style.color = normal;  
            document.getElementById("rollInformation").innerHTML = "D12 getting rolled!";
            rollHistory.innerHTML += "<span id='"+n+"'><img src='dices/d12.png' alt='d12' style='width: 100px; height:100px; vertical-align: middle;'>"+rollinf+"<br></span> "; 
            n++;
            refrestList();
            break;
        } 
    }
}

function roll20(){
    rollingSound();
    reset_animation("d20");
    setTimeout(rolld20, 2000);
    function rolld20(){
        let rollinf = roll(20);
        switch(rollinf){
            case 1:
            document.getElementById("circle").innerHTML = rollinf;
            document.getElementById("circle").style.color = lowest;  
            document.getElementById("rollInformation").innerHTML = "D20 getting rolled!";
            rollHistory.innerHTML += "<span id='"+n+"' style='color:"+lowest+";'><img src='dices/d20.png' alt='d20' style='width: 100px; height:100px; vertical-align: middle;'>"+rollinf+"<br></span> "; 
            n++;
            refrestList();
            break;

            case 20:
            document.getElementById("circle").innerHTML = rollinf;
            document.getElementById("circle").style.color = highest;  
            document.getElementById("rollInformation").innerHTML = "D20 getting rolled!";
            rollHistory.innerHTML += "<span id='"+n+"' style='color:"+highest+";'><img src='dices/d20.png' alt='d20' style='width: 100px; height:100px; vertical-align: middle;'>"+rollinf+"<br></span> "; 
            n++;
            refrestList();
            break;

            default:
            document.getElementById("circle").innerHTML = rollinf;
            document.getElementById("circle").style.color = normal;  
            document.getElementById("rollInformation").innerHTML = "D20 getting rolled!";
            rollHistory.innerHTML += "<span id='"+n+"'><img src='dices/d20.png' alt='d20' style='width: 100px; height:100px; vertical-align: middle;'>"+rollinf+"<br></span> "; 
            n++;
            refrestList();
            break;
        } 
    }
}

function roll100(){
    rollingSound();
    reset_animation("d100");
    setTimeout(rolld100, 2000);
    function rolld100(){
        let rollinf = roll(100);
        switch(rollinf){
            case 1:
            document.getElementById("circle").innerHTML = rollinf;
            document.getElementById("circle").style.color = lowest;  
            document.getElementById("rollInformation").innerHTML = "D100 getting rolled!";
            rollHistory.innerHTML += "<span id='"+n+"' style='color:"+lowest+";'><img src='dices/d100.png' alt='d100' style='width: 100px; height:100px; vertical-align: middle;'>"+rollinf+"<br></span> "; 
            n++;
            refrestList();
            break;

            case 100:
            document.getElementById("circle").innerHTML = rollinf;
            document.getElementById("circle").style.color = highest;  
            document.getElementById("rollInformation").innerHTML = "D100 getting rolled!";
            rollHistory.innerHTML += "<span id='"+n+"' style='color:"+highest+";'><img src='dices/d100.png' alt='d100' style='width: 100px; height:100px; vertical-align: middle;'>"+rollinf+"<br></span> "; 
            n++;
            refrestList();
            break;
                
            default:
            document.getElementById("circle").innerHTML = rollinf;
            document.getElementById("circle").style.color = normal;  
            document.getElementById("rollInformation").innerHTML = "D100 getting rolled!";
            rollHistory.innerHTML += "<span id='"+n+"'><img src='dices/d100.png' alt='d100' style='width: 100px; height:100px; vertical-align: middle;'>"+rollinf+"<br></span> "; 
            n++;
            refrestList();
            break;
        } 
    }
}

function email(){
    alert("Webmasters e-mail: TWikary1986@gmail.com")
}

