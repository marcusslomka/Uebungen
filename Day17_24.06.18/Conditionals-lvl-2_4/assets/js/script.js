function vergleich(para1,para2) {
    let summe = para1 + para2;
    if (para1 === para2) {
        console.log(`${"Summe 5"}`)
    } else {
        console.log(`Parameter nciht gleich :( Summe: ${summe}`);
    }
}

vergleich(30,31)