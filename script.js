function gerarTabuada(){
    let numberTab = document.getElementById('txtNumberTab');
    let tab = document.getElementById('selTab');
    let show = document.getElementById('gerarTabuada');

    if(numberTab.value.length == 0){
        alert('[ERRO] Por favor, digite um número!')
    }else{
        let num = Number(numberTab.value);
        let mul = 1;
        tab.innerHTML = '';
        while (mul <= 10){
            let item = document.createElement('option');
            item.text = `${num} x ${mul} = ${num*mul}`;
            tab.appendChild(item);
            mul++;
        }
        show.style.display = 'block';
        answer.innerHTML = '';
    }
}

function limparDados(){
    let show = document.getElementById('gerarTabuada');
    document.getElementById('txtNumberTab').value = '';
    
    show.style.display = 'none';
    answer.innerHTML = 'Digite o número para obter a tabuada...';
}