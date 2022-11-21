function writeCards(names, event){
  console.log("names", names)
  let newArray = []
  for (let i=0; i < names.length; i++){
    newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
  }
  return newArray
}
function countDown(n){
   for (let i=n; i >= 0; i--) {
    console.log(i);
} 
 }