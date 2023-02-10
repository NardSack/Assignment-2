var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://assign2project-142c.restdb.io/rest/itemsdetail",
  "method": "GET",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "63d1f6cda95709597409cf9e",
    "cache-control": "no-cache"
  }
}

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
    console.log(response[i].review)
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
  return response
});

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
    console.log(data.responseJSON)
    var targetid = event.target.id
    var list= data.responseJSON
    
    list.forEach(function(item) {
      if (item._id==targetid)
      {
        // localStorage.setItem(`${item._id}`,)
        productpage.querySelector("review").innerHTML=`<p style="Display: None;">${item._id}</p>`
        productpage.querySelector("picture").innerHTML=`<img src="${item.PictureLink}" class="clickpic"></img>`
        productpage.querySelector("description").innerHTML=`<h2>${item.NameofProduct}</h2><h3>Type ${item.Gender} ${item.TypeofProduct}</h3></br><p>${item.Descriptionofproduct}</p></br><p>${item.PriceofProduct}</p>`
        item.review.forEach(function(things){
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
  var sub
  if (localStorage.getItem("name") == null)
  {
    productpage.querySelector("review").innerHTML += `unknownUser: ${comments}</br>`
    sub= {"userid": "unknownUser","comments":`${comments}`}
  }
  else
  {
    productpage.querySelector("review").innerHTML += `${localStorage.getItem("name")}: ${comments}</br>`
    sub= {"userid": `${localStorage.getItem("name")}`,"comments":`${comments}`}
  }
  var list= data.responseJSON
  var itemids = productpage.querySelector("review").querySelector("p").innerHTML
    
    list.forEach(function(item) {
      if (item._id==itemids)
      {
        var i ;
          for (let index = 0; index < item.review.length; index++) {
              i  += `${item.review[index]},`;

            }
          
        i += sub
        var jsondata = {"_id":`${itemids}`,"Gender":item.Gender,"PictureLink":item.PictureLink,"NameofProduct":item.NameofProduct,"PriceofProduct":item.PriceofProduct,"Descriptionofproduct":item.Descriptionofproduct,"TypeofProduct":item.TypeofProduct,"review":[i]};
      }
  var update = {
  "async": true,
  "crossDomain": true,
  "url": `https://assign2project-142c.restdb.io/rest/itemsdetail/${itemids}`,
  "method": "PUT",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "63d1f6cda95709597409cf9e",
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
});}
///// check if works



document.getElementById("content").addEventListener("click", function(event){

window.targetid = event.target.id
  // var list= data.responseJSON0
  
  

});






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