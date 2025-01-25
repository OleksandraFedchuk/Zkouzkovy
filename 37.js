try{
    console.log("Try start");

    const throwErrorOrNot = confirm("Do you want me to throw an error?");

    if(throwErrorOrNot){
        throw New console.error("User wanted us to throw error");
        
    }
    
    console.log("Try end"); 
}catch(error){
    console.log(error);
    
}