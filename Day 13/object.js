let obj={
    Name:"Anurag",
    age:25,
    city:"Bhopal",
    Hobby:["Reading","Writing","Coding"],
    greeting: function(){
        console.log(`Hello I am ${this.Name}`)
    }
}
obj.greeting()