var age = prompt('Avant de démarrer la voiture j\'ai besoin de connaitre ton âge, Quel âge as-tu ?');
if (Number(age) >= 18) {
  alert('Tu as la majorité, je démarre le moteur !');
} else if (Number(age) < 18) {
  alert('Tu n\'as pas la majorité pour conduire...');
}
