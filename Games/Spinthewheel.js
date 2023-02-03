let wheel = document.querySelector('.spinner');
let spinbtn = document.querySelector('.spinbutton');
let value = Math.ceil(Math.random()*3600);


// let start = document.querySelector('.start')
spinbtn.onclick =function(){
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
    
    }
    else if (countselect<=90)
    {var element=document.getElementById("2");
    }
    else if (countselect<=135)
    {var element=document.getElementById("3");
    }
    else if (countselect<=180)
    {var element=document.getElementById("4");
    }
    else if (countselect<=225)
    {var element=document.getElementById("5");
    }
    else if (countselect<=270)
    {var element=document.getElementById("6");
    }
    else if (countselect<=315)
    {var element=document.getElementById("7");
    }
    else if (countselect<=360)
    {var element=document.getElementById("8");
    }
    rotate = Math.ceil(Math.random()*3600)
    value +=rotate;
    let audio = document.getElementById("sound effect");
    audio.play()
    console.log(element.innerHTML + " checked " + value + " "+countselect);
    // var toremove = document.getElementsByClassName("chosen")
    // toremove.classList.remove("chosen")
    // console.log( document.getElementsByClassName("chosen"))
    let message = document.getElementById("mess");
    // message.removeAttribute("hidden")
    unhide();
    message.innerHTML= `congrats you won <h3>${element.innerHTML}</h3>\n<a href="../HomePage/index.html">Go back to main page</a>`;

}
function unhide(){setTimeout(function(){
    let message = document.getElementById("mess")
    message.removeAttribute("hidden")
    message.style.zIndex=30
},13000);

}