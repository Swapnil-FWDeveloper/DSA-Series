alert("This Question ALGORITHIM is very important")
alert("code is inside index.js and questoin link inside Readme.md")
alert("But Before looking solution please try to solve yourself and do dry Run")

let arr=[-2,0,8,4]

let min=Infinity;
let max=-Infinity;

for(let i=0;i<arr.length;i++){
    if(arr[i]<min)
    {
        min=arr[i]
    }
     if(arr[i]>max){
        max=arr[i]
    }



    // here we have not done else if coz after doing else if condition will go like dry run it you will get to know
    // i=1
    // 1=-2
    // in line 11 (-2<Infinity) True i++= 1++
    // i=2
    // 2=0 
    // line no 11 again(0<-2) False now this codition will go in line no 15 and it will check (0>-Infinity) True i++
    // i=3
    // 3=8
    // 8<-2 false False now this codition will go in line no 15 and it will check (8>0) True i++
    // Run a code for this condition else if will not work like arr=[-2,-8,0,8,55,4]
    // -8
    // 55
}
console.log(min)
console.log(max)