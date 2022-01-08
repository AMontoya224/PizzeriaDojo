console.log(" ");
console.log("--------------------------------------");
console.log("|  ¡Bienvenidos a Andre's Pizzeria!  |");
console.log("--------------------------------------");

//HORNO
function pizzaOven(TipoCorteza, TipoSalsa, Quesos, Salsas) {
    let pizza = {};
    pizza.TipoCorteza = TipoCorteza;
    pizza.TipoSalsa = TipoSalsa;
    pizza.Quesos = Quesos;
    pizza.Salsas = Salsas;
    return pizza;
}

//INGREDIENTES
//Corteza:
let corteza = ["Estilo Chicago", "Lanzada a mano", "Estilo Nueva York", "St. Louis"];

//Tipo de Salsa:
let tipo = ["Tradicional", "Marinara", "Romana", "Italiana"];

//Quesos:
let queso = ["Mozzarella", "Feta", "Gouda", "Cheddar"];

//Salsas:
let salsa = ["Pepperoni", "Salchicha", "Champiñones", "Aceituna"];

//PEDIDOS
let aleatorio1 = Math.floor(Math.random() * (4 - 0)) + 0;
let aleatorio2 = Math.floor(Math.random() * (4 - 0)) + 0;
if (aleatorio1 == aleatorio2){
    aleatorio1 = 1;
    aleatorio2 = 2;
}

let s1 = pizzaOven(corteza[0], tipo[0], [queso[0]], [salsa[0], salsa[1]]);
let s2 = pizzaOven(corteza[1], tipo[1], [queso[0], queso[1]], [salsa[2], salsa[3]]);
let s3 = pizzaOven(corteza[2], tipo[2], [queso[2], queso[3]], [salsa[1], salsa[2]]);
let s4 = pizzaOven(corteza[3], tipo[3], [queso[2]], [salsa[0], salsa[2], salsa[3]]);
let s5 = pizzaOven(corteza[aleatorio1], tipo[aleatorio2], [queso[aleatorio1], queso[aleatorio2]], [salsa[aleatorio1], salsa[aleatorio2]]);

console.log(" ");
console.log("Preparando sus ordenes...");
console.log("Sus pizzas ya están listas, disfrútelas!");
console.log(" ");
console.log("1. Pizza de: ");
console.log(s1);
console.log(" ");
console.log("2. Pizza de: ");
console.log(s2);
console.log(" ");
console.log("3. Pizza de: ");
console.log(s3);
console.log("y otra de: ");
console.log(s4);
console.log(" ");
console.log("4. Pizza de: ");
console.log(s5);