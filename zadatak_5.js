// Pitati korisnika da unese broj, proveriti da li je on paran i veći od 25

var broj = prompt ("Unesi broj");

if (broj%2===0 && broj>25) {
	console.log("Broj je paran i veći od 25");
} else if (broj%2===0 && broj<25) {
	console.log("Broj je paran i manji od 25");
} else if (broj%2!==0 && broj>25) {
	console.log("Broj je neparan i veći od 25");
} else if (broj%2!==0 && broj<25) {
	console.log("Broj je neparan i manji od 25");
} 