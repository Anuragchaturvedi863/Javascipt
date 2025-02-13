// let text="This is String"
// let okk=[2,5,6,7,8]
// let obb={name:"Anurag",age:25}
let students=[{name:"Sid",
          age:25,
          city:"Bhopal"}
          ,
        {name:"Zaid",
         age:21,
         city:"Indore"}
         ,
        {name:"Anurag",
          age:25,
          city:"Bhopal"  
        }
        ,
        {
        name:"akash",
        age:25,
        city:"Bhopal"
        }
]  
// let display=document.querySelector("#dataDisplay")
// // display.innerHTML="Hello"
// students.map( (e)=>{
//     display.innerHTML+= `
//     <div>
//     <h1 id="datah1"> Name:-${e.name} </h1>
//     <h2 ${e.age} </h2>
//     <h3> ${e.city} <h3>
//     </div>`
// })
let display=document.querySelector("#dataDisplay")
display.innerHTML="Hello"
students.map((e)=>{
  <tr>
    <td>${e.name}</td>
    <td>${e.city}</td>  
    <td>${e.age}</td>
    </tr>
} )
