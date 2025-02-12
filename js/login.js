let login=document.querySelector("#login_form")
let datas=document.querySelectorAll("#data")
let sale_submit= document.querySelector("#btn")
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



login.addEventListener("submit", (e)=>{
    e.preventDefault()

    let form_data=new FormData(login);


    



    
    fetch("backend/login.php", {
        method: "POST",
        body:form_data
    })

    .then(res=>res.json()).then(data=>{
        if(data.status=="success"){
         window.location.href=data.redirect_url
        }

        else{
            datas[5].value=""
            notify("user does not exist");
        }
    })
})