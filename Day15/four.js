// managin the items im closure

function manage(){
    let items=[];

    return function additems(){
        items.push('item added');
        console.log(items);

        return function removeitems(){
            items.pop();
            console.log(items);
        }
    }

}

const myMange=manage();
const additem=myMange();
const removeItem=myMange();
additem();
removeItem();