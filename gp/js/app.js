let tbody=document.querySelector("#tbody")


fetch("../backend/get_app.php", {
    method: "GET"
})

.then(res=>res.json()).then(data=>{
    data.forEach(datum=>{

        let type=datum.type=="physical"?"physical":`<a href="consultation.html?v=''"> Online</a>`
        let hospital=datum.type=="online"?"online":`${datum.hospital}` 
        tbody.innerHTML+=`

        <tr>
                               
                                  <td> ${datum.email} </td>
                                  <td>${hospital} </td>
                                  <td>${datum.date} </td>
                                  <td>${datum.time} </td>
                                  <td>${type}</td>
                                </tr> 
      `
    })
})