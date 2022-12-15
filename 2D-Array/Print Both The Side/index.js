// print Both the diagonal
let mat=[
        ['a','b','c','d'],
        ['e','f','g','h'],
        ['i','j','k','l'],
        ['m','n','o','p']
]

for(let i=0;i<mat.length;i++){
  let bag=''
  for(let j=0;j<mat.length;j++){
    if(i+j==mat.length-1||i==j){
      bag+=mat[i][j]+" "
    }else{
      bag+=" "
    }
  }
  console.log(bag)
}


Output=> a     d
           f g
           j k
         m     p     
     
