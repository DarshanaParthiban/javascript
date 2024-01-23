//async Dummy eg
/*async function asAw(){
    var promise=new Promise(
        function(response){
            setTimeout(function(){
            console.log("example")

            },1000);
        }
    );
    console.log( await promise);//if await keyword is not given the operation will be in pending state
}
asAw();*/
//next example
async function commentcode(){
  return new Promise(

    function (commentvalue){
        setTimeout(function(){
            commentvalue("this is my first comment icon")
        },1000)
    }
  )
}
async function likecode(){
    return new Promise(
        function (likevalue){
            setTimeout(function(){
                likevalue("this is my first like icon")
            },1000)
        }
      )

}
async function post(){
    let post=new Promise(
        function(postresponse){
            setTimeout(function(){
                postresponse("This is my first post")
            },3000);
        }
    );
    var [feed,comment,like]=await Promise.all([post,commentcode(),likecode()]);//if () is not given it gives function is iteratable
    console.log(feed)
    console.log(comment)
    console.log(like) //if asyn is not but await given gives error and await ,async both also not given it will proceed as promise
}
post();
