isPalindrome = (string) => {
  alpha = 'abcdefghijklmnopqrstuvwxyz'
  char = string.split(' ').join('').toLowerCase()

  onlyLetters = char.split('').filter(letter => {
    return alpha.split('').indexOf(letter) > 0
  })

  console.log(onlyLetters === onlyLetters.reverse())
}



// isPalindrome('race car')
// isPalindrome('Madam, Im Adam')


function isPalindrome2(string) {
  string = string.toLowerCase();
  var charactersArr = string.split('');
  var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  var lettersArr = [];
  charactersArr.forEach(char => {
    if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
  })

  if (lettersArr.join('') === lettersArr.reverse().join('')) return true;
  else return false;

}

isPalindrome2('Madam, Im Adam')