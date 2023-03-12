
/*deixando a função exportável */
/*permitindo que ela seja usada em outro arquivo */
/*posso fazer isso com variáveis também */
export function Calculo_preco(ovos,leite,pao,refrigerante){
    
    let conta = (ovos * 15) + (leite * 8) + (pao * 5) + (refrigerante * 5);
    return conta;

}