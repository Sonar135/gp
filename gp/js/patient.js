let vitals=document.querySelector(".vitals")
let vital_cancel=document.querySelector(".vital_cancel")
let vital_form=document.querySelector("#vital_form")

let test=document.querySelector(".test")
let test_cancel=document.querySelector(".test_cancel")
let test_form=document.querySelector("#test_form")



const notify=(text)=>{
    message.textContent=text;

    message.style.display="flex";


    setTimeout(() => {
        message.style.display="none";
        }, 7000);
}


const urlParams = new URLSearchParams(window.location.search);


const patient = urlParams.get('v');


vitals.addEventListener("click", ()=>{
    document.querySelector(".sec1").classList.add("sec_blur")
    document.querySelector(".sec2").classList.add("sec_blur")
    document.querySelector(".vital_form").style.display="block";
    document.querySelector(".ac_overlay").style.display="block";
    document.querySelector(".sec1").style.animation= ""



    fetch(`../backend/get_vitals.php?v=${patient}`,{
        method:"GET"
    })


    .then(res=>res.json()).then(data=>{

        document.querySelector("#gluc").value=data.glucose
        document.querySelector("#bp").value= data.bp
        document.querySelector("#hr").value=data.hr
        document.querySelector("#chol").value=data.cholesterol
        document.querySelector("#patient").value=data.email

    })
})


vital_cancel.addEventListener("click", ()=>{
    document.querySelector(".vital_form").style.display="none";
    document.querySelector(".ac_overlay").style.display="none";
    document.querySelector(".sec1").classList.remove("sec_blur")
    document.querySelector(".sec2").classList.remove("sec_blur")
    document.querySelector(".sec1").style.animation= "remove_blur .5s ease-in-out"
    document.querySelector(".sec2").style.animation= "remove_blur .5s ease-in-out"
})


test.addEventListener("click", ()=>{
    document.querySelector(".sec1").classList.add("sec_blur")
    document.querySelector(".sec2").classList.add("sec_blur")
    document.querySelector(".test_form").style.display="block";
    document.querySelector(".ac_overlay").style.display="block";
    document.querySelector(".sec1").style.animation= ""
})


test_cancel.addEventListener("click", ()=>{
    document.querySelector(".test_form").style.display="none";
    document.querySelector(".ac_overlay").style.display="none";
    document.querySelector(".sec1").classList.remove("sec_blur")
    document.querySelector(".sec2").classList.remove("sec_blur")
    document.querySelector(".sec1").style.animation= "remove_blur .5s ease-in-out"
    document.querySelector(".sec2").style.animation= "remove_blur .5s ease-in-out"
})


let file_label=document.querySelector("#file_label")

document.querySelector("#file").addEventListener("change", ()=>{
    const file = document.querySelector("#file").files[0]; // Get the first file

    file_label.textContent = `${file.name}`;

    document.querySelector("#test_btn").disabled=false;

    // const event = new Event("input", { bubbles: true });
    // document.querySelector(".img_input").dispatchEvent(event);
        // sale_submit.disabled=false;
 
})






vital_form.addEventListener("submit", (e)=>{
    e.preventDefault()

   const form_data=new FormData(vital_form)


    fetch("../backend/vitals.php", {

        method:"POST",
        body: form_data
    
    })

    .then(res=>res.json()).then(data=>{

        if(data.status=="success"){
            notify("updated")
        }


    })
})



fetch(`get_data.php?v=${patient}`, {
    method:'GET'
})

.then(res=>res.json).then(data=>{
    other.innerHTML=`
    <div class="other_card">
                          <p>sex</p>
                          <h4>${data.gender}</h4>
                      </div>

                      <div class="other_card">
                          <p>age</p>
                          <h4>${data.age}</h4>
                      </div>

                      <div class="other_card">
                          <p>blood group</p>
                          <h4>${data.bg}</h4>
                      </div>

                      <div class="other_card">
                          <p>total appointments</p>
                          <h4>45</h4>
                      </div>

                      <div class="other_card">
                          <p>reg no</p>
                          <h4>${data.reg_no}</h4>
                      </div>

                      <div class="other_card">
                          <p>registered date</p>
                          <h4>${data.reg_date}</h4>
                      </div>

                      <div class="other_card">
                          <p>blood type</p>
                          <h4>${data.bt}</h4>
                      </div>
`


left_p.innerHTML=`
<div class="prof_pic">
                          <i class="fa-regular fa-user"></i>
                      </div>

                      <h1>${user}</h1>
                      <p>${email}</p>

                      <a href="">Edit Profile</a>
`


vital_cont.innerHTML=`

     <div class="vital_card">
                      <h4>Blood pressure</h4>
                     <h1>${data.bp}<span>mm/hg</span></h1>
                  </div>

                  <div class="vital_card">
                      <h4>heart rate</h4>
                     <h1>${data.hr} <span>BPM</span></h1>
                  </div>

                  <div class="vital_card">
                      <h4>glucose</h4>
                     <h1>${data.glucose} <span>mg/dl</span></h1>
                  </div>

                  <div class="vital_card">
                      <h4>cholesterol</h4>
                     <h1>${data.cholesterol} <span>mg/dl</span></h1>
                  </div>
`
})



test_form.addEventListener("submit", (e)=>{
    e.preventDefault()

   const form_data=new FormData(test_form)

    fetch(`../backend/upload_test.php?v=${patient}`, {

        method:"POST",
        body: form_data
    })

    .then(res=>res.json()).then(data=>{

        if(data.status="success"){
            notify("uploaded successfully")
        }

     

    })
})

