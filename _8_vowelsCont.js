const vowelsCont = (str) =>{
    let count = 0;
    for(let i = 0; i <str.length; i++){
        if("a" === str[i] || "e" === str[i] || "i" === str[i] || "o" === str[i] || "u" === str[i] || "A" === str[i] || "E" === str[i] || "I" === str[i] || "O" === str[i] || "U" === str[i]){
            count ++;
        }
    }
    return count;
}

console.log(vowelsCont("Programming"));