


fetch("backend/user_session.php", {
    method:"GET"
})

.then(res=>res.json()).then(session_data=>{
    if(session_data.status=="logged in"){
        console.log("logged in")

       user= session_data.name
       email=session_data.email

      
    }


    else{
        window.location.href="login.html"
    }
})


