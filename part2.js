//VOWEL COUNT (written by Efosa Odia)
const vowelCount = string => {
    let stringArray = [...string]//changes the string into an array using the spread operator. Another way is using string.split("") method
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let obj = stringArray.reduce((acc, val) => {
        if(vowels.indexOf(val) !== -1){ //checks to see if the val at current iteration count is in the vowels array. if it isn't it will return -1.
            acc[val] = (acc[val] || 0) + 1; //sets the objects key and value.
        }
        return acc
    },{})
    return obj
}
console.log(vowelCount('incredible'))



//REMOVE VOWELS (written by Efosa Odia)
const removeVowels = str => {
    let string = [...str.toLowerCase()]// forgive me i love using spread operators! even if i could've used string.split("") here instead
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let output = ''
    string.forEach(val => {
        if(vowels.indexOf(val) === -1 ){ //checks to see if the val is in the vowels array. if it's not (returns -1) then it must be a consonant.
            output += val //we then add the value to our output variable
        }
    })
    return output
}
console.log(removeVowels('efosa'))
