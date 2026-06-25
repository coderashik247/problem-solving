const isPalindrome = (str) =>{
    let revStr = '';
    for(let i = str.length-1; i>=0; i--){
        revStr += str[i];
    }

    if(str === revStr){
        return "Palindrome "
    }

    return "Not Palindrome"
}

console.log(isPalindrome("madam"))