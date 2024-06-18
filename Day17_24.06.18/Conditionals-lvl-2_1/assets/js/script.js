function punkteBerechnung() {
    let größeJohn = 170;
    let alterJohn = 22;
    let größeMeike = 170;
    let alterMeike = 22;

    let spielwertJohn = alterJohn * 5 + größeJohn;
    let spielwertMeike = alterMeike * 5 + größeMeike;

    console.log(`John score: ${spielwertJohn}`)
    console.log(`Meike score: ${spielwertMeike}`)

    if (spielwertJohn > spielwertMeike) {
        console.log(`John gewinnt das Spiel mit ${spielwertJohn} Punkten!`);
    } else if (spielwertJohn < spielwertMeike){
        console.log (`Meike gewinnt das Spiel mit ${spielwertMeike} Punkten!`)
    } else {
        console.log (`Meike und John haben den selben Spielwert! Unentschieden!!`)
    }
}

punkteBerechnung();