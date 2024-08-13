// object Methods

const bookObject=()=>{
    const book={
        title:"The Alchemist",
        author:"Paulo Coelho",
        year:1988,
    }
    return {title:book.title, author:book.author};
}
console.log(bookObject());


{
// object method 


const bookupdate=(year)=>{
    const book={
        title:"The Alchemist",
        author:"Paulo Coelho",
        year:year,
        }
        return book;
}

console.log(bookupdate(1989));

}
// Nested object Methods

const library = {
    books: [
      {
        title: "The Alchemist",
        author: "Paulo Coelho",
        year: 1988
      },
      {
        title: "The Alchemist",
        author: "Paulo",
        year: 1989
      },
      {
        title: "The Alchemist",
        author: "Coelho",
        year: 1990
      }
    ]
  };


  console.log(library);

console.log(library.books);
library.books.map((ele)=>{
    console.log(ele.title);
})


// using this keyword
console.log("this section");
function bookThis(){
    const book={
        title:"The Alchemist",
        author:"Paulo Coelho",
        year:1989,
            years:function()
            {
                console.log(this.year);
            }
        
    }
}

bookThis.year();