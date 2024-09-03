// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

// Acessando dados com json
const fs = require('fs');

const valorFaturamento = (faturamentoMensal) => {
  let menorFaturamento = faturamentoMensal[0].valor
  let maiorFaturamento = faturamentoMensal[0].valor
  let faturamentoTotal = 0

  faturamentoMensal.forEach(faturamentoDiario => {
    faturamentoTotal += faturamentoDiario.valor
    if (faturamentoDiario.valor == 0) {
      return
    }
    if (faturamentoDiario.valor < menorFaturamento) {
      menorFaturamento = faturamentoDiario.valor
    }
    if (faturamentoDiario.valor > maiorFaturamento) {
      maiorFaturamento = faturamentoDiario.valor
    }
  })

  const mediaFaturamento = faturamentoTotal / faturamentoMensal.length
  let diasFaturamentoMaiorQueMedia = []
  faturamentoMensal.forEach(faturamentoDiario => {
    if (faturamentoDiario.valor > mediaFaturamento) {
      diasFaturamentoMaiorQueMedia.push(faturamentoDiario.dia)
    }
  })

  return { menorFaturamento, maiorFaturamento, mediaFaturamento, diasFaturamentoMaiorQueMedia }
}

const data = fs.readFileSync('dados.json', 'utf-8');
const jsonData = JSON.parse(data);
const res = valorFaturamento(jsonData)

console.log(`O menor valor de faturamento ocorrido em um dia do mês: ${res.menorFaturamento}`);
console.log(`O maior valor de faturamento ocorrido em um dia do mês: ${res.maiorFaturamento}`);
console.log(`O número de dias no mês em que o valor de faturamento diário foi superior à média mensal: ${res.diasFaturamentoMaiorQueMedia}`);
