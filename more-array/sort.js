  const person = ['okib', 'dokib','sakib', 'akib', 'rokib'];
  const personSort = person.sort();
//   console.log(personSort);



// // ....normal sort....
//   const numbers = [4 ,5, 7, 1,8,0,];
//   console.log(numbers.sort());

// ...complex sort...
  const numbers = [4 ,56, 7, 18,8,0,2];
  const numbers_asc = [...numbers].sort(function(a,b){return a - b});
  const numbers_dsc = [...numbers].sort(function(a,b){return b - a});
  console.log(numbers_asc);
  console.log(numbers_dsc);
