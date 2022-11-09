alert("code is inside index.js and questoin link inside Readme.md")
alert("But Before looking solution please try to solve yourself and do dry Run")

let n=4;
let arr=[1,2,3,4];

let odd=0;
let even=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]%2!=0)
    {
        odd+=arr[i]
    }
    else{
        even+=arr[i]
    }
}

if(odd>even)
{
    console.log("Odd")
}else
{
    console.log("Even")
}