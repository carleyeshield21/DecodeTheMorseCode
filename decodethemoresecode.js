// This is link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript

decodeMorse = function(morseCode){
// We create first an array for the morse code coversion. We concatenate a space at the end of the morseCode string so we can use it as a marker in our for loop, whenever it detects a space, it runs the slice function in the if statement using the j and i indices, then push it into the array arr. After that we nest a for loop inside the if statement using k as the index. Then we nest inside it an if condition to compare the sliced string from the morseCode string to the codemorse array elements. Then use the break function in the else statment so everytime it detects a '', it will stop and proceed to the next index. At the end of the code we use the replace function to omit all the commas, then use split and join function to output the decoded message. I used in the split three spaces, then in the join a single space.
    const codemorse = [
        ['·-','A'],['-···','B'],['-·-·','C'],['-··','D'],['.', 'E'],['..-.', 'F'],['--.', 'G'],['....', 'H'],['..', 'I'],['.---', 'J'],['-.-', 'K'],['.-..', 'L'],['--', 'M'],['-.', 'N'],['---', 'O'],['.--.','P'],['--.-', 'Q'],['.-.','R'],['...','S'],['-','T'],['..-','U'],['···-','V'],['.--','W'],['-..-','X'],['-.--','Y'],['--..','Z'],['-----','0'],['·----','1'],['··---','2'],['···--','3'],['····-','4'],['·····','5'],['-····','6'],['--···','7'],['---··','8'],['----·','9'],]

  morseCode = morseCode.concat(' ')
  arr = []
  arr1 = []
  j = 0
  for(i=0; i<=morseCode.length-1; i++){
    //   console.log(morseCode[i])
      if(morseCode[i] == ' '){
        arr.push(morseCode.slice(j,i))

        for(k=0; k<=codemorse.length-1; k++){
            // console.log(codemorse[k][0], codemorse[k][1], morseCode.slice(j,i))
            if(morseCode.slice(j,i) == codemorse[k][0]){
                // console.log(codemorse[k][1])
                arr1.push(codemorse[k][1])
            } else if(morseCode.slice(j,i) == ''){
                arr1.push(' ')
                break
            }
        }
        j = i + 1
        // console.log('========')
    }
  }
// console.log(arr)
  const result = arr1.toString().replace(/,/g, '');
// console.log(result)
  console.log(`Code: ${morseCode}`)
  console.log('The message:')
  console.log(result.split('  ').join(' '))
}
decodeMorse('.... . -.--   .--- ..- -·· .')
console.log('========')
decodeMorse('... --- ...')
console.log('========')
decodeMorse('-- --- .-. ... .  -·-· --- -·· .  ----· ----- ··--- ·---- ---··')