// function repetir(item, quantidade) {
//     let arrayparam = [];
    
//     for(let i = 0; i < quantidade; i++) 
//         arrayparam.push(item);

//     return arrayparam;
// };

function repetir(item, quantidade) {
    return Array(quantidade).fill(item);
};

console.log(repetir("código", 2));
console.log(repetir(7, 3));