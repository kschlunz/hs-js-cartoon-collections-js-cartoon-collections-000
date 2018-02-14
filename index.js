function dwarfRollCall(dwarves) {
let listDwarves = []
  for(let i = 0; i < dwarves.length; i++){

    listDwarves.push(`${i+1}. ${dwarves[i]} `)

 }
   return listDwarves.join(""); //The join() method joins all elements of an array (or an array-like object) into a string and returns this string.
}


function summonCaptainPlanet(planeteerCalls){
  let uppercasePlaneteerCalls = [];
   for(let i = 0; i < planeteerCalls.length; i++){
       let punctuation = "!"
      uppercasePlaneteerCalls.push(`${planeteerCalls[i]}${punctuation}`.toUpperCase())
    }
        return uppercasePlaneteerCalls
}

function longPlaneteerCalls(words) {

  for(let i = 0; i < words.length; i++){

   if(words[i].length>4){
   return true
  }
  else{
     return false
   }
}

}



function findTheCheese (foods) {


//**Solved two ways, 1st way using for loop second way using array.find
//The find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.

//   let found = foods.find(element=> element=='cheddar')
//     if (found =='cheddar'){
//       return found;
//     }
// return 'no cheese!'




    for (var i = 0; i < foods.length; i++) {
      let cheese = 'cheddar'; 'gouda'; 'camembert';
        if (foods[i] === cheese) {
            return foods[i];
        }
    }
    return 'no cheese!'





}

