console.log("Olá")

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let nameHero;
let heroXp;

rl.question('Qual é o nome do Herói? ', (resposta) => {
  nameHero = resposta;

  rl.question('Qual é o XP do herói? ', (resposta) => {
    heroXp = resposta;

    if (heroXp <= 1000){
        console.log(`O Herói de nome ${nameHero} está no nível Ferro`)
    }else if((heroXp > 1000) && (heroXp <= 2000)){
        console.log(`O Herói de nome ${nameHero} está no nível Bronze`)
    }else if((heroXp > 2000) && (heroXp <= 5000)){
        console.log(`O Herói de nome ${nameHero} está no nível Prata`)
    }else if((heroXp > 5000) && (heroXp <= 7000)){
        console.log(`O Herói de nome ${nameHero} está no nível Ouro`)
    }else if((heroXp > 7000) && (heroXp <= 8000)){
        console.log(`O Herói de nome ${nameHero} está no nível Platina`)
    }else if((heroXp > 8000) && (heroXp <= 9000)){
        console.log(`O Herói de nome ${nameHero} está no nível Ascendente`)
    }else if((heroXp > 9000) && (heroXp <= 10000)){
        console.log(`O Herói de nome ${nameHero} está no nível Imortal`)
    }else if(heroXp >= 10001){
        console.log(`O Herói de nome ${nameHero} está no nível Radiante`)
    }

    rl.close();
  });
});





