let emp = {
    emp_name :"Manish",
    emp_age : 90,
    emp_contact : 2321,
    emp_designation : "Jr developer",
    emp_account : {
        emp_balance : 2000,            // Nested object
        emp_address : "pari bazaar"
    }
}
console.log(emp.emp_age)
console.log(emp.emp_designation)
console.log(emp.emp_account.emp_address)
console.log(emp.emp_account.emp_balance)
