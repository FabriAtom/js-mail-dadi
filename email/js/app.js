console.log ('mail');

const elencoEMail = (
    'andrea@gmail.com',
    'alessio@gmail.com',
    'marco@gmail.com',
    'francesco@gmail.com',
);

const mail = prompt('inserisici la tua email');
console.log(mail, elencoEMail);

let messaggioOutput = 'accesso negato'

for(let i = 0; i < elencoEMail.lenght; ){

    const emailCorrente = elencoEMail(1)

   if(mail === emailCorrente){
    messaggioOutput = 'accesso consentito'
   }
}
console.log(messaggioOutput);