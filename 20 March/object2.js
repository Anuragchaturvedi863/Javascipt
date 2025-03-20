function savedata(){
    let name = document.querySelector('#name').value
    let age = document.querySelector('#age').value
    let contact = document.querySelector('#contact').value

    let person = {
        pr_name : name,
        pr_age : age,
        pr_contact : contact
    }
    console.log(person)
    return false
}