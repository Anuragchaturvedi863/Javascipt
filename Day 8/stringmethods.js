function len(){
    let a="Hello "
    document.write(a.length)
}
function slice(){
    let a="Hello Everyone"
    document.write(a.slice(3,9))
}
function concat(){
    let a="There is "
    let b="already a "
    let c="God's plan"
    document.write(a.concat(b,c))
}
function replace(){
    let a="When do you arrive when at When"
    document.write(a.replace(/when/gi,"How"))
}
function toUpperCase(){
    let a="hello everyone"
    document.write(a.toUpperCase())
}
function toLowerCase(){
    let a="HELLO EVERYONE"
    document.write(a.toLowerCase())
}
function trim(){
    let a=" Hello Everyone "
    document.write(a.trim())
}
function charAt(){
    let a="Hello Everyone"
    document.write(a.charAt(5))
}
function charCodeAt(){
    let a="Hello"
    document.write(a.charCodeAt(5))
}
function split(){
    let a="Hello Good Morning"
    console.log(a.split(" "))
}
function indexOf(){
    let a="Hello Good Morning"
    document.write(a.indexOf("Hello",2))
}