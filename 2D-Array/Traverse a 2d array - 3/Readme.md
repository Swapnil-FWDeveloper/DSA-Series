// Output => 3,6,9,12,2,5,8,11,1,4,7,10
let N=4
  let M=3
  let matrix=[[1,2,3],
             [4,5,6],
             [7,8,9],
             [10,11,12]
             ]

 let bag='';
  for(let i=M-1;i>=0;i--){
      for(let j=0;j<N;j++){
          bag+=matrix[j][i]+" "
      }
  }
   console.log(bag)
