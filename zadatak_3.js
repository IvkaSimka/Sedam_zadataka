/*Pitati korisnika da unese 2 od 3 osnovne boje (crvena, žuta i plava) i ispisati mu koju je boju dobio mešanjem.
Obavestiti korisnika ako je uneo pogrešne boje*/

var prvaBoja = prompt ("Izaberi prvu boju: crvena, žuta ili plava");
var drugaBoja = prompt ("Izaberi drugu boju: crvena, žuta ili plava");

if (prvaBoja === "crvena" && drugaBoja === "žuta" || prvaBoja === "žuta" && drugaBoja === "crvena") {
	console.log("narandžasta");
} else if (prvaBoja === "crvena" && drugaBoja === "plava" || prvaBoja === "plava" && drugaBoja === "crvena") {
	console.log("ljubičasta");
} else if (prvaBoja === "žuta" && drugaBoja === "plava" || prvaBoja === "plava" && drugaBoja === "žuta") {
	console.log ("zelena");
} else if (prvaBoja === drugaBoja) {
	console.log("prvaBoja");
} else {
	console.log("pogrešan unos");
}
