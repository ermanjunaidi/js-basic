
const person = {
    nama: 'erman',
    umur: 30
};

for (let key in person)

console.log(key, person[key])

const colors = ['red', 'green', 'blue', 'yellow', 'purple']

// for(let index in colors)

// console.log(index, colors[index])

// For Of
for (let color of colors)
console.log(color);