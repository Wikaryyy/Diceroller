var highest = 'green';
var lowest = 'red';
var normal = 'white';
// U can use this variables to change color of the lowest and highest roll.


function rollingSound(){
    new Audio('rollSound.wav').play();
}
//If u want to use your own roll sound just change the path in the variable rollingSound()

function roll4(){
    rollingSound();
    setTimeout(rolld4, 2000);
    function rolld4(){
        let rollinf = Math.floor(Math.random() * 4) + 1;

            switch(rollinf){
                case 1:
                document.getElementById("circle").innerHTML = rollinf; 
                document.getElementById("circle").style.color = lowest;  
                document.getElementById("rollInformation").innerHTML = "D4 getting rolled!";   
                break;
                case 4:
                document.getElementById("circle").innerHTML = rollinf; 
                document.getElementById("circle").style.color = highest;  
                document.getElementById("rollInformation").innerHTML = "D4 getting rolled!";   
                break;
                default:
                document.getElementById("circle").innerHTML = rollinf; 
                document.getElementById("circle").style.color = normal;  
                document.getElementById("rollInformation").innerHTML = "D4 getting rolled!";   
                break;
            }
        }
    }
    
    

function roll6(){
    rollingSound();
    setTimeout(rolld6, 2000);
    function rolld6(){
        let rollinf = Math.floor(Math.random() * 6) + 1;
        switch(rollinf){
            case 1:
            document.getElementById("circle").innerHTML = rollinf;
            document.getElementById("circle").style.color = lowest;  
            document.getElementById("rollInformation").innerHTML = "D6 getting rolled!";
            break;
            case 6:
            document.getElementById("circle").innerHTML = rollinf;
            document.getElementById("circle").style.color = highest;  
            document.getElementById("rollInformation").innerHTML = "D6 getting rolled!";
            break;
            default:
            document.getElementById("circle").innerHTML = rollinf;
            document.getElementById("circle").style.color = normal;  
            document.getElementById("rollInformation").innerHTML = "D6 getting rolled!";
        } 
    }    
}




function roll8(){
    rollingSound();
    setTimeout(rolld8, 2000);
    function rolld8(){
        let rollinf = Math.floor(Math.random() * 8) + 1;
        switch(rollinf){
            case 1:
            document.getElementById("circle").innerHTML = rollinf;
            document.getElementById("circle").style.color = lowest;  
            document.getElementById("rollInformation").innerHTML = "D8 getting rolled!";
            break;
            case 8:
            document.getElementById("circle").innerHTML = rollinf;
            document.getElementById("circle").style.color = highest;  
            document.getElementById("rollInformation").innerHTML = "D8 getting rolled!";
            break;
            default:
            document.getElementById("circle").innerHTML = rollinf;
            document.getElementById("circle").style.color = normal;  
            document.getElementById("rollInformation").innerHTML = "D8 getting rolled!";
        }
    }
}




function roll10(){
    rollingSound();
    setTimeout(rolld10, 2000);
    function rolld10(){
        let rollinf= Math.floor(Math.random() * 10) + 1;
        switch(rollinf){
            case 1:
            document.getElementById("circle").innerHTML = rollinf;
            document.getElementById("circle").style.color = lowest;  
            document.getElementById("rollInformation").innerHTML = "D10 getting rolled!";
            break;
            case 10:
            document.getElementById("circle").innerHTML = rollinf;
            document.getElementById("circle").style.color = highest;  
            document.getElementById("rollInformation").innerHTML = "D10 getting rolled!";
            break;
            default:
            document.getElementById("circle").innerHTML = rollinf;
            document.getElementById("circle").style.color = normal;  
            document.getElementById("rollInformation").innerHTML = "D10 getting rolled!";
        } 
    }
}




function roll12(){
    rollingSound();
    setTimeout(rolld12, 2000);
    function rolld12(){
        let rollinf = Math.floor(Math.random() * 12) + 1;
        switch(rollinf){
            case 1:
            document.getElementById("circle").innerHTML = rollinf;
            document.getElementById("circle").style.color = lowest;  
            document.getElementById("rollInformation").innerHTML = "D12 getting rolled!";
            break;
            case 12:
            document.getElementById("circle").innerHTML = rollinf;
            document.getElementById("circle").style.color = highest;  
            document.getElementById("rollInformation").innerHTML = "D12 getting rolled!";
            break;
            default:
            document.getElementById("circle").innerHTML = rollinf;
            document.getElementById("circle").style.color = normal;  
            document.getElementById("rollInformation").innerHTML = "D12 getting rolled!";
        } 
    }
}




function roll20(){
    rollingSound();
    setTimeout(rolld20, 2000);
    function rolld20(){
        let rollinf = Math.floor(Math.random() * 20) + 1;
        switch(rollinf){
            case 1:
            document.getElementById("circle").innerHTML = rollinf;
            document.getElementById("circle").style.color = lowest;  
            document.getElementById("rollInformation").innerHTML = "D20 getting rolled!";
            break;
            case 20:
            document.getElementById("circle").innerHTML = rollinf;
            document.getElementById("circle").style.color = highest;  
            document.getElementById("rollInformation").innerHTML = "D20 getting rolled!";
            break;
            default:
            document.getElementById("circle").innerHTML = rollinf;
            document.getElementById("circle").style.color = normal;  
            document.getElementById("rollInformation").innerHTML = "D20 getting rolled!";
        } 
    }
}




function roll100(){
    rollingSound();
    setTimeout(rolld100, 2000);
    function rolld100(){
        let rollinf = Math.floor(Math.random() * 100) + 1;
        switch(rollinf){
            case 1:
            document.getElementById("circle").innerHTML = rollinf;
            document.getElementById("circle").style.color = lowest;  
            document.getElementById("rollInformation").innerHTML = "D100 getting rolled!";
            break;
            case 100:
            document.getElementById("circle").innerHTML = rollinf;
            document.getElementById("circle").style.color = highest;  
            document.getElementById("rollInformation").innerHTML = "D100 getting rolled!";
            break;
            default:
            document.getElementById("circle").innerHTML = rollinf;
            document.getElementById("circle").style.color = normal;  
            document.getElementById("rollInformation").innerHTML = "D100 getting rolled!";
        } 
    }
}



function email(){
    alert("Webmasters e-mail: Wikary1986@wp.pl")
}

