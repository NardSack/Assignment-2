let wheel = document.querySelector('.spinner');
let spinbtn = document.querySelector('.spinbutton');
let value = Math.ceil(Math.random()*3600);
var voucherlist =""
// localStorage.setItem("vouchersJSON",JSON.stringify(`{"voucher":2},{"voucher":3}`))
localStorage.setItem("vouchersJSON",'1')
if (localStorage.getItem("vouchersJSON")=='1')
{
    voucherlist='non'
}
else
{
voucherlist =(JSON.parse(localStorage.getItem("vouchersJSON")))
// console.log(voucherlist)
}
// var IT='';

// let list = voucherlist.slice(1,-1).split(",")

// for (let index = 0; index < list.length; index++) {
//     const element = list[index];
//     console.log(element)
//     console.log(list.length)
//     console.log(IT)
//     if (index == list.length-1)
//     {
//         IT+= element
//     }
//     else
//     {
//         console.log("hit")
//         IT+= element+","
//     }
// }
// voucherlist=IT
console.log(voucherlist)
var spin = (parseInt(localStorage.getItem("spin")))
let message = document.getElementById("mess");
console.log(spin)
if (spin ==0 )
{message.innerHTML="Return when you have more spin turns"
message.removeAttribute("hidden")
message.style.zIndex=30
}
// let start = document.querySelector('.start')
spinbtn.onclick =function(){
    console.log(spin)
        turn = value + 22.5
        wheel.style.transform = "rotate("+turn +"deg)";
        wheel.style.transition = "transform 11s ease-in-out";

    // countselect = 360-(((value/360)-Math.floor(value/360))*360)
    count = value
    while (count>360)
    {
        count -=360
    }
    countselect= 360 - count 
    console.log(count);
    if (countselect<=45)
    {var element=document.getElementById("1");
    var prize = 2
    
    }
    else if (countselect<=90)
    {var element=document.getElementById("2");
    var prize = 1
    }
    else if (countselect<=135)
    {var element=document.getElementById("3");
    var prize = 0
    }
    else if (countselect<=180)
    {var element=document.getElementById("4");
    var prize = 3
    }
    else if (countselect<=225)
    {var element=document.getElementById("5");
    var prize = 4
    }
    else if (countselect<=270)
    {var element=document.getElementById("6");
    var prize = 0
    }
    else if (countselect<=315)
    {var element=document.getElementById("7");
    var prize = 1
    }
    else if (countselect<=360)
    {var element=document.getElementById("8");
    var prize = 1
    }
    localStorage.setItem("element",element.innerHTML)
 
    localStorage.setItem("elementvoucher",prize)
    rotate = Math.ceil(Math.random()*3600)
    value +=rotate;
    let audio = document.getElementById("sound effect");
    audio.play()
    console.log(element.innerHTML + " checked " + value + " "+countselect);

    unhide();


        
}
function unhide(){setTimeout(function(){
    let message = document.getElementById("mess")
    message.removeAttribute("hidden")
    message.style.zIndex=30
    spin = spin -1
    var element =localStorage.getItem("element")
    if (spin == 0)
    {
        message.innerHTML= `congrats you won <h3>${element}</h3>\n<button id="home"><a href="../HomePage/index.html">Go back to main page</a></button>`;
    }
    else
    {
        message.innerHTML= `congrats you won <h3>${element}</h3>\n<button id="home"><a href="../HomePage/index.html">Go back to main page</a></button><button onclick="hide()">Spin again</button>`;
    }
    if(voucherlist=='non')
    {
        voucherlist=`{"voucher":${parseInt(localStorage.getItem("elementvoucher"))}}`
    }
    else
    {
    voucherlist=voucherlist+`,{"voucher":${parseInt(localStorage.getItem("elementvoucher"))}}`
    }
    console.log(voucherlist)
    localStorage.setItem("spin",spin)
    localStorage.setItem("vouchersJSON",JSON.stringify(voucherlist))
    console.log(message)
    console.log(document.querySelector("#home"))
    var updating = document.querySelector("#home")
    updating.addEventListener("click",function updaterequest(event){
        event.preventDefault()
        console.log("works")
        //     let url = "specify website"/////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //               let payload = {
        //                 _id:,
        //                 name:,
        //                 password:,
        //                 uniqueid:,
        //                 datejoined:,
        //                 monopoly:,
        //                 spinturn:,
        //                 monopolylocation:,
        //                 voucherlist:,
        //                 cart:,
        //               }
        //               let option ={
        //                 method:"PUT",
        //                 body: JSON.stringify(payload)
        //               }
        //               fetch(url,option)
        //               .then(Response =>console.log(Response.status))
        var jsondata ={"name": localStorage.getItem("Name"),
          "password": localStorage.getItem("password"),
          "uniqueid": localStorage.getItem("useless"),
          "datejoined": localStorage.getItem("datejoin"),
          "monopoly": localStorage.getItem("monotimer"),
          "spinturn": localStorage.getItem("spin"),
          "monopolylocation": localStorage.getItem("location"),
          "voucherlist": [JSON.parse(localStorage.getItem("vouchersJSON"))],
          "Cart": [JSON.parse(localStorage.getItem("cartJSON"))]
        };
          var settings = {
            "async": true,
            "crossDomain": true,
            // "url": `https://assign2project-142c.restdb.io/rest/accountdetails/${localStorage.getItem("id")}`,
            "url": `https://signlog-8d3d.restdb.io/rest/accountdetails/${localStorage.getItem("id")}`,

            "method": "PUT",
            "headers": {
              "content-type": "application/json",
              // "x-apikey": "63d1f6cda95709597409cf9e",
              "x-apikey": "63e129ac3bc6b255ed0c470f",

              "cache-control": "no-cache"
            },
            "processData": false,
            "data": JSON.stringify(jsondata)
          }
          
          $.ajax(settings).done(function (response) {
            console.log(response);
            console.log(response.status);

          });
        
        event.stopPropagation();
        window.location="../HomePage/index.html";
        })
},13000);
}
function hide(){
    message.classList.add("hidden")
    message.style.zIndex=-10
}