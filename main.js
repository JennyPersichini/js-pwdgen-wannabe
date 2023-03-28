//Chiedo il nome
const nome = prompt("Qual è il tuo nome?");

//Chiedo il cognome
const surname = prompt("Qual è il tuo cognome?");

//Chiedo il colore preferito
const color = prompt("Qual è il tuo colore preferito?");

const createPsw = `${nome}${surname}${color}21`;
console.log(createPsw);

//Stampo nella pagina la password creata con i dati appena raccolti 
document.getElementById("password").innerHTML = createPsw;