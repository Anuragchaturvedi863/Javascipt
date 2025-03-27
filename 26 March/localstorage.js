localStorage.setItem("username","Aditya")
localStorage.setItem("userage",78)
localStorage.setItem("usercontact",1233214)

let name = localStorage.getItem("username")
console.log(name)

let cont = localStorage.getItem("usercontact")
console.log(cont)

localStorage.removeItem('userage')

localStorage.clear()