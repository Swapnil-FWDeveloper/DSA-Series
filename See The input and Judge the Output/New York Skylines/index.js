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