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



function show() {
 
           
document.getElementById('loadd').style.display = "block";

        // document.getElementById('loadbutton')
        //         .style.display = "none";
        var name = document.querySelector("#contact-Name").value;
        var password=document.querySelector("#contact-Password").value;
        accountlist.forEach(element => {///////////////////////////////////////////////finsih the foreach loop
            
        });
    setTimeout(() => {
const box = document.getElementById('loadd');
box.style.display = 'none';

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
