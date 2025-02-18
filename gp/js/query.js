let pre= document.querySelector(".pre")
let ref= document.querySelector(".ref")
let app= document.querySelector(".ap")
let pre_cancel=document.querySelector(".pre_cancel")
let re_cancel=document.querySelector(".re_cancel")
let ap_cancel=document.querySelector(".ap_cancel")

let pre_data=document.querySelectorAll("#pre_data")
let pre_btn=document.querySelector("#pre_btn")

let ref_data=document.querySelectorAll("#ref_data")
let ref_btn=document.querySelector("#ref_btn")


let book_data=document.querySelectorAll(".book_form #data")
let book_btn=document.querySelector(".book_form button")
let pre_form=document.querySelector("#pre_form")
let ref_form=document.querySelector("#ref_form")
let book_form=document.querySelector("#book_form")

let physical=document.querySelectorAll(".physical");




const urlParams = new URLSearchParams(window.location.search);


const patient = urlParams.get('v');

const notify=(text)=>{
    message.textContent=text;

    message.style.display="flex";


    setTimeout(() => {
        message.style.display="none";
        }, 7000);
}

document.querySelectorAll('input[name="app_type"]').forEach((radio) => {
    radio.addEventListener("change", function () {
        if (this.checked) {

            if(this.value=="online"){
                physical.forEach(phy=>{
                    phy.style.display="none";
                })
            }
          
            if(this.value=="physical"){
                physical.forEach(phy=>{
                    phy.style.display="block";
                })
            }
        }
    });
});



pre_data.forEach((datum, i)=> {

    datum.addEventListener("input", ()=>{
        let allFilled = Array.from(pre_data).every((field) => field.value.trim() !== '');
    pre_btn.disabled = !allFilled;

    

    })
 
    
   
});



ref_data.forEach((datum, i)=> {

    datum.addEventListener("input", ()=>{
        let allFilled = Array.from(ref_data).every((field) => field.value.trim() !== '');
    ref_btn.disabled = !allFilled;

    

    })
 
    
   
});


book_data.forEach((datum, i)=> {

    datum.addEventListener("input", ()=>{
        let allFilled = Array.from(book_data).every((field) => field.value.trim() !== '');
    book_btn.disabled = !allFilled;

    

    })
 
    
   
});


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




pre_form.addEventListener("submit", (e)=>{
    e.preventDefault()

    let form_data=new FormData(pre_form)

    fetch("../backend/prescribe.php", {
        method: "POST",
        body:form_data
    })

    .then(res=>res.json()).then(data=>{
        if(data.status=="success"){
            notify("prescription submitted")
        }
    })
})


ref_form.addEventListener("submit", (e)=>{
    e.preventDefault()

    let form_data=new FormData(ref_form)

    fetch("../backend/refer.php", {
        method: "POST",
        body:form_data
    })

    .then(res=>res.json()).then(data=>{
        if(data.status=="success"){
            notify("referral sent")
        }
    })
})



book_form.addEventListener("submit", (e)=>{
    e.preventDefault()

    let form_data=new FormData(book_form)

    fetch("../backend/refer.php", {
        method: "POST",
        body:form_data
    })

    .then(res=>res.json()).then(data=>{
        if(data.status=="success"){
            notify("appointment set")
        }
    })
})


fetch(`../backend/get_report.php?v=${patient}`, {
    method:"GET"
})

.then(res=>res.json()).then(data=>{
    if(data.status=="success"){
      document.querySelector(".query_board").innerHTML=`
      
         <div class="clip_board">
                <i class="fa-solid fa-comment-medical"></i>
            </div>
            ${data.subject}
      `
    }
})


