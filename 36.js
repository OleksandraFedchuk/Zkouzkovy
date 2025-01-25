// Work with Try & Catch , we should use try and catch only inside a function, not taking the whole code to this block 


// async code
setTimeout(() => {
try {
    console.log("Beggining of try block");
    
a;

console.log("the end of try block");

}catch(error) {
console.log("Block catch");
console.log(error)
console.dir(error);
console.log("Name : name of error", error.name );
console.log("Message : message about the error", error.message );
console.log("Stack: string with stuck with description about error name and type", error.stack);   
}}, 2000);


// sync code, that's why processing first 
console.log("Processing the code after");


