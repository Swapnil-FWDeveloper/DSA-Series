
let N=4
let M=3
let matrix=[[1,8,9,]
[2,7,10],
[3,6,11],
[4,5,6],
]
let bag='';
  for(let i=0;i<M;i++){
      for(let j=N-1;j>=0;j--){
          bag+=matrix[j][i]+" "
      }
  }
   console.log(bag)