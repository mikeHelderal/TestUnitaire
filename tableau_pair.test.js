const trierTableau = require("./tableau_pair")



test('reçois un tableau de valeur et retourne uniquement les valeurs impair', () => {
    expect(trierTableau([1,2,3,4])).toStrictEqual([2,4])
})