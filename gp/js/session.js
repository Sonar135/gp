


fetch("../backend/gp_session.php", {
    method:"GET"
})

.then(res=>res.json()).then(session_data=>{
    if(session_data.status=="logged in"){
  
        

       email=session_data.email

    }

    // if(session_data.type!=="gp"){
    //      window.location.href="login.html"
    // }


    else{
        window.location.href="login.html"
    }
})


