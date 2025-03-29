function data() {

let obj = {
    name : document.querySelector('#name').value,
    age : document.querySelector('#age').value,
    city : document.querySelector('#city').value
}

localStorage.setItem("userdata",JSON.stringify(obj))

let user = JSON.parse(localStorage.getItem('userdata'))
console.log(user.name)

return false // it terminates the function


}




