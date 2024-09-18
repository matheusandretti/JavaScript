function Ninja(nome, arma) {
    this.nome = nome;
    this.arma = arma;
    this.atirarArma = function(){
        console.log("Atirou a " + this.arma)
    }
    
}

let ninja1 = new ninja('boruto', 'shuriken');

console.log(ninja.nome);

ninja1.atirarArma();

let ninja2 = new Ninja('Sasuke', 'kunai9')