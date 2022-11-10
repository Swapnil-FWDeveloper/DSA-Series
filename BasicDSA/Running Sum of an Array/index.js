let arr=[1, 2 ,3 ,4 ,5]
let size=5;

let sum = 0;
      let bag = "";
      for(let j=0; j<arr.length; j++){
          sum = sum+arr[j];
          bag = bag + sum +" ";
      }
      console.log(bag)