
let tbody=document.querySelector("#tbody")





document.querySelector(".pat").addEventListener("click", ()=>{
    window.location.href="patients.html";
})


document.querySelector(".app").addEventListener("click", ()=>{
    window.location.href="app.html";
})

fetch("../backend/get_report.php", {
    method:"GET"
})

.then(res=>res.json()).then(data=>{

    if(data.status==="empty"){
        console.log("empty")
    }


    else{
        data.forEach((datum) => {
            // Create a new row element
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${datum.name}</td>
                <td>${datum.email}</td>
                <td>${datum.phone}</td>
                <td>${datum.date}</td>
                <td>${datum.time}</td>
            `;
        
            // Attach the event listener directly to this row
            tr.addEventListener("click", () => {
                window.location.href = `query.html?v=${datum.id}`;
            });
        
            // Append the row to tbody
            tbody.appendChild(tr);
        });
        


    }



})





fetch("../backend/patients.php", {
    method:"GET"
})

.then(res=>res.json()).then(data=>{

    data.forEach(datum=>{
        document.querySelector("#patients").textContent=datum.total
    })

  

})



fetch("../backend/get_app.php", {
    method:"GET"
})

.then(res=>res.json()).then(data=>{

    data.forEach(datum=>{
        document.querySelector("#apps").textContent=datum.total
    })

  

})