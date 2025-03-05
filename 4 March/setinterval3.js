let ct=0
function fun(){
    let h=document.querySelector("#count")
    setInterval(()=>{h.innerHTML=ct++},500)
}
//bug of selectinterval jitni baar click karenge speed badhegi