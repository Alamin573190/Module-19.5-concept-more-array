// Write a JavaScript code to reverse the array colors without using the reverse method.

const colors =[ 'red','blue','green','yellow','orange'];
// console.log(colors.reverse());
const reverseColor = [];
for(const color of colors ){
     reverseColor.unshift(color);
};
// console.log(reverseColor);


// ...for loop...
const rev_reverseColor =[];
for(let i = colors.length - 1; i>=0; i--){
    const color = colors[i];
    console.log(color);
    rev_reverseColor.push(color);
}
console.log(rev_reverseColor);