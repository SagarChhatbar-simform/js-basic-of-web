var teacher = "sagar";

(function allteach() {
    var teacher = "tom";
    console.log(teacher);
})();//this is an example of IIFE (immediatly invoked function expresion)
console.log(teacher);


//using only let keyword we don't have to make functions
var teacher = "sagar";

{
    let teacher = "tom"; //let can be only used inside a scope 
    console.log(teacher); 
}

console.log(teacher);