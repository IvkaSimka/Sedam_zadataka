/*Pitati korisnika za godine, ukoliko ima ispod 7 ispisati mu poruku da je pristup zabranjen, ukoliko ima izmedju 7 i 16 ispisati da ima
limitiran pristup, u suprotnom ispisati da ima pun pristup*/

var korisnikoveGodine = prompt ("Koliko imas godina?");

if (korisnikoveGodine < 7) {
	console.log("Pristup je zabranjen")
  } else if (korisnikoveGodine > 7 && korisnikoveGodine < 16) { //ne mora se proveravati da li su vece od 7 zbog prethodnog uslova
  	console.log("Imate limitiran pristup")
  } else {
  	console.log("Imate pun pristup")
  }