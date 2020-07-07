var dice_4 = document.getElementById("d4")


function rollingSound(){}


function roll4(url){
    new Audio(url).play();
    setTimeout(rolld4, 2000);
    function rolld4(){
        document.getElementById("circle").innerHTML = Math.floor(Math.random() * 4) + 1;
        document.getElementById("rollInformation").innerHTML = "D4 getting Rolled";

    }
    
    
}
function roll6(url){
    new Audio(url).play();
    setTimeout(rolld6, 2000);
    function rolld6(){
        document.getElementById("circle").innerHTML = Math.floor(Math.random() * 6) + 1;
        document.getElementById("rollInformation").innerHTML = "D6 getting Rolled";

    }
    
    
}
function roll8(url){
    new Audio(url).play();
    setTimeout(rolld8, 2000);
    function rolld8(){
        document.getElementById("circle").innerHTML = Math.floor(Math.random() * 8) + 1;
        document.getElementById("rollInformation").innerHTML = "D8 getting Rolled";

    }
    
    
}
function roll10(url){
    new Audio(url).play();
    setTimeout(rolld10, 2000);
    function rolld10(){
        document.getElementById("circle").innerHTML = Math.floor(Math.random() * 10) + 1;
        document.getElementById("rollInformation").innerHTML = "D10 getting Rolled";
    }
    
    
}
function roll12(url){
    new Audio(url).play();
    setTimeout(rolld12, 2000);
    function rolld12(){
        document.getElementById("circle").innerHTML = Math.floor(Math.random() * 12) + 1;
        document.getElementById("rollInformation").innerHTML = "D12 getting Rolled";
    }
    
    
}
function roll20(url){
    new Audio(url).play();
    setTimeout(rolld20, 2000);
    function rolld20(){
        document.getElementById("circle").innerHTML = Math.floor(Math.random() * 20) + 1;
        document.getElementById("rollInformation").innerHTML = "D20 getting Rolled";
    }
    
    
}
function roll100(url){
    new Audio(url).play();
    setTimeout(rolld100, 2000);
    function rolld100(){
        document.getElementById("circle").innerHTML = Math.floor(Math.random() * 100) + 1;
        document.getElementById("rollInformation").innerHTML = "D100 getting Rolled";   
    }
    
    
}



function email(){
    alert("Webmasters e-mail: Wikary1986@wp.pl")
}

