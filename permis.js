function VerificationAge() {
  var age = prompt('Avant de démarrer la voiture j\'ai besoin de connaitre ton âge, Quel âge as-tu ?');
  if (Number(age) === 18) {
    alert('Super tu as pile 18 ans, je démarre le moteur !');
  } else if (Number(age) < 18) {
    alert('Tu n\'as pas la majorité pour conduire...');
  } else if (Number(age) > 18) {
    alert('Tu est majeur, bonne conduite');
  } else {
    alert('Dommage une prochaine fois, À bientot !')
  }
}

VerificationAge();
