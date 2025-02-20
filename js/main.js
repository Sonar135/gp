let nav=document.querySelector(".header")

document.addEventListener("scroll", ()=>{
    if(scrollY>363){
        nav.classList.add("header_bordered")
    }
   else{
    nav.classList.remove("header_bordered")
   }
})
