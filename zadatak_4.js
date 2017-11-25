/* Pitati korisnika da unese omiljeni html tag i ime i ispisati mu kako izgleda html kod koji bi okružio ime html tagom. 
Primer: Korisnik unosi “section” i “Pera”, potrebno je ispisati “<section>Pera</section>” */

var tag = prompt ("Unesi omiljeni HTML tag");
var ime = prompt ("Unesi ime");

console.log ("<" + tag + ">" + ime + "</" + tag + ">");