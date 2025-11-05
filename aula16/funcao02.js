function soma(n1=0,n2=0){
    return n1 + n2
}

//O "= 0" foi definido nos parâmetros para evitar NaN quando o usuário não informa um valor. 

console.log(soma(2,5)) //Resulta 7.
console.log(soma(2)) //Resulta 2.