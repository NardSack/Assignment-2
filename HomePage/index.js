// if (localStorage.getItem("allitemlist")!=[])
// {
//   let line2=``
//   var list = JSON.parse(localStorage.getItem("allitemlist"))
//   for (var i = 0; i < list.length; i++) {
//     let description = list[i].Descriptionofproduct;
//     let name = list[i].NameofProduct
//     let price = list[i].PriceofProduct
//     let type = list[i].TypeofProduct
//     let link = list[i].PictureLink
//     let id = list[i]._id
//     let gender =list[i].Gender
//     reviewlist.push(list[i])
//     let line1 = `<product-item class="${type} ${gender}"><img src="${link}"><p><h4>${name}</h4><p class="prod-desc">${description}</p><h3>${price}</h3></p><button class="product-butt" id="${id}" onclick="">View Product</button></product-item>`
//     line2 = `${line2}${line1}`
//     console.log(`${(i+1)%3} and ${i} and ${list.length}`)
//     if ((i+1)%3 == 0 && i != 0)
//     {
//       document.getElementById("content").innerHTML+= `<row>${line2}</row>`
//       line2=``
//     }
//     else if (i== list.length-1)
//     { console.log(i)
//       document.getElementById("content").innerHTML+= `<row>${line2}</row>`}
//     }
// }
// else if (localStorage.getItem("allitemlist")==[])
// {
var settings = {
  "async": true,
  "crossDomain": true,
  // "url": "https://assign2project-142c.restdb.io/rest/itemsdetail",
  "url": "https://assignment2-09fd.restdb.io/rest/itemsdetail",
  
  "method": "GET",
  "headers": {
    "content-type": "application/json",
    // "x-apikey": "63d1f6cda95709597409cf9e",
    "x-apikey": "63e5fd58478852088da67fee",

    "cache-control": "no-cache"
  }
}
var reviewlist=[]
var data = $.ajax(settings).done(function (response) {
  console.log(response);
  
  let line2=``
  
  for (var i = 0; i < response.length; i++) {
    let description = response[i].Descriptionofproduct;
    let name = response[i].NameofProduct
    let price = response[i].PriceofProduct
    let type = response[i].TypeofProduct
    let link = response[i].PictureLink
    let id = response[i]._id
    let gender =response[i].Gender
    reviewlist.push(response[i])
    let line1 = `<product-item class="${type} ${gender}"><img src="${link}"><p><h4>${name}</h4><p class="prod-desc">${description}</p><h3>${price}</h3></p><button class="product-butt" id="${id}" onclick="">View Product</button></product-item>`
    line2 = `${line2}${line1}`
    console.log(`${(i+1)%3} and ${i} and ${response.length}`)
    if ((i+1)%3 == 0 && i != 0)
    {
      document.getElementById("content").innerHTML+= `<row>${line2}</row>`
      line2=``
    }
    else if (i== response.length-1)
    { console.log(i)
      document.getElementById("content").innerHTML+= `<row>${line2}</row>`}
    }
    console.log(reviewlist)
    localStorage.setItem("allitemlist",JSON.stringify(reviewlist))
    return response
  });
// }
  // var list= data
// var elemtn =document.querySelector(".CLASS").querySelector(img).style


var myIndex = 0;
  carousel();
  
  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 6000); // Change image every 6 seconds
  };
// -----------
// $(window).load(function() {
//   $('#loading').hide();
// });
$(document).ready(function() {
  $('#loading').hide();
});
// $( window ).on( "load", function() {
//   $('#loading').hide();
// });

var productpage=document.getElementById("productpage")

// productpage.style.top="-110%"
productpage.style.top="-110%"

// $.when(data).done(function(){})

  document.getElementById("content").addEventListener("click", function(event){
    console.log(event.target.id)
    console.log(JSON.parse(localStorage.getItem("allitemlist")))
    var targetid = event.target.id
    var list= JSON.parse(localStorage.getItem("allitemlist"))
    
    list.forEach(function(item) {
      if (item._id==targetid)
      {
        // localStorage.setItem(`${item._id}`,)
        productpage.querySelector("review").innerHTML=`<p style="Display: None;">${item._id}</p>`
        productpage.querySelector("picture").innerHTML=`<img src="${item.PictureLink}" class="clickpic"></img>`
        localStorage.setItem("piclink",item.PictureLink)
        productpage.querySelector("description").innerHTML=`<h2>${item.NameofProduct}</h2><h3>Type ${item.Gender} ${item.TypeofProduct}</h3></br><p>${item.Descriptionofproduct}</p></br><h4>${item.PriceofProduct}</h4>`
        console.log("run")
        item.review.forEach(function(things){
          console.log("run")
          productpage.querySelector("review").innerHTML += `${things.userid}: ${things.comments}</br>`
          
        })
      }

    });
    if (productpage.style.top=="-110%")
    {productpage.style.top="-0" //dawdad -0
  
  }

  });

function hiding(){
  productpage.style.top="-110%"
}

function saveData(){
  var comments= document.getElementById("comments").value
  var sub;
  if (localStorage.getItem("name") == null)
  {
    productpage.querySelector("review").innerHTML += `unknownUser: ${comments}</br>`
    sub= {"userid": "unknownUser","comments":comments}
  }
  else
  {
    productpage.querySelector("review").innerHTML += `${localStorage.getItem("name")}: ${comments}</br>`
    sub= {"userid": localStorage.getItem("name"),"comments":comments}
  }
  var list= JSON.parse(localStorage.getItem("allitemlist"))
  console.log(list)
  var itemids = productpage.querySelector("review").querySelector("p").innerHTML
  console.log(itemids)
  var jsondata={}
    list.forEach(function(item) {
      if (item._id==itemids)
      {
        var i=[];
          for (let index = 0; index < item.review.length; index++) {
              i.push(item.review[index])


            }
          
        i.push(sub)

        jsondata = {"_id":`${itemids}`,"Gender":item.Gender,"PictureLink":item.PictureLink,"NameofProduct":item.NameofProduct,"PriceofProduct":item.PriceofProduct,"Descriptionofproduct":item.Descriptionofproduct,"TypeofProduct":item.TypeofProduct,"review":i};
      }
    });
  var update = {
  "async": true,
  "crossDomain": true,
  // "url": `https://assign2project-142c.restdb.io/rest/itemsdetail/${itemids}`,
  "url": `https://assignment2-09fd.restdb.io/rest/itemsdetail/${itemids}`,

  "method": "PUT",
  "headers": {
    "content-type": "application/json",
    // "x-apikey": "63d1f6cda95709597409cf9e",
    "x-apikey": "63e5fd58478852088da67fee",

    "cache-control": "no-cache"
  },
  "processData": false,
  "data": JSON.stringify(jsondata)
  }
  $.ajax(update).done(function (response) {
    console.log(response);
    console.log(response.status);
    console.log("update review yes")
  });
  comments=null
}
///// check if works



document.getElementById("content").addEventListener("click", function(event){

targetid = event.target.id
  // var list= data.responseJSON
  //  console.log(targetid)
   return targetid
});

// localStorage.setItem("cartJSON",JSON.stringify({"pic":"https://image.uniqlo.com/UQ/ST3/sg/imagesgoods/457579/item/sggoods_09_457579.jpg?width=1008&impolicy=quality_75","nameofprod":"Some Pants","description":"Selvedge denim looks and feels better the more you wear it. ???Red ear??? styling is a distinctive feature.","price": 60,"number":1}))
// localStorage.setItem("cartJSON",JSON.stringify([]))
display()
function display(){
var cart = JSON.parse(localStorage.getItem("cartJSON"))
console.log(cart)
cart.forEach(element => {
  

console.log(cart.description)  
var display=document.querySelector("currentcart")
  if (element == [])
  {
    display.innerHTML="click add to cart to add items to cart farni"
  }
  else
  {
    display.innerHTML=`<cont><img src=${element.pic}" class="cartpic"><po><p>${element.nameofprod}</p></img><p>${element.description}</p></po></cont></br><p>$${element.price}</p><p>Quanitiy:${element.number}</p>`
  }
});
}
  function addcart(){
    var lists = JSON.parse(localStorage.getItem("cartJSON"))
    var pic = localStorage.getItem("piclink")
    var itemname = productpage.querySelector("description").querySelector("h2").innerHTML
    var descriptions = productpage.querySelector("description").querySelector("p").innerHTML
    var price = productpage.querySelector("description").querySelector("h4").innerHTML
    var i = false
    console.log(lists)
    // lists=lists
    var numberofitems=1
    var prices = 0
    try
    {
    lists.forEach(item=>{ 
      if (item.nameofprod==itemname && item.pic==pic)
      {
        item.number= item.number+1
        numberofitems=item.number
        prices =parseInt(price)+prices
        i = true
      }
    });
    lists.push({"pic":pic,"nameofprod":itemname,"description":descriptions,"price": price,"number":numberofitems})
  console.log(lists)
  }
  catch(error)
  {
    lists=[]
      lists.push({"pic":pic,"nameofprod":itemname,"description":descriptions,"price": price,"number":numberofitems})
    console.log(lists)
  }
    localStorage.setItem("cartJSON",JSON.stringify(lists))
    display()
  
}







// function saveData() {
//   // Get the input values
//   var comments = document.getElementById("comments").value;
//   document.getElementById("outputField").innerHTML = comments;


//   datas = {
//     userid:100,
//     comments: comments,
//     itemid:targetid,
//   }
    

    //        fetch("https://signlog-8d3d.restdb.io/rest/review  ", {
    // method: "POST",
    // headers: {
    //   "Content-Type": "application/json; charset=utf-8",
    //   "x-apikey": "63e129ac3bc6b255ed0c470f"
    // },
    // body: JSON.stringify(datas)
    
    //   }
      

    // );
   
    // // var datas = {
    // //   userid:100,
    // //   comments: comments,
    // //   itemid:101,
    // // }
    
     
    // };

  // Send the data to RESTdb
  

// function getContacts(limit = 10, all = true) {

// //     fetch(`https://signlog-8d3d.restdb.io/rest/review`, {
// // headers: {
// // "Content-Type": "application/json; charset=utf-8",
// // "x-apikey": "63e129ac3bc6b255ed0c470f"
// // }
// // })


// // .then(response => response.json())



// // .then(data => {
// // let tableBody = document.getElementById("dataTableBody");
// // data.forEach(item => {
// //   let tableRow = document.createElement("tr");
// //   tableRow.innerHTML = `<td>${item.comments}</td>`;
// //   tableBody.appendChild(tableRow);

  

// // });

// // })
// // .then(function(response){ii=response.data})

// }
