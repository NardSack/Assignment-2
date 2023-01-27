var bar=document.getElementById("sidebar")

bar.style.left="-40%"

document.getElementById("dots").addEventListener("click", function(){
    console.log("done")
    if (bar.style.left=="-40%")
    {bar.style.left="0"

}
    else{bar.style.left="-40%"

}
});
