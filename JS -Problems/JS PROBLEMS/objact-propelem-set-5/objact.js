//---------------------------- city Population ---------------------------------


// let arr1 = [
//   ["Nice", 45600],
//   ["Abu Dhabi", 1482816],
//   ["Naples", 2186853],
//   ["Vatican City", 572]
// ];
// let a = millionRounding(arr1);
// function millionRounding(x) 
// {
//   let arr = [];

//   for (let i = 0; i < x.length; i++) 
//   {
//     let city = x[i][0];
//     let population = x[i][1];

//     var y = population < 500000 ? 0 : Math.round(population / 1000000) * 1000000;
//     arr.push([city, y]);
//   }

//   return arr;
// }

// console.log(a);


//--------------------- mapping ------------------------

// let a = mapping(["a", "b", "c"]);

// function mapping(x) 
// {
//   let obj = {};
//   for(let i = 0; i < x.length; i++) 
//   {
//     // console.log(obj[x[i]] = x[i].toUpperCase());
//     obj[x[i]] = x[i].toUpperCase();
//   }
//   return obj;
// }
// console.log(a);

//------------------------- pricey products -----------------------------------

// let a = products({"computer":600, "TV":1500, "radio":50});

// function products(x)
// {
//   let arr = [];
//   let arr1 = [];
//   let arr2 = [];
  
//   arr = Object.values(x);
//   arr1 = Object.keys(x)

//   for(let i = 0; i < arr.length; i++)
//   {
//     if(arr[i] >= 500)
//     {
//       arr2.push(arr1[i])
//     }
   
//   }
//   return arr2
// }

// console.log(a);

//--------------------- Frequency Distribution ---------------------------------

// let a = frequencyDistribution(["A", "A", "B", "C", "B"]);

// function frequencyDistribution(x) 
// {
//   let obj = {};
//   for (let i = 0; i < x.length; i++) 
//   {
//     if(obj[x[i]] === undefined) 
//     {
//       obj[x[i]] = 1; 
//     } 
//     else 
//     {
//       obj[x[i]]++;
//     }
//   }
//   return obj;
// }

// console.log(a); 

//--------------------- Generation ---------------------

// let n = generation(-2, "f");

// function generation(x, gender) 
// {
//   let male = {
//     "-3": "great grandfather",
//     "-2": "grandfather",
//     "-1": "father",
//     "0": "me!",
//     "1": "son",
//     "2": "grandson",
//     "3": "great grandson"
//   };

//   let female = {
//     "-3": "great grandmother",
//     "-2": "grandmother",
//     "-1": "mother",
//     "0": "me!",
//     "1": "daughter",
//     "2": "granddaughter",
//     "3": "great granddaughter"
//   };

//   let obj = gender === "m" ? male : female;

//   for (let i = -3; i <= 3; i++) 
//   {
//     if (i == x) 
//     {
//       console.log(obj[i]);
//     }
//   }
// }