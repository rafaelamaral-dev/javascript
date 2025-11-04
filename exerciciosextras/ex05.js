let valores = [50,5,120,10,2]
console.log(valores.length)

// Item 3: Ordenar o array 'valores' em ordem crescente (do menor para o maior)
valores.sort((a, b) => a - b);

valores.pop()

console.log(`Este é o Array final: ${valores}`)