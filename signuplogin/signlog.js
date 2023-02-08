


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



function show(*) {
 
           
document.getElementById('loadd').style.display = "block";
//accountlist is data from the accountdetail restdb
        // document.getElementById('loadbutton')
        //         .style.display = "none";
        var name = document.querySelector("#contact-Name").value;
        var password=document.querySelector("#contact-Password").value;
        var check = true
        


setTimeout(() => {
    const box = document.getElementById('loadd');
    box.style.display = 'none';
    console.log(name)
        console.log(accountlist)
        console.log(password)
        console.log(accountlist.responseJSON[1].password)
        accountlist.responseJSON.forEach(element => {
        if (element.name == name && element.password == password)
        {
            console.log('hit')
            check= false;
            localStorage.setItem("Name",element.name)
            localStorage.setItem("monotimer",element.monopoly)
            localStorage.setItem("location",element.monopolylocation)
            localStorage.setItem("spin",element.spinturn)
            localStorage.setItem("ID",element.uniqueid)
            localStorage.setItem("vouchersJSON",element.voucherlist)
            localStorage.setItem("cartJSON",element.Cart)
            window.location.href = "../accountfile/account.html";
            // localStorage.setItem("Name",element.)
        }
});
console.log(check)
if (check)
{
    document.querySelector("#contact-Name").style.border = "2px solid";
    document.querySelector("#contact-Name").style.borderColor = "red";
    document.querySelector("#contact-Password").style.border = "2px solid";
    document.querySelector("#contact-Password").style.borderColor = "red";
    return
}
}, 3000)
}; 


function show2() {
 
           
    document.getElementById('load2')
            .style.display = "block";

    // document.getElementById('loadbutton')
    //         .style.display = "none";

setTimeout(() => {
const box = document.getElementById('load2');
box.style.display = 'none';

}, 3000)}; 
// -------------------------------------------------

console.log(document.querySelector("#loadbutton"))
// function findaccount(){
// // event.preventDefault()

// })
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