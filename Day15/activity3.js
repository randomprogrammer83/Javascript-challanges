
function closure(){
    let id=Date.now();

    return   function genId(){
        console.log(id);
        id+=1;
        console.log(id);
    }
    
    
}

const myclosure=closure();
myclosure();


// return user name by greet 

function user(){
    let name ="Aman singh"
    return function greets(){
        console.log(`welcome Mr ${name}`);
    }
}

const greetuser=user();
greetuser();