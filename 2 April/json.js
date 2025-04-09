let fetchData= async()=>{
    let url="http://localhost:3000/hotel"
    let res= await fetch(url, {method:"GET"})
    let data= await res.json()
    console.log(data)
    let Show= document.querySelector("#dataShow")
    data.map((e)=>{
        Show.innerHTML+=`
        <tr>
        <td> ${e.name} </td>
        <td> ${e.age} </td>
        <td onclick="Del('${e.id}')"> Delete </td>
        <td onclick="FormFill('${e.id}')"> Update </td>
        </tr>
        ` 
    })
}

let Del=(id)=>{
    let url=`http://localhost:3000/hotel/${id}`
    fetch(url,{method:"DELETE"})
}

let book=()=>{
    let inpname=document.querySelector("#name").value
    let inpage=document.querySelector("#age").value
    let url="http://localhost:3000/hotel"
    fetch(url,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(
            {
                "name":inpname,
                "age":inpage
            }
        )
    })

    location.href="json.html"
    return false
}



let FormFill= async(id)=>{
    let url = `http://localhost:3000/hotel/${id}`
    let res = await fetch(url, {method:"GET"})
    let data = await res.json()
    console.log(data)
    let FormData = document.querySelector("#datashow")
    FormData.innerHTML=`
    Enter Name: <input type="text" id="upname" value="${data.name}"> <br> <br>    
    Enter Age: <input type="text" id="upage" value="${data.age}"> <br> <br> 
    <input type="submit" value="Update Now" onclick="return FinalUpdate('${data.id}')">   
    `

     
}

let FinalUpdate=(id)=>{
    let inpname=document.querySelector("#upname").value
    let inpage=document.querySelector("#upage").value
    let url=`http://localhost:3000/hotel/${id}`
    fetch(url,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(
            {
                "name":inpname,
                "age":inpage
            }
        )
    })

    location.href="json.html"
    return false
}