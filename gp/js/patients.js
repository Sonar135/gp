



fetch("../backend/patients.php", {
    method:"GET"
})

.then(res=>res.json()).then(data=>{

    data.forEach(datum=>{
        document.querySelector(".cent").innerHTML=`

        <div class="patient_card">
                <div class="ico_cont">
                    <i class="fa-solid fa-hospital-user"></i>
                </div>

                <h4>${datum.name}</h4>
                <h4>${datum.reg_no}</h4>
            </div>
      `

      let patient_cards=document.querySelectorAll(".patient_card")

      patient_cards.forEach(patient_card=>{
        patient_card.addEventListener("click", ()=>{
            window.location.href=`patient.html?v=${datum.email}`
        })
      })
    }

      
)

})