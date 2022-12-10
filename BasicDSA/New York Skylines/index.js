


let height=[1,4,3,2,7];

let right=0
let left=0
let bag=''
for(let i=0;i<height.length;i++){
    if(height[i]>height[i-1] && height[i]>height[i+1]){
        bag+=2+" "
    }else if(height[i]>height[i-1] || height[i]>height[i+1]){
        bag+=1+" "
    }else if(height[i]<=height[i-1] || height[i]<=height[i+1]){
        bag+=0+" "
    }
}
console.log(bag)