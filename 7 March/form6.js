function validate(){
    let name=document.querySelector('#name').value
    let email=document.querySelector('#email').value
    let age=document.querySelector('#age').value
    let pass=document.querySelector('#password').value
    let contact=document.querySelector('#contact').value
    if (name==""){
        let errorr=document.querySelector('#errorname')
        errorr.innerHTML="Please enter your name"
        document.querySelector('#name').focus()
        return false
    }
    else if (email==""){
        let errorr=document.querySelector('#errorname')
        errorr.innerHTML="Please enter your email"
        document.querySelector('#name').focus()
        return false
    }
    else if(!(email.includes('@gmail.com'||email.includes'@yahoo.in'))){
        alert("Please enter valid email must have @gmail.com")
        document.querySelector('#email').focus()
        return false
    }
   
    else if (age==""){
        alert("Please input your age")
        document.querySelector('#name').focus()
        return false
    }
    else if(isNaN(age)){
        alert("Please input number")
        document.querySelector('#name').focus()
        return false
    }
    else if(pass==""){
        alert("please fill password")
        document.querySelector('#password').focus()
        return false
    }
    else if(!(pass.match(/[!@#$%^&*_+]/))){
        alert("please enter special character")
        document.querySelector('#password').focus()
        return false
    }
    else if(contact==""){
        alert("please fill contact")
        document.querySelector('#contact').focus()
        return false
    }
    else if(contact.length>10 || contact.length<10){
        alert("please fill 10 digit number")
        document.querySelector('#contact').focus()
        return false
    }
    
}