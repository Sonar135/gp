let datas=document.querySelectorAll("#data")
let sale_submit= document.querySelector("#btn")
let signup=document.querySelector("#signup_form")
let message=document.querySelector(".message");

datas.forEach((datum, i)=> {

    datum.addEventListener("input", ()=>{
        let allFilled = Array.from(data).every((field) => field.value.trim() !== '');
    sale_submit.disabled = !allFilled;

    

    })
 
    
   
});



const notify=(text)=>{
    message.textContent=text;

    message.style.display="flex";


    setTimeout(() => {
        message.style.display="none";
        }, 7000);
}




signup.addEventListener("submit", (e)=>{
    e.preventDefault()

    let form_data=new FormData(signup);



    fetch("backend/signup.php", {
        method: "POST",
        body:form_data
    })

    .then(res=>res.json()).then(data=>{


        if(data.status=="invalid_email"){
            datas[5].value=""
            notify("invalid email")
        }

        else if(data.status=="pwd_match"){
            notify("passwords don't match")

            datas[6].value=""
            datas[7].value=""

        }

        else if(data.status=="invalid_pass"){
            notify("password too weak")

            datas[6].value=""
            datas[7].value=""

        }

        else if(data.status=="email_exists"){
            notify("email already exists")
            datas[5].value=""
        }


        if(data.status=="success"){
    
            datas.forEach(datum=>{
                datum.value="";
            })

            message.textContent="account created";

            message.style.display="flex";


            setTimeout(() => {
               window.location.href="login.html"
                }, 1300);
        }
    })
})


