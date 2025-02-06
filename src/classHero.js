class Hero {
    constructor(nome, idade, classe){
        this.nome = nome;
        this.idade = idade;
        this.classe = classe;
    }
    atacar(){
        let attack;
        switch(this.classe.toLowerCase()){
            case 'mago':
                attack = "usando magia.";
                break;
            case 'guerreiro':
                attack = "usando espada.";
                break;
            case 'ninja':
                attack = "usando shuriken.";
                break;
            case 'monge':
                attack = "usando artes marciais.";
                break;
            default:
                attack = "com um ataque surpresa.";
                break;
        }
        console.log(`O ${this.classe} atacou ${attack}`);
    }
}

const readline = require('readline');

const rl = readline.createInterface({    
    input: process.stdin,
    output: process.stdout
});

rl.question('Qual o nome do seu personagem? ', (nome) => {
    rl.question('Qual a idade dele? ', (idade) => {
        rl.question('Qual a classe dele? ', (classe) => {
            const personagem = new Hero(nome, idade, classe);
            personagem.atacar();
            rl.close();
        });
    });
});