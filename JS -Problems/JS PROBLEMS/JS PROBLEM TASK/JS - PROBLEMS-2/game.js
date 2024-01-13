
//-------------------REVERSE NUMBER(PARAMETER)---------------------------------------------------------------

// function reverse_a_number()
// {
// 	n = n + "";
// 	return n.split("").reverse().join("");
// }
// console.log(Number(reverse_a_number(32243)));




// ---------------------UPPERCASE PROGRAME(retrun ulla)-------------------------------

// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//       return newarray1.join(' ');
//   }

  
// }
// let a = uppercase("the quick brown fox")
// console.log(a);



// -----------------ALPHA ORDER (METHOD)------------------------------------------------------------------

// function alphabet_order(str)
//   {
// return str.split('').sort.join('');
//   }
// console.log(alphabet_order("webmaster"));


// ----------------------vowel count (+)--------------------------------------------------------------------
  

// function vowel_count(str1)
// {
//   var vowel_list = 'aeiouAEIOU';
//   var vcount = 0;
  
//   for(var x = 0; x < str1.length ; x++)
//   {
//     if (vowel_list.indexOf(str1[x]) !== -1)
//     {
//       vcount += 1;
//     }
  
//   }
//   return 
// }
// console.log(vowel_count("The quick brown fox"));

















// -------------------(2)SECOND ROUUND -out : 2,4------------------------------------------



// -----------------1.-----------------------------------------------

// function Second_Greatest_Lowest(arr_num)
// {
//   arr_num.sort(function(x,y)
//            {
//            return x-y;
//            });
//   var uniqa = [arr_num[0]];
//   var result = [];
  
//   for(var j=1; j < arr_num.length; j++)
//   {
//     if(arr_num[j-1] !== arr_num[j])
//     {
//       uniqa.push(arr_num[j]);
//     }
//   }
//     result.push(uniqa[1],uniqa[uniqa.length-2]);
//   return result.join(',');
//   }

// console.log(Second_Greatest_Lowest([1,2,3,4,5]));






// --------------------------2.----------------------------------------------


// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1


// function amountTocoins(amount, coins) 
// {
//  if (amount === 0) 
//   {
//      return [];
//    } 
//  else
//    {
// function product(input){
//     if (toString.call(input) !== "[object Array]")
//        return false;
     
//             var total   =   1;
     
//           for(var i=0;i<input.length;i++){
//                   if(isNaN(input[i])){
//                     continue;
//                   }
//                    total   *=  Number(input[i]);
//                }
//              return total;
//            }
//    console.log(product([1,2,3]));
//    console.log(product([100,-200,3]));
//    console.log(product([1,2,'a',3]));
//      if (amount >= coins[0]) 
//        {
//         left = (amount - coins[0]);
//         return [coins[0]].concat( amountTocoins(left, coins) );
//         } 
//       else
//         {
//          coins.shift();
//          return amountTocoins(amount, coins);
//         }
//     }
// } 
// console.log(amountTocoins(46, [25, 10, 5, 2,1]));










// ----------3. function to compute the factors of a positive intege---------------------------------



// function factors(n)
// {
//  var num_factors = [], i;
 
//  for (i = 1; i <= Math.floor(Math.sqrt(n));
// function product(input){
//     if (toString.call(input) !== "[object Array]")
//        return false;
     
//             var total   =   1;
     
//           for(var i=0;i<input.length;i++){
//                   if(isNaN(input[i])){
//                     continue;
//                   }
//                    total   *=  Number(input[i]);
//                }
//              return total;
//            }
//    console.log(product([1,2,3]));
//    console.log(product([100,-200,3]));
//    console.log(product([1,2,'a',3])); i += 1)
//   if (n % i === 0)
//   {
//    num_factors.push(i);
//    if (n / i !== i)
//     num_factors.push(n / i);
//   }
//  num_factors.sort(function(x, y)
//    {
//      return x - y;});  // numeric sort
//      return num_factors;
//     }










// ----------------4.--------------------------------------------------


// Write a JavaScript function to calculate the product of values in an array.

// Test Data:
// console.log(product([1,2,3]));
// console.log(product([100,-200,3]));
// console.log(product([1,2,'a',3]));https://www.w3resource.com/javascript-exercises/javascript-math-exercise-83.php
// Output:
// 6
// -60000
// 6


// function product(input){
//     if (toString.call(input) !== "[object Array]")
//        return false;
     
//             var total   =   1;
     
//           for(var i=0;i<input.length;i++){
//                   if(isNaN(input[i])){
//                     continue;
//                   }
//                    total   *=  Number(input[i]);
//                }
//              return total;
//            }
//    console.log(product([1,2,3]));
//    console.log(product([100,-200,3]));
//    console.log(product([1,2,'a',3]));



// ------------------------------------------------------------

// Write a JavaScript program to print all the prime factors of a given number.

// (75) -> [3, 5, 5]
// (18) -> [2, 3, 3]
// (101) -> [101]



// const Prime_Factors = (number) => {
//     const result_factors = []
//     for (let i = 2; i * i <= number; i++) {
//       while (number % i === 0) {
//         result_factors.push(i)
//         number = Math.floor(number / i)
//       }
//     }
//     if (number > 1) {
//       result_factors.push(number)
//     }
//     return result_factors
//   }
//   console.log(Prime_Factors(75))
//   console.log(Prime_Factors(18))
//   console.log(Prime_Factors(101))






const numbers =[-798,789,435,32,-76,-67,65,78,98,-5443,547,-574,89,67,-45,444,34,56];

let sum = 0
for (let i = 3; i <=numbers.length; i+=4) {

  sum %= numbers[i];

}

console.log(sum);


// ----4.444

// ----------------(-)20

// -----------------(%)0