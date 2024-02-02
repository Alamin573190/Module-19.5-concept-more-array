const toDoList =[
    'buy groceries',
    'complete projects',
    'Excercise',
    'read a book',
    'attend meeting'
];
toDoList.push('walk the dog');
console.log(toDoList);

// remove the attend meeting from array

// if(toDoList.includes('attend meeting')){
//     const indexOfMeeting =toDoList.indexOf('attend meeting');
//     toDoList.splice(indexOfMeeting,1);


// }
if(toDoList.includes('buy groceries')){
    const indexOfGusari =toDoList.indexOf('buy groceries');
    toDoList.splice(indexOfGusari,1);
}
if(!toDoList.includes('call a friend')){
    toDoList.push('call a friend');
}
// create new array
const reluxWork =toDoList.slice(2,5);
console.log(toDoList);
console.log(reluxWork);