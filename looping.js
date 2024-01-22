//looping
//for
sum=0
for(var i=0;i<=10;i++)
{
    sum+=i
}
console.log(sum)
//while
i=0
sum=0
while(i<10){
     sum+=i
     i++
}
console.log(sum)
//do...while
i=0
sum=0
do{
    sum+=i
    i++
}while(i<10)
console.log(sum)
//example1(valid)
arr=[10,20,30]
i=0
console.log(arr.length)
for(vari=0;i<=arr.length;i++)
    console.log(arr[i])
//example2(valid)
arr=[10,20,30.5]
i=0
console.log(arr.length)
for(vari=0;i<=arr.length;i++){
    console.log(arr[i])
}
//example3(valid)
arr=[10,20,true,false]
console.log(arr.length)
for(var i=0;i<=arr.length;i++){
    console.log(arr[i])
}
arr=[10,20,"string",false]
console.log(arr.length)
for(var i=0;i<=arr.length;i++){
    console.log(arr[i])
}
//for in loop
arr=[10,20,"string",false]
for (const i in arr) {
    console.log(i)
    console.log(arr[i])
    
    }
    //for of loop
    arr=[10,20,"string",false]
    for (const value of arr) {
        console.log(value)
        
    }
    //for each loop
    arr=[10,20,"string",false]
    arr.forEach (value=>{
        console.log(value)
    });
    //for  eg
    var Customerdetails = {
        "name":"Darshana",
        "age":"20",
        "phone":"9344065093"
     }
     //for in eg
    for(key in Customerdetails){
        console.log(key,Customerdetails[key])

    }
    //for each
    //Customerdetails.forEach((key,element)=>{
       // console.log(key,element)
    //});
    //for of
    //for(Const value of Customerdetails){
       // console.log(value)
   // }
    
        


