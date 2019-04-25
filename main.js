//Using the formula from: https://en.wikipedia.org/wiki/Gini_coefficient#cite_note-Wolfram_Mathworld-17

giniCalc([70, 50, 30, 80, 20, 100, 20, 30, 80, 90]);

function giniCalc(ingresos){
    let d1 = 0;
    for(let j = 0 ; j < ingresos.length ; j++){
        d1 += ingresos.reduce((a, c) => a + Math.abs(c - ingresos[j]), 0);
    }
    const d2 = (2 * ingresos.length) * ingresos.reduce((a, c) => a + c, 0);
    return (d1 / d2).toFixed(2);
}
