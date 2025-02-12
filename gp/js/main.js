let trs= document.querySelectorAll("tbody tr")


trs.forEach(tr=>{
    tr.addEventListener("click", ()=>{
        window.location.href="query.html?v=1";
    })
})