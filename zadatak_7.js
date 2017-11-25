/* Pitati korisnika da unese broj. Proveriti da li je broj deljiv sa 3 I 5.
Ako je broj deljiv sa 3, ispisati “Fizz”, ako je deljiv sa 5 ispisat “Buzz”, a ako je deljiv I sa 3 I sa 5 ispisati “FizzBuzz”. */

var broj = prompt ("Unesi broj");

if (broj%3===0 && broj%5===0) {
	console.log("FizzBuzz");
} else if (broj%3===0) {
	console.log("Fizz");
} else if (broj%5===0) {
	console.log("Buzz");
} else {
	console.log("Broj nije deljiv ni sa 3 ni sa 5");
}