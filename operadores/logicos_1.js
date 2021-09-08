let temDinheiro = false;
let estaEnsolarado = true;
let carroEstaNaGaragem = false;

let resultadoE = '#1 (AND) - Vai pro shopping? ';
resultadoE += temDinheiro && estaEnsolarado;
console.log(resultadoE);

let resultadoOU = '#2 (OR) - Vai pro Shopping? ';
resultadoOU += estaEnsolarado || carroEstaNaGaragem;
console.log(resultadoOU);
console.log('');

console.log('TABELA VERDADE: AND (E)');
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log('');

console.log('TABELA VERDADE: OR (OU)');
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log('');

console.log('TABELA VERADE; XOR (OU EXCLUSIVO)');
console.log(true !== true);
console.log(true !== false);
console.log(false !== true);
console.log(false !== false);
console.log('');

console.log('Não verdadeiro: ' + !true);
console.log('Não falso: ' + !false);