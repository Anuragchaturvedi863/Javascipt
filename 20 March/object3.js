function savedata(){
    let person = {
        pr_name : document.querySelector('#name').value,
        pr_age : document.querySelector('#age').value,
        pr_contact : document.querySelector('#contact').value
    }
    console.log(person)
    return false
}

// without variable storing value in object