var form =document.querySelector("form");

form.addEventListener("submit", myfunc);
var arr = JSON.parse(localStorage.getItem("cred")) || [];
function myfunc(){
    event.preventDefault();

    var email = document.querySelector("#email").value;

    var pswd = document.querySelector("#pswd").value;

    var name = document.querySelector("#name").value;

    var obj = {
        name:name,
        pswd:pswd,
        email:email

    }
    console.log(obj)
    arr.push(obj);
    localStorage.setItem("cred", JSON.stringify(arr));
}