var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://assign2project-142c.restdb.io/rest/accountdetails",
    "method": "GET",
    "headers": {
      "content-type": "application/json",
      "x-apikey": "63d1f6cda95709597409cf9e",
      "cache-control": "no-cache"
    }
  }

  var accountlist = $.ajax(settings).done(function (response) {
    console.log(response);
    return response;

  });


    const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

    //   js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })




    // js code to appear signup and login form
    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });


    // $(document).ready(function(){
    //     $(".loadbutton").click(function(){
    //       $("load").show();
    //     });
    //     $(".btn2").click(function(){
    //       $("p").show();
    //     });
    //   });
    var but= document.querySelector("#loadbutton")
    but.addEventListener("click",function(event){

        function secondfunction(){
            setTimeout(function(){
            var names = document.querySelector("#contact-Name").value;
            var password=document.querySelector("#contact-Password").value;
            console.log(names)
            console.log(password)
            console.log(accountlist.responseJSON[1].name)
            console.log(accountlist.responseJSON)
            console.log(accountlist.responseJSON[1].password)
            
            for (let index = 0; index < accountlist.responseJSON.length; index++) {
                const element = accountlist.responseJSON[index];
                console.log(1)
                if (names == element.name && password ==element.password)
                {
                            localStorage.setItem("Name",element.name)
                            localStorage.setItem("monotimer",element.monopoly)
                            localStorage.setItem("location",element.monopolylocation)
                            localStorage.setItem("spin",element.spinturn)
                            localStorage.setItem("useless",element.uniqueid)
                            var voucherlist =element.voucherlist
                            if(voucherlist == {})
                            {
                                voucherlist ="1"
                            }
                            else
                            {
                            var IT='';
                            let list = voucherlist.slice(1,-1).split(",")

                            for (let index = 0; index < list.length; index++) {
                                const element = list[index];
                                console.log(element)
                                console.log(list.length)
                                console.log(IT)
                                if (index == list.length-1)
                                {
                                    IT+= element
                                }
                                else
                                {
                                    console.log("hit")
                                    IT+= element+","
                                }
                            }
                            voucherlist=IT
                            }
                            localStorage.setItem("vouchersJSON",JSON.stringify(voucherlist))
                            var cartlist = element.Cart
                            if(cartlist == {})
                            {
                                cartlist ="1"
                            }
                            else
                            {
                            var IT='';
                            let list = cartlist.slice(1,-1).split(",")

                            for (let index = 0; index < list.length; index++) {
                                const element = list[index];
                                console.log(element)
                                console.log(list.length)
                                console.log(IT)
                                if (index == list.length-1)
                                {
                                    IT+= element
                                }
                                else
                                {
                                    console.log("hit")
                                    IT+= element+","
                                }
                            }
                            cartlist=IT
                        }
                            localStorage.setItem("cartJSON",JSON.stringify(cartlist))
                            localStorage.setItem("password",element.password)
                            localStorage.setItem("id",element._id)
                            
                    window.location="../accountfile/account.html"
                }
                
            }
            

                console.log("reached")
                document.querySelector("#contact-Name").style.border = "5px solid";
                document.querySelector("#contact-Name").style.borderColor = "red";
                document.querySelector("#contact-Password").style.border = "5px solid";
                document.querySelector("#contact-Password").style.borderColor = "red";

        },4000)
        }
        function show() {
            document.getElementById('loadd').style.display = "block";
            setTimeout(function(){
                const box = document.getElementById('loadd');
                box.style.display = 'none';
                
            }, 3000)};
        show(secondfunction());
    })

    var but2= document.querySelector("#loadbutton2")
    but2.addEventListener("click",function(){
        function the2one(){
            setTimeout(function(){
                var checks = document.querySelector("#termCon")
                var newnam=document.querySelector("#new-name").value;
                var newemail=document.querySelector("#new-email").value;
                var newphone=document.querySelector("#new-phone").value;
                var newpass=document.querySelector("#new-password").value;
                if (checks.checked)
                {
                    currentdate=new Date()
                    console.log(currentdate)
                        localStorage.setItem("Name",newnam)
                        localStorage.setItem("monotimer",currentdate)
                        localStorage.setItem("location",1)
                        localStorage.setItem("spin",0)
                        localStorage.setItem("useless",accountlist.responseJSON.length+1) //-- push api
                        localStorage.setItem("vouchersJSON",JSON.stringify([]))
                        localStorage.setItem("cartJSON",JSON.stringify([]))
                        localStorage.setItem("password",newpass)
                        var jsondata = 
                        {"name": localStorage.getItem("Name"),
                        "password": localStorage.getItem("password"),
                        "uniqueid": localStorage.getItem("useless"),
                        "datejoined": Date(),
                        "monopoly": localStorage.getItem("monotimer"),
                        "spinturn": localStorage.getItem("spin"),
                        "monopolylocation": localStorage.getItem("location"),
                        "voucherlist": JSON.parse(localStorage.getItem("vouchersJSON")),
                        "Cart": JSON.parse(localStorage.getItem("cartJSON"))};
                    
                        var setting = {
                          "async": true,
                          "crossDomain": true,
                          "url": "https://assign2project-142c.restdb.io/rest/accountdetails",
                          "method": "POST",
                          "headers": {
                            "content-type": "application/json",
                            "x-apikey": "63d1f6cda95709597409cf9e",
                            "cache-control": "no-cache"
                          },
                          "processData": false,
                          "data": JSON.stringify(jsondata)
                        }
                        
                        $.ajax(setting).done(function (response) {
                          console.log(response);
                          console.log(response.status)
                          console.log("create new hooman")
                        //   localStorage.setItem("id",response[response.length-1]._id)//////////////////////////////////////////////////////////////////////////////
                        //   localStorage.setItem("datejoin",reponse[response.length-1].datejoined)
                        });
                    window.location="../accountfile/account.html"
                }
                else{
                console.log("reached")
                document.querySelector("#new-name").style.border = "5px solid";
                document.querySelector("#new-name").style.borderColor = "red";
                document.querySelector("#new-email").style.border = "5px solid";
                document.querySelector("#new-email").style.borderColor = "red";
                document.querySelector("#new-phone").style.border = "5px solid";
                document.querySelector("#new-phone").style.borderColor = "red";
                document.querySelector("#new-password").style.border = "5px solid";
                document.querySelector("#new-password").style.borderColor = "red";
                alert("Please agree to terms and conditions")
                }
            },4000)
        }
        function show() {
            document.getElementById('loadd').style.display = "block";
            setTimeout(function(){
                const box = document.getElementById('loadd');
                box.style.display = 'none';
                
            }, 3000)};
        show(the2one());
    })




































// function validateForm() {
//     var name = document.querySelector("#contact-Name").value;
//     var password=document.querySelector("#contact-Password").value;
//     var check = false
//     console.log(name)
//     console.log(accountlist)
//     console.log(password)
//     console.log(accountlist.responseJSON[1].password)
//     // accountlist.responseJSON.forEach(element => {
//     // if (element.name == name && element.password == password)
//     if (name== "raynard"&& password=="fish")
//     {
//         console.log('hit')
//         check= true;
//         localStorage.setItem("Name",element.name)
//         localStorage.setItem("monotimer",element.monopoly)
//         localStorage.setItem("location",element.monopolylocation)
//         localStorage.setItem("spin",element.spinturn)
//         localStorage.setItem("ID",element.uniqueid)
//         localStorage.setItem("vouchersJSON",element.voucherlist)
//         localStorage.setItem("cartJSON",element.Cart)
//         // localStorage.setItem("Name",element.)
//     }
// // });
// console.log(check)
// if (check)
// {
// document.querySelector("#contact-Name").style.border = "2px solid";
// document.querySelector("#contact-Name").style.borderColor = "red";
// document.querySelector("#contact-Password").style.border = "2px solid";
// document.querySelector("#contact-Password").style.borderColor = "red";
// return false;
// }
// return show();

// }


//     // window.location.href = "../accountfile/account.html";
// function show() {
           
// document.getElementById('loadd').style.display = "block";
// //accountlist is data from the accountdetail restdb
//         // document.getElementById('loadbutton')
//         //         .style.display = "none";

        


// setTimeout(() => {
//     const box = document.getElementById('loadd');
//     box.style.display = 'none';
    
// }, 3000)
// }; 


// function show2() {
 
           
//     document.getElementById('load2')
//             .style.display = "block";

//     // document.getElementById('loadbutton')
//     //         .style.display = "none";

// setTimeout(() => {
// const box = document.getElementById('load2');
// box.style.display = 'none';

// }, 3000)
// return true;}; 
// // -------------------------------------------------

// console.log(document.querySelector("#loadbutton"))
// // function findaccount(){
// // // event.preventDefault()

// // })
// var settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://assign2project-142c.restdb.io/rest/accountdetails",
//     "method": "GET",
//     "headers": {
//       "content-type": "application/json",
//       "x-apikey": "63d1f6cda95709597409cf9e",
//       "cache-control": "no-cache"
//     }
//   }

//   var accountlist = $.ajax(settings).done(function (response) {
//     console.log(response);
//     return response;

//   });