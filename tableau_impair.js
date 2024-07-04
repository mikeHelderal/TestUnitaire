const trierTableau = (t) => {
    let result = [];
    t.forEach(element => {
        if((element%2) !== 0){
            result.push(element)
        }
    });
    return result;
}


module.exports = trierTableau ;

