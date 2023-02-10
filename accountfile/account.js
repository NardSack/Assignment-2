var cart=localStorage.getItem("cartJSON")

 const para = document.createElement("span");
para.className="checkbox-label";
document.querySelector(".checkbox-label").innerHTML=cart


var name= localStorage.getItem("Name")
document.querySelector("useraccount").querySelector("h2").innerHTML= "User: "+name;
var voucher = localStorage.getItem("voucherJSON")
document.querySelector("voucherlist").querySelector("span").innerHTML=voucher;
