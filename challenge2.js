const reverseInt = (number) => {
    //Implementación
    if(Number(number)){
        if(Math.sign(number) == 1){
            str = String(number)
            result = str.split("").reverse().join("")
            return Number(result);
        }else{
            str = String(number).slice(1)
            result= str.split("").reverse().join("")
            return Number(result) * -1;
        }
        
    }

    throw new Error("Tipo de dato o longitud no admitidos");
}

module.exports = {
    reverseInt
}