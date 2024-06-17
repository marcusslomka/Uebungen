//! Aufgabe 1
function intro1() {
    let a = 1 + 3;
    console.log("Hello World");
    console.log(`1 + 3 = ${a}`);
}
intro1();

//! Aufgabe 2
function intro2(paramName) {
    let name = "SuperCode:in";
    console.log(`Hi ${name}. Mein Name ist ${paramName}`);

}
intro2("Achim");
intro2("Utrit");
intro2("Ligma");

//! Aufgabe 3
function intro3(name,stadt,alter) {
    console.log(`Hallo, mein Name ist ${name}, ich bin ${alter} alt und komme aus ${stadt}.`);
}   
intro3("Marcus", "Berlin", 27);
intro3("Jan", "Flensburg", 26);
intro3("Mclovin", "Hawaii", 25);

//!Aufgabe 4
function math(a, b) {
    
    console.log(`${a} * ${b} = ${a * b}`);
    console.log(`${a} / ${b} = ${a / b}`);
}

math(10, 2);
math(100, 100);
math(5,0);
math(45, 173);
math(1, 1000);

//console.clear(); //Für die letzte Aufgabe cleared

//!Aufgabe 5
function colorChange(buttonNumber) {
    const h1 = document.querySelector("h1");
    const body = document.querySelector("body")
    if (buttonNumber == 1) {
        h1.style.color = "red";
        body.style.backgroundColor = "green";
    }
    if (buttonNumber == 2) {
        h1.style.color = "blue";
        body.style.backgroundColor = "orange";
    }
    if (buttonNumber == 3) {
        h1.style.color = "purple";
        body.style.backgroundColor = "aqua";
    }
    if (buttonNumber == 4) {
        h1.style.color = "yellow";
        body.style.backgroundColor = "red";
    }
}