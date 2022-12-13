

let mat=[
    ['a','b','c'],
    ['d','e','f'],
    ['g','h','i'],
  ]

let col =mat[0].length
let row=mat.length
for(let i=0;i<row;i++){
  for(let j=0;j<col;j++){
    console.log(mat[i][j])
  }
}