let ob = {
    name : "Isha", contact: 123, city: "bpl"
}


localStorage.setItem("userdata",JSON.stringify(ob)) //userdata = key, ob = value

let user = JSON.parse(localStorage.getItem('userdata'))

console.log(user.name)
console.log(user.contact)
console.log(user.city)