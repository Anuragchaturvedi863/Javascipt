let count=0;
function inc(){
    // let count=0 isme function ke andar matlab local variable declare karke value denge toh count ki value bas ek baar badhegi
    // kyuki top se read karta hai javascript mein toh ek baar badhega toh 1 hoga lekin wais wo padhega let count=0 
    // yaani wapis wo count ki value 1 se 0 kar dega isliye 1 hi badhegi bas isliye function ke upar globally define karenge
    // variable 
    let para=document.querySelector("#mypara")
    count++; // count=count+1
    para.innerHTML=count
}

function dec(){
    let para=document.querySelector("#mypara")
    count--; //count=count-1
    para.innerHTML=count
}
// supports dynamic variable