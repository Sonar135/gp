let pre= document.querySelector(".pre")
let ref= document.querySelector(".ref")
let app= document.querySelector(".ap")
let pre_cancel=document.querySelector(".pre_cancel")
let re_cancel=document.querySelector(".re_cancel")
let ap_cancel=document.querySelector(".ap_cancel")


pre.addEventListener("click", ()=>{
    document.querySelector(".sec1").classList.add("sec_blur")
    document.querySelector(".pre_form").style.display="block";
    document.querySelector(".ac_overlay").style.display="block";
    document.querySelector(".sec1").style.animation= ""
})


pre_cancel.addEventListener("click", ()=>{
    document.querySelector(".pre_form").style.display="none";
    document.querySelector(".ac_overlay").style.display="none";
    document.querySelector(".sec1").classList.remove("sec_blur")
    document.querySelector(".sec1").style.animation= "remove_blur .5s ease-in-out"
})


ref.addEventListener("click", ()=>{
    document.querySelector(".sec1").classList.add("sec_blur")
    document.querySelector(".ref_form").style.display="block";
    document.querySelector(".ac_overlay").style.display="block";
    document.querySelector(".sec1").style.animation= ""
})


re_cancel.addEventListener("click", ()=>{
    document.querySelector(".ref_form").style.display="none";
    document.querySelector(".ac_overlay").style.display="none";
    document.querySelector(".sec1").classList.remove("sec_blur")
    document.querySelector(".sec1").style.animation= "remove_blur .5s ease-in-out"
})


app.addEventListener("click", ()=>{
    document.querySelector(".sec1").classList.add("sec_blur")
    document.querySelector(".book_form").style.display="block";
    document.querySelector(".ac_overlay").style.display="block";
    document.querySelector(".sec1").style.animation= ""
})


ap_cancel.addEventListener("click", ()=>{
    document.querySelector(".book_form").style.display="none";
    document.querySelector(".ac_overlay").style.display="none";
    document.querySelector(".sec1").classList.remove("sec_blur")
    document.querySelector(".sec1").style.animation= "remove_blur .5s ease-in-out"
})
