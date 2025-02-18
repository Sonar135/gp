let book= document.querySelector("#book_form");
let datas=document.querySelectorAll("#data")
let read=document.querySelectorAll("#read")
let sale_submit= document.querySelector("#btn")
let message=document.querySelector(".message");


datas.forEach((datum, i)=> {

    datum.addEventListener("input", ()=>{
        let allFilled = Array.from(data).every((field) => field.value.trim() !== '');
    sale_submit.disabled = !allFilled;

    

    })
 
    
   
});

fetch("backend/user_session.php", {
    method:"GET"
})

.then(res=>res.json()).then(session_data=>{
    if(session_data.status=="logged in"){
       

      let user= session_data.name
      let email=session_data.email

       read[0].value=user
       read[1].value=email
    }

})





const notify=(text)=>{
    message.textContent=text;

    message.style.display="flex";


    setTimeout(() => {
        message.style.display="none";
        }, 7000);
}

book.addEventListener("submit", (e)=>{
    e.preventDefault()

    form_data=new FormData(book)



    fetch("backend/book.php", {
        method: "POST",
        body: form_data
    })

    .then(res=>res.json()).then(data=>{
        if(data.status=="success"){
            notify("submitted")
        }

        else{
            notify("an error occured")
        }
    })
})




