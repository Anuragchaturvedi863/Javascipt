function age(){
    let age=prompt("What's your age?")
    age>=18?alert("above 18"):alert("below 18")
}
function course(){
    let course=confirm("Have you completed the course?")
    let certificate=confirm("You have got certificate? ")
    if(course && certificate)
    {
        alert("Completed")
    }
    else
    {
        alert("Not Completed")
    }
}
function price(){
    let price=Number(prompt("What is the price of the item?"))
    // number parseInt parsefloat mein convert nahi bhi kare toh ans aajaega
    let discount=confirm("Whether they have a discount coupon?")
    if(discount)
    {
        alert((price*0.90))
    }
    else
    {
        alert(price)
    }
}
function result(){
    let result=prompt("What is your exam score?")
    if(result>=33)
    {
        alert("Pass")
    }
    else
    {
        alert("Fail")
    }
}
function evenodd(){
    let ans=prompt("Enter Number")
    if(ans%2==0)
    {
     alert("Even")
    }
    else
    {
     alert("Odd")
    }
 }
 function del(){
    let item=confirm("Are you sure to delete")
    if(item)
    {
        alert("Item deleted")
    }
    else
    {
        alert("Cancelled")
    }
 }
 function number(){
    let number=prompt("Write a number")
    if(number>=0)
    {
        alert("Positive")
    }
    else
    {
        alert("Negative")
    }
 }
 function print(){
    let i=1
    while(i<=10){
        console.log(i);
        i++;
    }
 }
 function input(){
    let input=prompt("Enter a number")
   do{
        prompt("Enter number again");
        input++;
   }
   while(input<10)
 }
function day(){
    let day=Number(prompt("Enter a day of the week"))
    switch(day)
    {
        case "1":
            alert("Monday");
            break;    
        case "2":
            alert("Tuesday");
            break;    
        case "3":
            alert("Wednesday");
            break;    
        case "4":
            alert("Thursday");
            break;    
        case "5":
            alert("Friday");
            break;    
        case "6":
            alert("Saturday");
            break;    
        case "7":
            alert("Sunday");
            break; 
        default : 
               alert("Invalid");
               break;  
               

    }
}
// javascript is client side and server side language
// brandon keech
// 2008-ke pehle node.js mein use hota tha javascript
// 
// BOM- interaction with window
// alert-return ok and cancel ,ok karta hai true cancel false,message display karta hai
// prompt-user input
//   let & const=block scope,var=function scope
// redeclare= let and const not allowed,var allowed
// reassignment=let aur var mein allowed,const not allowed
// hoisting=supported by var,var keyword se variable declaration hai wo scope ke upr beth jaate,let aur const mein support nhi hai
// console.log(a)
// var a=7
// var mein undefined aayega ,let aur const mein error aayega,var mein hoisting supported hai 