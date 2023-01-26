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

$.ajax(settings).done(function (response) {
  console.log(response);
  for (var i = 0; i < response.length; i++) {
    let description = response[i].Descriptionofproduct;
    let name = response[i].NameofProduct
    let price = response[i].PriceofProduct
    let type = response[i].TypeofProduct
    let link = response[i].PictureLink
    let line = `<product-item class="${type}"><img src="${link}"><p><h4>${name}</h4><p>${description}</p><h3>${price}</h3></p><button id="checkout">Add to Cart</button></product-item>`
    document.getElementById("content").innerHTML+= line
  }
  
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


