function validate(){
    let name=document.querySelector('#name').value
    let email=document.querySelector('#email').value
    let age=document.querySelector('#age').value
    if (name==""){
        let errorr=document.querySelector('#errorname')
        errorr.innerHTML="Please enter your name"
        document.querySelector('#name').focus()
        return false
    }
    else if (email==""){
        alert("Please input your email")
        document.querySelector('#name').focus()
        return false
    }
    else if(!(email.includes('@gmail.com''@yahoo.in'))){
        alert("Please enter valid email must have @gmail.com")
        document.querySelector('#email').focus()
        return false
    }
    // else if(!(email.includes('@yahoo.in'))){
    //     alert("Please enter valid email must have @yahoo.in")
    //     document.querySelector('#email').focus()
    //     return false
    // }
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


    //we take input of a number it is taken as string in js but isNAN function converts it to number then test 






    // this function asks "is age not a number" and return value true in else if ,in else it will return value false
}