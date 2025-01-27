try{
    console.log("Try start");

    const throwErrorOrNot = confirm("Do you want me to throw an error?");

    if(throwErrorOrNot){
        // оператор який викидує властни error (obligatory), примусово
        throw new Error("User wanted us to throw error");
        
    }
    
    console.log("Try end"); 
}catch(error){
    console.log(error);
    
}





