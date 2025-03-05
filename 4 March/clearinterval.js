let ct=0
let st
function fun(){
    let h=document.querySelector("#count")
    st=setInterval(()=>{h.innerHTML=ct++},500)
}
function stp(){
    clearInterval(st)
}