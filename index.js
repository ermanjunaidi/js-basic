const output = fizzbuzz(1)
console.log(output)

function fizzbuzz(input) {
    if(typeof input !== 'number')
        return NaN
        
    if ((input % 3 === 0 ) && (input % 5 === 0))
        return 'fizz Buzz'

    if (input % 3 === 0)
        return 'fizz'

    if (input % 5 === 0)
        return 'buzz'
        
    
        return input
}