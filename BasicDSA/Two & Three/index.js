
alert("code is inside index.js and questoin link inside Readme.md")
alert("But Before looking solution please try to solve yourself and do dry Run")

let num=6;

for(let i=1;i<=num;i++){
    if(i%2==0 && i%3==0)
    {
        console.log("Both")
    }
    else if(i%2==0)
    {
        console.log("Two")
    }
    else if(i%3==0)
    {
        console.log("Three")
    }
    else if(i%2!=0 && i%3!=0){
        console.log("None")
    }
}