var arr = JSON.parse(localStorage.getItem("cred"));
var form = document.querySelector("form");

form.addEventListener("submit", myfunc);
console.log(arr)
function myfunc(){
    event.preventDefault();

    var lemail = document.querySelector("#email").value;

    var lpswd = document.querySelector("#pswd").value;
    var count = 0;
    console.log(lemail, lpswd)
    arr.forEach(function(elem){
        if(lemail == elem.email && lpswd == elem.pswd){
            alert("log in succesfull");
          
        }else{
            count++
        }
    })
    if(count>0){
        alert("invalid credential")
    }
}