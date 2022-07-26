const buttonElement = document.getElementById('play');

buttonElement.addEventListener('click' function() {
    console.log('click su button')

    const dadoU = match.floor(Math.random()*6) + 1;

    const dadoPC = match.floor(Math.random()*6) + 1;
    console.log(dadoU, dadoPC);

    let messaggio =''

    if(dadoU > dadoPC) {
        messaggio = 'hai vinto'
    }
    else if(dadoPC > dadoU) {
        messaggio = 'hai perso'
    }
    else{
        messaggio = 'pareggio'
    }
    console.log(messaggio);
    messageElement.append(messaggio;)



});