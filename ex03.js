// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

// Como os valores não foram enviados eu fiz com uma lista simplificada.

const valorFaturamento = (faturamentoDiario) => {
  let menorFaturamento = faturamentoDiario[0]
  let maiorFaturamento = faturamentoDiario[0]

  faturamentoDiario.forEach(numero => {
    if (numero < menorFaturamento) {
      menorFaturamento = numero
    }
    if (numero > maiorFaturamento) {
      maiorFaturamento = numero
    }
  })
  return { menorFaturamento, maiorFaturamento }
}

const faturamentoDiario = [1500, 2500, 1200, 1800, 3000, 2500]
const res = valorFaturamento(faturamentoDiario)
console.log(`O menor faturamento é: ${res.menorFaturamento}`);
console.log(`O maior faturamento é: ${res.maiorFaturamento}`);



