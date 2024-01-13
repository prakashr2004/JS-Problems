"use strict"


// --------------------------------------------------2.repet count -----------------------------------------------
// var array =  [1,2,3,4,5]

// var count = 1

// value = []

// for(i=0;i<array.length;i++)
// {
    
//     for(j=i+1;j<array.length;j++)
   
//     {
//         if(array[i]===array[j]){
             
//             count++
//             value = array[i]
//             break
//         }
//         else if(count==1 && value == 0)
//         {
//            value =  "no repeat number"
//         }
        
//     }
  
// }
// console.log("value : "+value)
// console.log("count : "+count)


// ---------------------------1.DECIAML PLACE ------------------------------------------------------------------

// let input = 140;

// let str = input.toString();


// let inp3 = str.indexOf(".");

// let s = str.slice(inp3);

// var total = s.length-1

// console.log(total);




// ----------------------------------3.POSTIVE EVEVT && NEGATIVE ODD NUMBER COUNT-----------------------------------------------------

// var arr =  [-22, 8, -3 , 4, -1, -4]

// counter = 0


// for(i=0; i<arr.length;i++)
// {
//     if( arr[i]%2 == 0 && arr[i] > 0)
//     {
//        counter++
//     }
//  else if(arr[i]%2 == -1 && arr[i] < 0)
//     {
//         counter++
//     }
   
// }

// console.log(counter)




// ---------------------------------------------4.TOTAL NUMBER OF LEGS --------------------------------------------------------

// function myFunction(hens,cow ,rabbit)
// {
//    return hens*2 + cow*4 +rabbit*4
// }

// var x = myFunction(7, 3, 4)
// console.log(x)











// -----------------------SET-2 (PROBLEM 2)--------------------------------------

// var str = "Hi welcome to DCKAP"
  
// var arr = str.split(" ")


// var myArr = []

// var ReverseArray = []

// for( var i=arr.length-1; i>=0   ;i--)
// {
//   myArr += " "+ arr[i]
// }
// console.log(myArr)
// for( var j=myArr.length-1;j>0;j--)
// {
//     ReverseArray += myArr[j]
// }

// console.log(ReverseArray)



// --------------------------2.FILLTER THE NUMBER --------------------------------------

// var Collation = [1, "test", true, 10, 7, "array",null,NaN]

// var Total = 0
 
// for(var i = 0; i<Collation.length; i++)
// {
//  if( !isNaN(Collation[i]) && typeof(Collation[i]) =="number" )
//    {
    
//     Total+= Collation[i]*2
//    }
   
// }
// console.log(Total)

// -------------------------------3.STRING PRESENT IN THE GIVEN ARRAY -----------------------------------------



// function machFunction(x,y)
// {
//   var y = y.toLowerCase()
//   var arr = []
//   var str ="";
//   var store;
//   for(var i=0;i<x.length;i++)
//   {  
//       str += (x[i] + " ")
//   }

//   var str = str.toLowerCase()
//   var arr = str.split(" ")
//   var store = arr.indexOf(y)
//   return store
// }
//  var y = machFunction([ "test", "organization", "abc"], "AbC")
 
// console.log(y)

// ([ "test", "organization", "abc"], "AbC")

// ([ "true", true, "12", "90", "test"], "TEST")


// --------------------------------------------------------------------------------------




// --------------------------------SET-3(PROBLEMS-2)---------------------------------------------------------

// -------------------------------------1.ODD COUNT -2 && EVEN COUNT +2----------------------------------------------------

// function IndexFunction(x,y)
// {
//   var ChangeArray = []

//     for(var i=0;i<x.length;i++)
//     {
//         if(i%2 == 0)
//         {
//            ChangeArray.push ( x[i]+2*y ) 
           
//         //    console.log(ChangeArray)
//         // console.log(x[i])
            
//         }
//     else if(i%2 !== 0 )
//       {
//            ChangeArray.push( x[i]-2*y)

//         //   console.log(x[i])
//        }
      
//     }

//     return ChangeArray
// }
// var x = IndexFunction([1, 2, 3, 4, 5],2)

// console.log(x)


// -----------------------------2(shift && pop && unshft )-----------------------------------------

// -----back to front --------------

// arr = [1,2,3,4,5]

// EmtyArr = []

// var lastElement = arr.pop()

// var total= arr.unshift(lastElement)

// console.log(arr)


// ----fornt to back -----

// var array = [1,2,3,4,5]

// modifiyArr = []

// var firstElement =array.shift()
// var secondElement = array.shift()

// var  modifyArr = array.push(secondElement,firstElement)

// console.log(array)




// -----------------------2.(SPLICE METHOD )----------------------------------------------------





// var postion = prompt("ENTER THE DIRECTION")

// var count = prompt("ENTER THE NUMBER")

// if(postion == "right")

// {
// var arr = [1,2,3,4,5]

// // var count = count;

// var slice = arr.length-count

// var lastElement = arr.splice(slice)

// var append = lastElement.concat(arr)

//  console.log(append)
// }
// else
// {
// var leftArr = [1,2,3,4,5]

// // count = count

// var slice = leftArr.splice(count)

// var modifiyArr = slice.concat(leftArr)

// console.log(modifiyArr)

// }




//------------------------------------------------------------------ 


// var arr = [1,2,3,4,5]

// var count = 2+1

// var Reversearr = []

// for(i=arr.length-1; i>=0 ;i--)
// {
//     Reversearr.push(arr[i])
// }

// var arrlen = Reversearr.length-count

// var slice = Reversearr.splice(arrlen)

// var add = slice.concat(Reversearr)

// console.log(add)

