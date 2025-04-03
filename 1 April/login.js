function fun(){
    let obj = {
        name : document.querySelector('#username').value,
        pass : document.querySelector('#pass').value,
    }
    localStorage.setItem("userdata",JSON.stringify(obj))

    let user = JSON.parse(localStorage.getItem('userdata'))
    location.href="login_signup.href"
    if(obj.name==user){
        document.write("login succesfule")
    }
}