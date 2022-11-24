1. Utilizzare la cartella su cui vogliamo operare
2. Installare il package.json -> npm init e compilare i campi dove necessario
3. Installare i pacchetti necessari (N.B. Per aggiornarne un pacchetto alla nuova versione bisogna rifare il comando -> npm i "pacchetto"):
    3.1: npm i bootstrap
    3.2: npm i express
    3.3: npm i lodash@4.17.20 (con @4.17.20 andiamo a selezionare la versione del pacchetto. Questo vale per tutti pacchetti con le relative versioni) 
        3.3.1: utilizzare -> npm audit fix per fixare le vulnaribilità ( o in alternativa -> npm audit fix --force. Con questo ultimo comando si può avere l'ultima versione del pacchetto nel package-lock.json)
    3.4: npm i nodemon --save-dev
4. Creare la cartella "public" dove andremo ad inserire i file lato client, quindi visibili a tutti, come ad esempio i file html, css e js
5. Creare la cartella "src" dove a andremo a inserire i file relativi al server, quali principalmente: package-lock.json, package.json e lo script.js
6. Creare il comando "start" che ha la funzione di avviare il server


Altri comandi:
npm upgrade per aggiornare i pacchetti all'ultima versione


PACCHETTI INSTALLATI:

- Bootstrap
- Express
- Lodash
- Nodemon