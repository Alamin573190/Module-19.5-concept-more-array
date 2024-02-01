const numbers = [10 , 20, 30 ,72, 80, 40];
// console.log(numbers);
//  const reverse = numbers.reverse();
//  console.log(reverse);
 const rev_numbers = [];
for (const num of numbers){
   rev_numbers.unshift(num);
}
console.log(rev_numbers);



// const rev_rev_numbers = [];
// for(let  i = numbers.length - 1 ; i>=0 ; i--){
//     const num = numbers[i];
//     console.log(num);
//     rev_rev_numbers.push(num);
// };
// console.log(rev_rev_numbers);

