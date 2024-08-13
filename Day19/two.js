const text="AbCd";
const patt=/A,b/;

const match=text.match(patt);
console.log(match);

if (match) {
    console.log(`match found${match[0]}`);
    
}
