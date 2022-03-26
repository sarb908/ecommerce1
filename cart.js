var cart = JSON.parse(localStorage.getItem("cart"));
var total1 = cart.reduce(function(sum, elem){
    return sum + Number(elem.price);
    console.log(sum, Number(elem.price))
},0)

var totalItem = cart.reduce(function(sum, elem, i){
  return sum+1;
  }, 0);

 
function price(){
var total = document.querySelector(".total");
total.innerText = `Total items are ${totalItem}. \n Total price is ${total1}.`;
var btn = document.createElement("button");
btn.innerText = "CHECK OUT";

var input1 = document.createElement("input");
input1.setAttribute("placeholder", "use promo code masai30");

total.append(input1, btn);

btn.addEventListener("click", function(){
  var input2 = input1.value;
  console.log(input2)
  if(input2 =="masai30"){
    total1 = Math.floor(total1*(0.7));
    price();
  }else{
    alert("wrong promo code💥")
  }
})

};
price();





cart.map(function(elem, i){
    var div = document.createElement("div");
    var img = document.createElement("img");
    img.src =elem.image_url;

    var name = document.createElement("h1");
    name.innerText = elem.name;

    var div2 = document.createElement("div");
    div2.setAttribute("class", "pricbtn");

    var price = document.createElement("p");
    price.innerText =elem.price;

    
 var btn =document.createElement("button");
        btn.innerText = "delete";
        btn.addEventListener("click", function(){
          mycart(elem, i)
        });

        div2.append(price, btn);

        div.append(img, name, div2);

        document.querySelector(".container").append(div);
});

function mycart(elem, i){
  cart.splice(i, 1);
  localStorage.setItem("cart", JSON.stringify(cart))

  window.location.reload();
}