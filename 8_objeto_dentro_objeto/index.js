let pessoa = {
    nome: "Matheus",
    idade: 29,
    falar: function(){
        console.log("Oi, meu nome é Matheus");
    },
    aniversario(){
        this.idade += 1;
    },
    dizerIdade(){
        console.log("A minha idade é " + this.idade)
    },
    podeDirigir: function(){
        if(this.idade >= 18){
            console.log("Pode dirigir");
        } else {
            console.log("Ainda não pode dirigir");
        }
    },
    caracterisicas: {
        cnh: true,
        carteira: ['dinheiro', 'documento', 'moeda']
    }
}

console.log(pessoa.caracterisicas);
console.log(pessoa.caracterisicas.carteira[2]);