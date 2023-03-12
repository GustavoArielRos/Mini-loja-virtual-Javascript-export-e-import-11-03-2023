


/*importando uma função criada em um outro arquivo para ser usado nesse */
/*isso ajuda demais na organização e deixa o código mais organizado*/
/*nesse caso eu estou pegando uma função que está em um outro arquivo em outra outra pasta */
import { Calculo_preco } from "./Calculadora/calculado-loja.js";

document.getElementById("verificar").onclick = Verificar;
document.getElementById("confirmar").onclick = Confirmar;


function Verificar(){

    let ovo = document.getElementById('ovo').value;
    let leite = document.getElementById('leite').value;
    let pao = document.getElementById('pao').value;
    let refri = document.getElementById('refri').value;

    let total = Calculo_preco(ovo,leite,pao,refri);/* Usando a função que foi importada */
    
    document.getElementById('resultado').innerText = total;

}

function Confirmar(){

    document.getElementById('ovo').value = "";
    document.getElementById('leite').value = "";
    document.getElementById('pao').value = "";
    document.getElementById('refri').value = "";
    document.getElementById('resultado').innerText="";
    alert('Compra confirmada com sucesso');

}


