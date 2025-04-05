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
        </tr>
        `
    })
}

let Del=(id)=>{
    let url=`http://localhost:3000/hotel/${id}`
    fetch(url,{method:"DELETE"})
}
fetchData()