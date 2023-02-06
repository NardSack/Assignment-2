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
    let line1 = `<product-item class="${type},${gender}"><img src="${link}"><p><h4>${name}</h4><p class="prod-desc">${description}</p><h3>${price}</h3></p><button class="product-butt" id="${id}" onclick="">View Product</button></product-item>`
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
        productpage.querySelector("picture").innerHTML=`<img src="${item.PictureLink}"></img>`
        productpage.querySelector("description").innerHTML=`<h2>${item.NameofProduct}</h2><h3>Type ${item.Gender} ${item.TypeofProduct}</h3></br><p>${item.Descriptionofproduct}</p></br><p>${item.PriceofProduct}</p>`
        
      }
      
      // var i=data.responseJSON
      // console.log(i)
      // foreach()

      $("#submit").on("click", function (e) {
        //prevent default action of the button 
        e.preventDefault();
      // let review = $("#review").value;
      var review = document.getElementById("review").value;
      
      var jsondata = {
        "reviewcomment": review,
        "itemid":targetid,
        "userid":1}; 
        

      var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://assign2project-142c.restdb.io/rest/review/(ObjectID)",
        "method": "PUT",
        "headers": {
          "content-type": "application/json",
          "x-apikey": "63d1f6cda95709597409cf9e",
          "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata)
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      
       
       
      })      
    });

    });
    if (productpage.style.top=="-110%")
    {productpage.style.top="0"
  
  }

  });

function hiding(){
  productpage.style.top="-110%"
}


// function show(id){
//     let id = id
//     if (productpage.style.top=="-100%")
//     {productpage.style.top="0"
// }
// }
// function hide()
// {productpage.style.top="-100%"
// }
// -------------------
