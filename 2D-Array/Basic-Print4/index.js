
let mat=[
    ['a','b','c'],
    ['d','e','f'],
    ['g','h','i'],
  ]
let col=mat[0].length
let row=mat.length

for(let i=0;i<row;i++){
  let bag=""
  for(let j=col-1;j>=0;j--){
    // console.log(mat[j][i])
    bag+=(mat[i][j])+" "
  }
  console.log(bag)
}