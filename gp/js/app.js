let tbody=document.querySelector("#tbody")


fetch("../backend/get_app.php", {
    method: "GET"
})

.then(res=>res.json()).then(data=>{
    data.forEach(datum=>{

        let type=datum.type=="physical"?"physical":`<a href=""> Online</a>`
        tbody.innerHTML=`

        <tr>
                               
                                  <td> ${datum.email} </td>
                                  <td>${datum.hospital} </td>
                                  <td>${datum.date} </td>
                                  <td>${datum.time} </td>
                                  <td>${type}</td>
                                </tr> 
      `
    })
})