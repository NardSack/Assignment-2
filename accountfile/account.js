var cart=JSON.parse(localStorage.getItem("cartJSON"))
console.log(cart)
for (var i = 0; i < cart.length; i++){

var element = cart[i]

document.querySelector(".checkbox-tile").innerHTML=''
var display=document.querySelector(".checkbox-label")
  if (element == [])
  {
    display.innerHTML="click add to cart to add items to cart farni"
  }
  else
  {
    display.innerHTML=`<cont><img src=${element.pic}" class="cartpic"><po><p>${element.nameofprod}</p></img><p>${element.description}</p></po></cont></br><p>$${element.price}</p><p>Quanitiy:${element.number}</p>`
  }

}
 const para = document.createElement("span");
para.className="checkbox-label";
// document.querySelector(".checkbox-label").innerHTML=cart


var names= localStorage.getItem("name")
console.log(names)
document.querySelector("useraccount").querySelector("h2").innerHTML= "User: "+names;
var voucher = JSON.parse(localStorage.getItem("vouchersJSON"))
console.log(voucher)
document.querySelector("voucherlist").querySelector("span").innerHTML+="$"+voucher.voucher +" voucher </br>";


var jsondata ={"name": localStorage.getItem("Name"),
          "password": localStorage.getItem("password"),
          "uniqueid": localStorage.getItem("useless"),
          "datejoined": localStorage.getItem("datejoin"),
          "monopoly": localStorage.getItem("monotimer"),
          "spinturn": localStorage.getItem("spin"),
          "monopolylocation": localStorage.getItem("location"),
          "voucherlist": JSON.parse(localStorage.getItem("vouchersJSON")),
          "Cart": JSON.parse(localStorage.getItem("cartJSON"))
}
var settings = {
  "async": true,
  "crossDomain": true,
  "url": `https://assignment2-09fd.restdb.io/rest/accountdetails/${localStorage.getItem("id")}`,
  "method": "PUT",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "63e5fd58478852088da67fee",
    "cache-control": "no-cache"
  },
  "processData": false,
  "data": JSON.stringify(jsondata)
}

$.ajax(settings).done(function (response) {
  console.log(response);
});