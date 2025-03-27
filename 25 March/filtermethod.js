let ar = [
    {
        name : "Raghav",
        attendence : "Kbhi kbh ata hai",
        productivity : "Nothing",
        age : 20
    }
    ,
    {
        name : "Surendra",
        attendence : "Null",
        productivity : "Ban hinhi pa rha", 
        age : 25
    }
    ,
    {
        name : "Abhay",
        attendence : "Kbhi kbh",
        productivity : "Nothing",
        age : 26
    }
    
]

let fl = ar.filter((e)=>{return e.age>23})
console.log(fl)

let name = ar.filter((e)=>{return e.name=="Raghav"})
console.log(name)