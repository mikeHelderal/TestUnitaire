

/*const isTrier = (t) => {
   let v = [].concat(t);
   v = v.sort()
   let result = t.every((value, index) => value === v[index]);
    return result
}
*/

const isTrier = (t) => {
    if(t.length == 0) return null;
    let trier = true;
    for(i=1;i<=t.length;i++){
        if(t[i] < t[i-1]){
            trier = false;
            break;
        }
    }
    return trier;
}



module.exports = isTrier ;

