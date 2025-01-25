function anurag(){
   let ans=prompt("Enter Number")
//    parseInt agar sum1+sum2 karna hai toh parseInt compulsory hai varna nhi hai sirf plus mein concanate hojata 
// par * / % chal jaega
   if(ans%2==0)
   {
    alert("Even")
   }
   else
   {
    alert("Odd")
   }
}
function vote(){
    let age=prompt("Enter Number")
    if(age>=18)
    {
        alert("You are Eligible to vote")
    }
    else
    {
        alert("You are not Eligible to vote")
    }
}
function numbers(){
        for (let i=0;i<=10;i++){
           console.log(i)
        }
    
}