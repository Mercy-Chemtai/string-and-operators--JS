let a = 'extravaganza'
let removechar = a.substring(8,);
console.log(removechar)


const food ="The quick fox jumped over the lazy dog";
const addString = food.slice(0,4) + "eat" + food.slice(4);
console.log(addString);


const story= "The quick brown fox jumps over the lazy dog";
 console.log((story.match(/The/)).length)
console.log((story.match(/brown/)).length)
let d = "brown";
let e = story.split(a).length
console.log(e)


const str1 = "The pupils are reading in the library";
 const substr1 = 'are';
  console.log(str1.search(substr1));


  const str2 = "The child was sitting on the table before it fell";
  const substr2 = 'sitting' ;
  console.log(str2.includes(substr2));

  let b ="wonderful";
  console.log(b.toUpperCase())


  let c = "Amazing";
  console.log(c.toLowerCase("Amazing"));


  let f ="A wonderful world";
  let titleCase = ""
  f.split(" ").forEach(word=>{
    const capitalizedWord= word.charAt(0).toUpperCase()+ word.slice(1).toLowerCase();
    titleCase=titleCase + capitalizedWord + " "
   } )
    console.log(titleCase)