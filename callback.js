/*function first(name,callback){
    setTimeout(function(){
        console.log(name)
        callback();
    },2000)
}
function second(){
    console.log("Dont come")
}
first("Darshu",second)*/
//form example
/*function submitform(buttonclick,db){
    setTimeout(function(){
        console.log(buttonclick)
        db();
    },2000)

}
function database(){
    console.log("form submitted successfully")
}
submitform("form submit button click",database)*/
//2nd example
function bookingtickets(booktickets,seats){
    setTimeout(function(){
        console.log("booktickets")
        seats();
    },500)
}
function vacancy(){
    console.log("Booked successfully")
}
bookingtickets("booktickets",vacancy)