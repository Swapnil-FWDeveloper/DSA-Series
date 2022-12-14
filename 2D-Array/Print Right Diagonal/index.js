
let mat=[
        ['a','b','c','d'],
        ['e','f','g','h'],
        ['i','j','k','l'],
        ['m','n','o','p']
]

for(let i=0;i<mat.length;i++){
  for(let j=0;j<mat.length;j++){
    if(i+j==mat.length-1){
      console.log(mat[i][j])
    }
  }
}
