let count=0
function input(){
    let a=document.createElement("input" )
    let bd=document.body
    bd.append(a)
    a.setAttribute('placeholder' , 'Enter your City')
    count++
    if(count>4)
    {
        alert("Stop")
    }
}