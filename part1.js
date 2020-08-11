var users = [
    {
      username: 'larry',
      email: 'larry@foo.com',
      yearsExperience: 22.1,
      favoriteLanguages: ['Perl', 'Java', 'C++'],
      favoriteEditor: 'Vim',
      hobbies: ['Fishing', 'Sailing', 'Hiking'],
      hometown: {
        city: 'San Francisco',
        state: 'CA'
      }
    },
    {
      username: 'jane',
      email: 'jane@test.com',
      yearsExperience: 33.9,
      favoriteLanguages: ['Haskell', 'Clojure', 'PHP'],
      favoriteEditor: 'Emacs',
      hobbies: ['Swimming', 'Biking', 'Hiking'],
      hometown: {
        city: 'New York',
        state: 'NY'
      }
    },
    {
      username: 'sam',
      email: 'sam@test.com',
      yearsExperience: 8.2,
      favoriteLanguages: ['JavaScript', 'Ruby', 'Python', 'Go'],
      favoriteEditor: 'Atom',
      hobbies: ['Golf', 'Cooking', 'Archery'],
      hometown: {
        city: 'Fargo',
        state: 'SD'
      }
    },
    {
      username: 'anne',
      email: 'anne@test.com',
      yearsExperience: 4,
      favoriteLanguages: ['C#', 'C++', 'F#'],
      favoriteEditor: 'Visual Studio Code',
      hobbies: ['Tennis', 'Biking', 'Archery'],
      hometown: {
        city: 'Albany',
        state: 'NY'
      }
    },
    {
      username: 'david',
      email: 'david@test.com',
      yearsExperience: 12.5,
      favoriteLanguages: ['JavaScript', 'C#', 'Swift'],
      favoriteEditor: 'VS Code',
      hobbies: ['Volunteering', 'Biking', 'Coding'],
      hometown: {
        city: 'Los Angeles',
        state: 'CA'
      }
    }
  ];
  

//PRINT EMAILS
const printEmails = () => {
    users.forEach(val => {
        console.log(val.email)
    })
}
printEmails()


//PRINT HOBBIES
const  printHobbies = () => {
    users.forEach(val => {
        val.hobbies.forEach(value => {
            console.log(value)
        })
    })
}
printHobbies()


//FIND HOMETOWN BY STATE
const  findHometownByState = state => {
   return users.find(val => val.hometown.state)
}
    
console.log(findHometownByState('CA'))


//ALL LANGUAGES
const  allLanguages = () => {
    let newArray = []
    users.map(val => {
        val.favoriteLanguages.map(value => {
         newArray.push(value)
        })
    })
    return Array.from(new Set(newArray))
}

console.log(allLanguages())


// HAS FAVORITE EDITOR
const hasFavoriteEditor = editor => {
    let check = 0
    users.map(val => {
        if (val.favoriteEditor === editor){
            check++
        }
    })
    return check === 0 ? false : true
}

console.log(hasFavoriteEditor('Eclipse'))


//FIND BY USERNAME
const findByUsername = string => {
    users.forEach(val => {
            if (val.username === string){
                console.log(val)
            }
    })
}

console.log(findByUsername('david'))