function altersabfrage() {
    event.preventDefault();
    const alterInput = Number(document.getElementById("alterInput").value);
    const outputFreigabe = document.querySelector(".outputFreigabe");

    if (alterInput >= 18) {
        outputFreigabe.innerHTML = "Ja, du darfst Shisha rauchen"
        //console.log("ja");
    } else {
        outputFreigabe.innerHTML = "Nein, du darfst noch nciht Shisha rauchen!"
        //console.log("nein");
    }

    document.getElementById("alterInput").value = "";
}