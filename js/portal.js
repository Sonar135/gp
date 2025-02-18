let port_lis=document.querySelectorAll("#port_li")
let ports=document.querySelectorAll("#port")
let other=document.querySelector(".other");
let left_p=document.querySelector(".left_p");
let vital_cont=document.querySelector(".vital_cont")
let apps=document.querySelector(".apps")
let diag_box=document.querySelector(".diag_box")
let presc=document.querySelector(".presc")
let ref=document.querySelector(".referral_block")

port_lis.forEach((port_li, i)=>{

  
    port_li.addEventListener("click", ()=>{
    
        document.querySelector(".load_overlay").style.display="flex"

        setTimeout(()=>{
            document.querySelector(".load_overlay").style.display="none"
            ports.forEach((port, j)=>{
                port.style.display="block";

                if(i!=j){
                    port.style.display="none"
                }
            })
        }, 1600)

     

        

        
    })
})






fetch("backend/get_data.php", {
    method: "GET"
})

.then(res=>res.json()).then(data=>{

    if(data.status=="success"){
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

                          <h1>${data.name}</h1>
                          <p>${data.email}</p>

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
    }






})






fetch("backend/get_app.php", {
    method: "GET",
})

.then(res=>res.json()).then(data=>{

    if(data.status=="empty"){
        apps.innerHTML="<h1>No Appointments</h1>"
    }

    else{

        data.forEach(datum=>{
            apps.innerHTML=`
        
            <div class="app_card">
                       <h4>Re: Appointment</h4>

                       <div class="app_text">
                           <p>You have been scheduled a general appointment at the center <span>${datum.hospital}</span>. Be at the designated venue at the designated time</p>
                       </div>

                       <div class="venue">
                           <i class="fa-solid fa-location-dot"> <span>${datum.location}</span></i>
                       </div>

                       <div class="time">
                           <i class="fa-regular fa-clock"></i> <span>${datum.date},  ${datum.time}</span>
                       </div>

             
                   </div>
`
        })
    
    }

})



fetch("backend/get_diagnosis.php", {
    method: "GET",
})

.then(res=>res.json()).then(data=>{

    if(data.status=="empty"){
        diag_box.innerHTML="<h1>No Record</h1>"
    }

    else{

        data.forEach(datum=>{
            diag_box.innerHTML=`
        
       <div class="diag_card">
                                <h4>${datum.date}</h4>

                                <div class="symptoms">
                                 <p> <span>Symptoms: </span> ${datum.symptoms}</p>  
                                </div>

                                <div class="diagnosis">
                                    <p> <span>Diagnosis: </span>${datum.diagnosis}</p>  
                                   </div>
                            </div>
`
        })
    
    }

})


fetch("backend/get_presc.php", {
    method: "GET",
})

.then(res=>res.json()).then(data=>{

    if(data.status=="empty"){
        presc.innerHTML="<h1>No Record</h1>"
    }

    else{

        data.forEach(datum=>{


            

            let meds=datum.meds.split(",")
            let medication=""
            meds.forEach(med=>{
                                    
                medication+=`<li>${med}</li>`
                 
             })

          

            presc.innerHTML+=`
        
      <div class="presc_card">
                                 <h4>Re: Prescriptions <span>${datum.date}</span></h4>
 
                                 <ul>
                                ${medication}
                                 </ul>

                                 <div class="venue">
                                    <i class="fa-solid fa-signature"></i><span>Signed: Admin</span></i>
                                 </div>
                                 
                             </div>
`



        })
    
    }

})


fetch("backend/get_ref.php", {
    method: "GET",
})

.then(res=>res.json()).then(data=>{

    if(data.status=="empty"){
        ref.innerHTML="<h1>No Record</h1>"
    }

    else{

        data.forEach(datum=>{
            ref.innerHTML=`
        
 <div class="referral_card">
                            <h4>${datum.date}</h4>

                            <p>You have been referred to ${datum.hospital} to continue the management and care of your medical condition. Please ensure you bring along your medical records, and test results</p>
                            <div class="venue">
                                <i class="fa-solid fa-location-dot"> <span>${datum.location}</span></i>
                            </div>
                        </div>
`
        })
    
    }

})