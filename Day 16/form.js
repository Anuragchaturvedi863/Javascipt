let sub=()=>{
    let inpname=document.querySelector("#name").value
    let inpnum=document.querySelector("#number").value
    let inpemail=document.querySelector("#email").value
    let inppass=document.querySelector("#pass").value
    let inpcpass=document.querySelector("#cpass").value

    let errname=document.querySelector("#errname")
    let errnum=document.querySelector("#errnum")
    let erremail=document.querySelector("#erremail")
    let errpass=document.querySelector("#errpass")
    let ercpass=document.querySelector("#errcpass")

    if(inpname==""){
        errname.innerHTML="Pleas enter the name"
        errname.style.color="red"
        return false

    }
    else if(isNaN(inpnum)){ // if number then ans will be false
        errnum.innerHTML="Please Enter number only"
        return false
    }
    else if (inpnum.length!=10){
        errnum.innerHTML="Plese Enter Valid Number"
        return false
    }
    else if(!(inpemail.includes("@") && inpemail.includes(".com"))){
        erremail.innerHTML="Please enter valid Email"
        return false
    }
    else if(inpcpass!=inppass){
        errcpass.innerHTML="Please enter same password"
        return false
    }
    else if( !(inppass.match([/1234567890/]))
         && inppass.match([/!@#$%^&*()/])
         && inppass.match([/a-z/])
        && inppass.match([/A-Z/]) )
        {
            errpass.innerHTML="Please enter Strong Password"
            return false
        }
        else if(inppass!=inpcpass){
            errcpass.innerHTML="Password and Confirm Password should be same"
            return false
        }
}