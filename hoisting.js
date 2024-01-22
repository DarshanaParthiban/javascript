//hoisting
//variable hoisting
//console.log(a)
//var a=10
//var b
//console.log(b)
// console.log(a)
// let a=10
// let b
// console.log(b)
//functional hoisting
konguclg(5,10)
function konguclg(a,b){
    
        console.log("function example")
        for(var i=a;i<b;i++)
        if(i%2==0){
            console.log("even")
        }
        else{
            console.log("odd")
        }
    }

