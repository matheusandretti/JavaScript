let pessoa = {
    nome: "Matheus",
    getNome(){
        console.log("Esse é o nome do objeto" + this.nome);
    }
}

let pessoa2 = {

};

Object.assign(pessoa2, pessoa);

console.log(pessoa2);

pessoa2.getNome();

pessoa2.nome = "Joao";

console.log(pessoa);

console.log(pessoa === pessoa2);
