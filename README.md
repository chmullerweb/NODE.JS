# NODE.JS
 Cours node.js Descodeuses

##COMMENT LES INFORMATIONS SONT TRANSMISES D'UN USER A UNE BDD</h1>
    <!-- ma requête en tant que USER pour récupérer data -->
    USER >> JAVASCRIPT (=navigateur communique en JS à l'API) 
    >> API >> JSON //API traduit JS en JSON grâce à la fonction sendToRedis et .hset (les informations sont parsées)
    >> REDIS  //Redis reçoit sous format JSON la requête 
    <!-- la réponse à ma requête -->
    REDIS >> JSON // grâce à la fonction fromRedis les données sont structurées selon le constructor de l'objet
    >> API >>  JAVASCRIPT //API traduit le JSON en JS grâce à la fonction getFromRedis et .hgetall (=stringify)
    >> USER (=navigateur reçoit les données et les affiche)

##QUELS SONT LES "ACTEURS" QUI ENTRENT EN JEU POUR FAIRE UNE REQUÊTE</h1>
    USER >> API REST >> API REDIS (=accessBdd) >> REDIS