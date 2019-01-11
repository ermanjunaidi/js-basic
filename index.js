showNumbers(20)

function showNumbers(limit) {
    for (let i=0; i <= limit; i++) {
        // if (i % 2 === 0) console.log(i, 'Event')
        // else console.log(i, 'ODD')

        const message = (i % 2 === 0) ? 'Erman' : 'Juna'
        console.log(i, message)
    }
}
