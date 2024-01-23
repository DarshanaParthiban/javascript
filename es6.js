//ES^-> ECMA script 6 standard
//1.var,let,const=>refer basic.js
//2.Arrow function
/*var fun = ()=>{
    console.log("Hello")
} 
fun()*/

//3.Destructuring operator
// var array = [10,20,30,40,50]
// var [a,b,c,d,e]=array
// console.log(a,b,c,d,e)
//4.spread operator
var array=[10,20,30]
var array1 =[...array,60,70]
console.log(array1)
//callback
var bookingtickets=(booktickets,seats)=>{
    setTimeout(()=>{
        console.log("booktickets")
        seats();
    },500)
}
var vacancy=()=>{
    console.log("Booked successfully")
}
bookingtickets("booktickets",vacancy)
//promise
const isBooked = () => {
    const v = "booked";
    if("booked"){
        return true
    }
    else{
        return false
    }
};

const bookingTickets = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isBooked()) {
                resolve("Successfully booked");
            } else {
                reject("Booking failed");
            }
        }, 1000);
    });
};

bookingTickets()
    .then((message) => {
        console.log(message);
    })
    .catch((message) => {
        console.log(message);
    });
//awake and async
const asAw = async () => {
    var promise = new Promise(
        (response) => {
            setTimeout(() => {
                console.log("example");
                response(); // You may want to call response() to fulfill the promise
            }, 1000);
        }
    );
    console.log(await promise);
};

asAw();
