let trs= document.querySelectorAll("tbody tr")
let tbody=document.querySelector("#tbody")


trs.forEach(tr=>{
    tr.addEventListener("click", ()=>{
        window.location.href="query.html?v=1";
    })
})


document.querySelector(".pat").addEventListener("click", ()=>{
    window.location.href="patients.html";
})

fetch("../backend/get_report.php", {
    method:"GET"
})

.then(res=>res.json()).then(data=>{

    data.forEach(datum=>{
        tbody.innerHTML=`

        <tr>
                               
                                  <td> ${datum.name} </td>
                                  <td>${datum.email} </td>
                                  <td>${datum.phone} </td>
                                  <td>${datum.date} </td>
                                  <td>${datum.time}</td>
                                </tr> 
      `
    })

})


