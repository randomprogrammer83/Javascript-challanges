// While Loop

let num=1;
let sum=0;
while (num<=10) {
    sum=sum+num;
    num++;
    // console.log(sum);
}

// [print no 10 to ]

{
    let num=10;
    while (num>=1) {
         console.log(num);
         num--;
    }
}


// Do while start from here 
//print num from 5 to 1
{
    let num=5;

    do {
        console.log(num);
        num--;
    } while (num>=1);
}
//   factorial using do while

{
    let num=5;
    let fact=1;
    do {
        fact=fact*num;
        num--;
        } while (num>=1);
        console.log(fact);

}

// Pattern problem using nested loop
// right angle traingle

for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
       console.log('*');
    }
    console.log('\n');
}