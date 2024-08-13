
// import { Add } from './activity1.js';
// const result=Add(2,3,4);
// console.log(result);

// console.log("hello world");


// import { obj } from './activity1.js';

// console.log(obj.name);
// console.log(obj.age);


// importing the another parts

// import { add, mul } from './activity1.js';

// const result=add(3,4);

// const result2=mul(2,3,4);

// console.log(result);
// console.log(result2);  

// importing the entire modules

// import * as myModule from './activity1.js';
// console.log(myModule.add(3,4));
// console.log(myModule.mul(2,3,4));

// importing the lodash 

import { chunk, filter, map } from 'lodash';

export { chunk, filter, map };

console.log(_.chunk([1,2,3,4,5],2));