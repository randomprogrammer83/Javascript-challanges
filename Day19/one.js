//write regular expression in js 


const regex=/pattern/;
console.log(regex);

// match to the simple pattern 

const text="hello , wordl!";
const pattern=/hello/i;

const match=text.match(pattern);

console.log(match);

if (match) {
    console.log(`match found ${match[0]}`);
    
}
else 
{
    console.log("match not found");
}

// match the number in string 

const num="1,2,3,4,5"
const matchnum=/2\ ,2,3,/;
console.log(matchnum);

const MatchNum=num.match(matchnum);
console.log(MatchNum);
