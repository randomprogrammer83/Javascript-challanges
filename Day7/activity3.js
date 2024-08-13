const book={
    title:"The Alchemist",
    author:"Paulo Coelho",
    year:1988,
}
for (const prop in book) {
    
    console.log(`${prop} , :${book[prop]}`);
   
    }
// use object.value object.keys

console.log(Object.values(book));
console.log(Object.keys(book));