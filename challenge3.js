const capitalizeLetters = (str) => {
    //Implementación
    if(String(str)){
        space = str.split(" ")
        capital = space.map(a => a.charAt(0).toUpperCase() + a.slice(1))
        return capital.join(" ")
    }

    throw new Error("Tipo de dato o longitud no admitidos");
    
}

module.exports = {
    capitalizeLetters
}