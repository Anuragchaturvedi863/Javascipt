// Splice function = For Addition and Deletion in Array
let ar=["Cybrom",26,"Milan",46,"pizza"]
ar.splice(2,1)// ar.splice(index num,num of elements),removing element in 2nd indexing(Milan is removed) and number of element removed is is 1
console.log(ar)

ar.splice(2,1,"Manohar")//ar.splice(index num,num of elements,add on),removing element at 2nd indexing(46 is removed)and adding another element at 2nd indexing (Manohar is added)
console.log(ar)

ar.splice(2,0,"Sharma")// adding element in 2nd indexing wihtout removing element
console.log(ar)