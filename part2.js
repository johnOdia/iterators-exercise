//VOWEL COUNT
const vowelCount = string => {
    let arr = []
    string = string.split("")
    const str = Array.from(new Set(string))
    str.forEach(val => {
        if(val === 'a'  || val === 'e' || val === 'i' || val === 'o' || val === 'u' ) {
            arr.push(val)
        }
    })
    const myObj = arr.reduce((a, key) => Object.assign(a, { [key]: 0 }), {})
    for(let i in myObj){
       for(let j = 0; j < string.length; j++){
           if (i === string[j]){
               myObj[i] += 1
           }
       }
    }
    return myObj
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