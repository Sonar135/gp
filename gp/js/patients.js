fetch("../backend/patients.php", {
    method: "GET"
})
.then(res => res.json())
.then(data => {
    let container = document.querySelector(".cent");
    let patientHTML = "";

    data.forEach(datum => {
        patientHTML += `
        <div class="patient_card" data-email="${datum.email}">
            <div class="ico_cont">
                <i class="fa-solid fa-hospital-user"></i>
            </div>
            <h4>${datum.name}</h4>
            <h4>${datum.reg_no}</h4>
        </div>
        `;
    });

    // Append all at once
    container.insertAdjacentHTML("beforeend", patientHTML);

    // Select and add event listeners after elements exist in the DOM
    document.querySelectorAll(".patient_card").forEach(patient_card => {
        patient_card.addEventListener("click", () => {
            let email = patient_card.getAttribute("data-email");
            window.location.href = `patient.html?v=${email}`;
        });
    });
})
.catch(error => console.error("Error fetching data:", error));
