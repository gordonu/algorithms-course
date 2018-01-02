//ORIGINAL
harmlessRansomNote = (noteText, magazineText) => {

  let obj = {}

  let magazineArr = magazineText.split(' ')
  let noteArr = noteText.split(' ');

  for (let word of magazineArr) {
    if (obj[word]) obj[word]++
    else obj[word] = 1
  }

  for (let word of noteArr) {
    console.log(word)
    if (obj[word]) obj[word]--
    else return false
  }
  return true
}


harmlessRansomNote('hello hello', 'Welcome to Mars, Hello everyone! hello')

//RELIED ON RUNNING THE CODE to know that it's not split...
//This will be revealed during a whiteboard session.




//REFACTORED
harmlessRansomNote = (noteText, magazineText) => {

  let magazineObj = {}
  let noteIsPossible = true

  let magazineArr = magazineText.split(' ')
  let noteArr = noteText.split(' ');

  //O(n)
  magazineArr.forEach(word => magazineObj[word] ? magazineObj[word]++ : magazineObj[word] = 1)

  //O(m)
  noteArr.forEach(word => magazineObj[word] ? magazineObj[word]-- : noteIsPossible = false)

  console.log(noteIsPossible)
}


harmlessRansomNote('this is a secret note for you from a secret admirer', 'this is a secret note for you from a secret admirer')

  //O(n) + O(m)





