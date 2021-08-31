const reverseString = (str) => {
    //Implementación
    if(typeof str === "string"){
        result = str.split("").reverse().join("")
        if(result.length > 1 && result.length < 15){
            return result;
        }
    }
    
    throw new Error("Tipo de dato o longitud no admitidos");

}

module.exports = {
    reverseString
}