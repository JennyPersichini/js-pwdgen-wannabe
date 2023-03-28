//Chiedo il nome
const nome = prompt("Qual è il tuo nome?");

//Chiedo il cognome
const surname = prompt("Qual è il tuo cognome?");

//Chiedo il colore preferito
const color = prompt("Qual è il tuo colore preferito?");

//Bonus: Al posto del 21 finale, chiedete all'utente 2 numeri e concatenate al posto del 21 finale, il primo numero diviso il secondo.
let num1 = prompt("Quanti anni hai?");
let num2 = prompt("In che giorno sei nato/a?");

let division = num1 / num2 ;

const createPsw = `${nome}${surname}${color}${division}`;
console.log(createPsw);

//Stampo nella pagina la password creata con i dati appena raccolti 
document.getElementById("password").innerHTML = createPsw;



