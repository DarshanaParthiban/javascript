/*function isAuthenticated() {
    return Math.random() < 1;
  }
  function Login() {
    return new Promise(function (response, noresponse) {
      setTimeout(function () {
        if (isAuthenticated()) {
          response("Your Authentication is Successful");
        } else {
          noresponse("Your Authentication is not Successful");
        }
      }, 1000);
    });
  }
  Login()
    .then(function (message) {
      console.log(message);
    })
    .catch(function (message) {
      console.log(message);
    });*/
    function isbooked(){
        var v="booked"
        if("booked"){
            return true
        }
        else{
            return false
        }
    }
    function bookingtickets(){
        return new Promise(function(response,reject){
           setTimeout(function(){
            if(isbooked){
                console.log("successfull")
            }
            else{
                console.log("failed")
            }
           },1000)

        
    })
    }
    bookingtickets()
    .then(function(message){
        console.log(message)
    })
    .catch(function(message){
        console.log(message)
    })
    