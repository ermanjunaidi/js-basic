const film = {
    judul: 'Spiderman',
    tahunTerbit: 2000,
    rating: 4.5,
    sutradara: 'Stein'

}

showProperties(film)

function showProperties(obj) {
    for (let key in obj) {
    if (typeof obj[key] === 'string')
    console.log(key, obj[key])
}
}