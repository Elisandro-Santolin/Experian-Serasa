const cores = ["azul", "vermelho", "branco, preto", "amarelo", "vermelho"];

cores.push("verde");
console.log(cores); 
//R: ['azul', 'vermelho', 'branco, preto', 'amarelo', 'vermelho', 'verde']

cores.unshift("verde"); 
console.log(cores);
//R: ['verde', 'azul', 'vermelho', 'branco, preto', 'amarelo', 'vermelho']

console.log(cores.indexOf("vermelho"));
//R: 1

console.log(cores.lastIndexOf("vermelho"));
//R: 4

console.log(typeof(cores.includes(3))); 
//R: boolean

console.log(cores.pop()); 
//R: vermelho

console.log(cores.shift());
//R: azul

console.log(cores.slice(3));
//R: ['amarelo', 'vermelho']