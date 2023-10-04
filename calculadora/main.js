
let botao1 = document.getElementById('calcular');
let botao2 =document.getElementById('limpar');

botao1.addEventListener('click', calcular);
botao2.addEventListener('click', limpar);

function calcular(e){
    e.preventDefault(); //impede que a pagina reinicie após o cálculo
    
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let num3 = parseFloat(document.getElementById('num3').value);
    
    //(b²) - 4.a.c
    if (num1 != 0) {

        let delta = Math.pow(num2, 2) - 4 *num1 *num3;
        alert("Delta = " + delta);
    
        if ( delta > 0) {
            let raiz1 = ((-num2 + Math.sqrt(delta)) / (2*num1));
            let raiz2 = ((-num2 - Math.sqrt(delta)) / (2*num1));
    
            document.getElementById('resultado1').innerHTML = 'x¹ = ' + raiz1;
            document.getElementById('resultado2').innerHTML = 'x² = ' + raiz2;
    
        } else if ( delta == 0 ) {
    
            let raizUnica = ((-num2 + Math.sqrt(delta)) / (2 * num1));
            document.getElementById('resultado').innerHTML = 'Raiz única = ' + raizUnica;

        } else if (delta < 0) {
            document.getElementById('resultado').innerHTML = "Delta é menor que 0, portanto, não existe no conjunto dos números reais.";
        } 

    } else {
        document.getElementById('resultado').innerHTML = "Não foi possível calcular. Para que uma equação seja caracterizada como do segundo grau, o coeficiênte 1 deve ser diferente de 0.";
    }

    
}

function limpar (e) {
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    document.getElementById('num3').value = "";

    document.getElementById('resultado').innerHTML = null;
}