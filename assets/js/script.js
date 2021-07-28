//Déclaration variable bouton d'envoi
let restdivision = document.getElementById('restdivision');
//On écoute l'evenement click sur le bouton et on appelle la fonction division quand on l'a entendu
restdivision.addEventListener('click', division);
//Declaration de la fonction division qui nous affiche le reste de la division de 2 nombres
function division() {
    //Declaration de la variable number1 qui contient la valeur du premier champ
    let number1 = document.getElementById('number1').value;
    //Declaration de la variable number2 qui contient la valeur du deuxieme champ
    let number2 = document.getElementById('number2').value;
    //Condition : si number1 ou number n'est pas un nombre alors...    
    if (isNaN(number1) || isNaN(number2)) {
        //... on affiche un message d'erreur
        alert('Vous devez entrer un nombre !');
    }
    // Sinon...
    else {
        //Si la valeur du deuxieme nombre est egale a 0 alors...
        if (number2 == 0) {
            //... on affiche un message d'erreur
            alert('ERREUR Division impossible par 0');
        }
        //Sinon...
        else {
            //.. on calcule le reste de la dfivision
            let result = number1 % number2;
            // On affiche le resultat
            alert(`Le reste de la division \n${number1}  /  ${number2}  \n est = ${result} `);
        }
    }

}