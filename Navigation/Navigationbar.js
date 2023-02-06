var bar=document.getElementById("sidebar")

bar.style.left="-100%"

document.getElementById("dots").addEventListener("click", function(){
    console.log("done")
    if (bar.style.left=="-100%")
    {bar.style.left="0"

}
    else{bar.style.left="-100%"

}
});
 
document.querySelector("#find").addEventListener("click",function(){
    var items = document.querySelectorAll("product-item")
    console.log(items)
    var select =document.querySelectorAll('input[type="checkbox"]')

            items.forEach(item => {
                item.classList.remove("hidden")
                select.forEach(obj=>{
                    if (obj.checked)
                    {
                    
                    if(obj.id == 'shirtss')
                    {var j = "Shirt"}
                    else if (obj.id == 'pantss')
                    {var j = "Pants"}
                    else if (obj.id == 'male')
                    {var j = "Male"}
                    else if (obj.id == 'female')
                    {var j ="Female"}
                    console.log(j);
                if(item.classList.contains(`${j}`))
                {item.classList.add("selected");
                item.classList.remove("hidden");}
                else 
                {item.classList.add("hidden");}
                    }})
        });
        

    

});
