function guess(){
    let guess=Number(prompt("Enter Secret Number"))
    if(guess==10)
    {
        alert("Correct Number")
    }
    else if(guess>12)
    {
        alert("too high")
    }
    else if(guess<10 && guess>=8)
    {
        alert("little low")
    }
    else if(guess<8)
    {
        alert("too low")
    }
    else if(guess==10)
    {
        alert("Correct Number")
    }
    else if(guess>10 && guess>=12)
    {
            alert("little high")
    }
    else
    {
        alert("Invalid number")
    }
   

}
// HW - 3 times only then error
// difference btw == and ===