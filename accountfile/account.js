var cart=JSON.parse(localStorage.getItem("cartJSON"))
console.log(cart)
for (var i = 0; i < cart.length; i++){



document.querySelector(".checkbox-label").innerHTML=carts

}
 const para = document.createElement("span");
para.className="checkbox-label";
// document.querySelector(".checkbox-label").innerHTML=cart


var names= localStorage.getItem("name")
console.log(names)
document.querySelector("useraccount").querySelector("h2").innerHTML= "User: "+names;
var voucher = localStorage.getItem("voucherJSON")
document.querySelector("voucherlist").querySelector("span").innerHTML=voucher;

