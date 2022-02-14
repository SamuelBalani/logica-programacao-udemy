// function calcularSalarioLiquido(horasTrabalhadas, ganhoPorHora) {
//     const salarioBruto = horasTrabalhadas * ganhoPorHora
//     const salarioLiquido = salarioBruto - salarioBruto * 30/100
//     return `Salário igual a R$ ${salarioLiquido}`
// }
    

function calcularSalario(quantHora, recebHora) {
    const salario = quantHora * recebHora;

    return `Salário igual a R$ ${salario}`;
};

console.log(calcularSalario(150, 40.5));
console.log(calcularSalario(180, 60));