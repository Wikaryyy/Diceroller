export {roll};


function roll(highestNumber){
   var result =  Math.floor(Math.random() * highestNumber) + 1;
   return result;
}


