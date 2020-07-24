# NODE.JS
 Cours node.js Descodeuses

# COMMENT LES INFORMATIONS SONT TRANSMISES D'UN USER A UNE BDD
## Ma requête en tant que USER pour récupérer data
    - navigateur communique en JS à l'API :     USER >> JAVASCRIPT 
    - API traduit JS en JSON grâce à la fonction sendToRedis et .hset (les informations sont parsées) : API >> JSON 
    - //Redis reçoit sous format JSON la requête >> REDIS  
## La réponse à ma requête 
    REDIS >> JSON // grâce à la fonction fromRedis les données sont structurées selon le constructor de l'objet
    >> API >>  JAVASCRIPT //API traduit le JSON en JS grâce à la fonction getFromRedis et .hgetall (=stringify)
    >> USER (=navigateur reçoit les données et les affiche)

## QUELS SONT LES "ACTEURS" QUI ENTRENT EN JEU POUR FAIRE UNE REQUÊTE</h1>
    USER >> API REST >> API REDIS (=accessBdd) >> REDIS