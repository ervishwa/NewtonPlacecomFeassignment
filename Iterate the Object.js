function solve(obj){
    for (const value of Object.values(obj)) {
   console.log(value);
 }
 for(let num in obj){
   console.log(`${num}: ${obj[num]}`)
 }
 
 }