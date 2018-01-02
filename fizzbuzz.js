fizzBuzz = (num) => {

  for (var i = 1; i <= num; i++) {
    // if(i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz')
    if (i % 15 === 0) console.log('FizzBuzz')
    else if (i % 3 === 0) console.log('Fizz')
    else if (i % 5 === 0) console.log('Buzz')
    else console.log(i)
  }
}

fizzBuzz(30);

    //Need to go through code to see if it actually gives what we want... and not rely on running

    //Need to decide on < or <= at end.