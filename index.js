function dwarfRollCall(dwarves) {
let listDwarves = []
  for(let i = 0; i < dwarves.length; i++){

    listDwarves.push(`${i+1}. ${dwarves[i]} `)

 }
   return listDwarves.join("");
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

   if(words.length>3){
   return true
  }
 else{
  return false
 }

}



function findTheCheese (foods) {


//**Solved two ways, 1st way using for loop second way using array.find
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
