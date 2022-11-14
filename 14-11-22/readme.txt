1 - Creazione in HTML il div .container contenente al suo interno il container della card .cardPost a cui appendere la card dinamica 
1.2 - Creazione in HTML il div per il caricamento

2. - Stilizzare gli elementi in CSS
2.1 - In particolare per la creazione del loader ho:
        - stilizzato la classe .loading in display block e quindi visibile a schermo
        - stilizzato la classe .container in display none e quindi non visibile a schermo

3. - Utilizzare il fetch per assegnare i valori dell'oggetto agli elementi della card aggiungendo un finally dove viene modificato lo stile per il loading rendendo .loading in display none e .container in display block
3.1 - Creare una funzione per realizzare la card dinamicamente
3.2 - Creare due funzioni:
        - Bottone per andare indietro che viene disabilitato alla prima card e al primo caricamento della pagina
        - Bottone per andare avanti fino a 10 che viene disabilitato alla card 10
