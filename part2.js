//VOWEL COUNT
const vowelCount = string => {
    let vowels = ['a','e','i','o','u']
    string = string.split(" ")
    return string.reduce((val,item) => {
       if (vowels.indexOf(item) >= 0){
           if (!val[item]){
               val[item] = 1
           }
           else {
               val[item]++
           }
       }
       return val
    },{})
}

console.log(vowelCount('awesome'))

//REMOVE VOWELS
const removeVowels = str => {
    let string = str.toLowerCase()
    let output = ''
    for (let i = 0; i < string.length; i++){
        if(string[i] === 'a' || string[i] === 'o' || string[i] === 'u'  || string[i] === 'i' || string[i] === 'e' ){
            continue
        }
        output += string[i]
    }
    return output
}

console.log(removeVowels('love'))