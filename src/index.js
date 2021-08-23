module.exports = function reverse (n) {
    let result = '';
    n = String(n);
    for (let a = n.length-1; a >= 0; a--){
        if (n[a] != '-') result += n[a];
    }
    return result;
}
