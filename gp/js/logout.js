let logout=`<a href="logout.php"><li>Logout</li></a>`

fetch("../backend/gp_session.php", {
    method:"GET"
})

.then(res=>res.json()).then(session_data=>{
    if(session_data.status=="logged in"){
      

      document.querySelector(".right_head ul").innerHTML+=logout
      document.querySelector("#login").style.display="none";
    }



})
