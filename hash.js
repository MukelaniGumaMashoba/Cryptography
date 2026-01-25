const {createHash} = require('crypto');

// using sha or md5 algorithms for hashing
// can using base 64 encoding as well or hex
function hashString(input){
    return createHash('sha256').update(input).digest('hex');
}

// Example usage for the hashing from Fireship learning ' inzima yona lento yeses

const myString = "Hello, World!";
const hashedString = hashString(myString);
console.log(`Original String: ${myString}`);
console.log(`Hashed String: ${hashedString}`);