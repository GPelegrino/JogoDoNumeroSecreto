alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
let chute;
console.log(numeroSecreto);
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 100');

    if (chute == numeroSecreto) {
        break;

   } else {
        if (chute > numeroSecreto) {
            alert (`O número secreto é menor que ${chute}`);
        } else {
            alert (`O numero secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1
        tentativas++
   }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

