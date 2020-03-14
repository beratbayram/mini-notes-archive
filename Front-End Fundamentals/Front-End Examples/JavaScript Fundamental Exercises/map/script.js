/*let obje ={
  key1: "yazi",
  key2: "hhh"
}
let dizi = [1,2,3]
for (var key in obje) {
  console.log(key);
}
for (var index in dizi) {
  console.log(dizi[index]);
}
for (let index of dizi) {
  console.log(index);
}
*/
//let dizi = ["1", "2","10"]
// let yeniDizi = dizi.map((yazdir) => {
//   console.log(yazdir);
// })
// console.log(dizi);
// function yazdir(item) {
//   return item + 5
// }
//let yeniDizi = dizi.map(console.log)
// console.log(yeniDizi);
// console.log(dizi);
/*let dizi = ["0x13", "10","10000", "22"]
function cevir(item) {
  return parseInt(item)
}
//let yDizi = dizi.map(cevir)
let yDizi = dizi.map(parseInt)
console.log(yDizi);
*/

let dizi = [1,2,3,4,5,6,7,8,9,45,2,8,1,6,7,5,3,3]
/*let yDizi= dizi.slice(0,5).map((item) => {
  return item + 5
}
)
console.log(yDizi);*/
let yDizi = dizi.filter( (item, index) => {
  if (index <5) {
    return true
  }
  //return item +=5
}
).map((item) =>{
  return item +=5
}
)
console.log(yDizi);

















console.log();
