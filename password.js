let input = process.argv.slice(2)

function generatePassword(length) {
  let charset = 'abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let password = ''
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length))
  }
  return password
}

if (input.length < 2) {
  console.log('Must provide two arguments: 1) length, and 2) number of passwords.')
  process.exit(1)
} else {
  let length = parseInt(input[0], 10)
  let number = parseInt(input[1], 10)
  
  for (var i = 0; i < number; i++) {
    console.log(generatePassword(length))
  }
}

process.exit(0)