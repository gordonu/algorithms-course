isPalindrome = (string) => {
    alpha = 'abcdefghijklmnopqrstuvwxyz'
    char = string.split(' ').join('').toLowerCase()

    onlyLetters = char.split('').filter(letter => {
        return alpha.split('').indexOf(letter) > 0
    })

    console.log(onlyLetters === onlyLetters.reverse())
}



// isPalindrome('race car')
isPalindrome('Madam, Im Adam')