

pwShowHide = document.querySelectorAll(".showHidePw"),
pwFields = document.querySelectorAll(".password"),


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


function show() {
 
           
    document.getElementById('load')
            .style.display = "block";

    // document.getElementById('loadbutton')
    //         .style.display = "none";
var newpass = document.querySelector("#password")
localStorage.setItem("password",newpass)
setTimeout(() => {
const box = document.getElementById('load');
box.style.display = 'none';
window.location="../HomePage/index.html"
}, 3000)}; 

