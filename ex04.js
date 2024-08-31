
// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  

const faturamentoMensal = [
  { faturamento: 67836.43, estado: 'SP' },
  { faturamento: 36678.66, estado: 'RJ' },
  { faturamento: 29229.88, estado: 'MG' },
  { faturamento: 27165.48, estado: 'ES' },
  { faturamento: 19849.53, estado: 'Outros' }
]
let faturamentoTotal = faturamentoMensal.reduce((total, faturamentoRegional) => faturamentoRegional.faturamento + total, 0)
faturamentoMensal.forEach(faturamentoRegional => {
  let percentual = (faturamentoRegional.faturamento / faturamentoTotal) * 100
  console.log(`O faturamento de ${faturamentoRegional.estado} representa ${percentual.toFixed(2)}% do faturamento total.`);
})
