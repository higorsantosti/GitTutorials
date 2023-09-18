let idade = 29;
console.log(idade);

let altura = 180;
console.log(altura);

const pika = "teste"
console.log(pika);

//criando objeto {}

let pessoa = {
    nome: "higor",    idade: 29,    sexo: "M"
};

console.log(pessoa);

//criando Array []

let familia = [26,'higor',true];

console.log(familia[1]);

console.log(familia.length);

// FUNCTION ()
let corSite = "azul"

function resetaCor(){ 
    corSite = "branco";
};

console.log(corSite);
//chamando function
resetaCor();
console.log(corSite);
///////////////////////
function resetaCor(cor, tonalidade){ 
    corSite = cor + ' ' + tonalidade ;
};


console.log(corSite);
resetaCor("amarelo", "claro");
console.log(corSite);


