const isTrier = require("./tableau_trier")




test('reçois un tableau de valeur et vérifier si il est trié', () => {
    expect(isTrier([1,3,2,4])).toStrictEqual(false)
})

test('reçois un tableau vide et retourne null', () => {
    expect(isTrier([])).toStrictEqual(null)
})