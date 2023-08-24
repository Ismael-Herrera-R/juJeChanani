let basePreguntas = [
    {
        "categoria": "Exhortativo/Vedativo",
        "pregunta": "¿Ampeeski 'Ju je uantani' Castilla anapu jimpo?",
        "respuesta": "Vamos a hablar",
        "distractores": ["Vamos a conversar", "Vamos a bailar", "Vamos a ir"]
    },
    {
        "categoria": "Exhortativo/Vedativo",
        "pregunta": "¿Ampeeski 'Ju ia jucha inchani' Castilla anapu jimpo?",
        "respuesta": "Vamos a entrar",
        "distractores": ["¡Entren!", "Vamos a ir", "¡Vayan!"]
    },
    {
        "categoria": "Exhortativo/Vedativo",
        "pregunta": "¿Nena arhinhasïnki 'No andes fumando' p'urhe jimpo?",
        "imagen": "./recursos/fumar.PNG",
        "respuesta": "Asï jáma itsutani",
        "distractores": ["Asï jáma ikiani", "Asï jáma sïpani", "Asï jorhenkuarhi itsutani"]
    },
    {
        "categoria": "Exhortativo/Vedativo",
        "pregunta": "¿Nena arhinhasïnki 'No coman' p'urhe jimpo?",
        "imagen": "./recursos/comer.PNG",
        "respuesta": "Asï a je",
        "distractores": ["Asï a", "Asï arha", "Asï arha je"]
    },
    {
        "categoria": "Exhortativo/Vedativo",
        "pregunta": "¿Nena arhinhasïnki 'Levántense, por favor' p'urhe jimpo?",
        "imagen": "./recursos/levantarse.PNG",
        "respuesta": "Jauara je sani",
        "distractores": ["Uaxaka je sani", "Asï jauara je sani", "Jauara sani"]
    },
    {
        "categoria": "Exhortativo/Vedativo",
        "pregunta": "¿Ampeeski 'Jábu ch'anani' Castilla anapu jimpo?",
        "respuesta": "Vamos a jugar",
        "distractores": ["No andes jugando", "¡Jueguen!", "Enséñate a jugar"]
    },
    {
        "categoria": "Exhortativo/Vedativo",
        "pregunta": "¿Ampeeski 'Jábu uarhani' Castilla anapu jimpo?",
        "respuesta": "Vamos a bailar",
        "distractores": ["Vamos a hablar", "Vamos a platicar", "Vamos a cantar"]
    },
    {
        "categoria": "Exhortativo/Vedativo",
        "pregunta": "¿Ampeeski 'Asï jorhenkuarhi chkuántirani' Castilla anapu jimpo?",
        "respuesta": "No te enseñes a mentir",
        "distractores": ["No andes mintiendo", "No te enseñes a ser flojo", "No te enseñes a robar"]
    },
    {
        "categoria": "Exhortativo/Vedativo",
        "pregunta": "¿Ampeeski 'Asï kauini je ixu' Castilla anapu jimpo?",
        "respuesta": "No se embriaguen aquí",
        "distractores": ["No anden mintiendo", "No fumen aquí", "No se anden embriagando"]
    },
    {
        "categoria": "Exhortativo/Vedativo",
        "pregunta": "¿Nena arhinhasïnki 'No entren' p'urhe jimpo?",
        "imagen": "./recursos/entrar.PNG",
        "respuesta": "Asï incha je",
        "distractores": ["Incha je sani", "Asï jorhenkuarhi je inchani", "Asï jáma inchani"]
    },
    {
        "categoria": "Exhortativo/Vedativo",
        "pregunta": "¿Ampeeski 'Jábu mintsikuarhini' Castilla anapu jimpo?",
        "respuesta": "Vamos a descansar",
        "distractores": ["Descansa", "¡Descansen!", "Necesitamos descansar"]
    },
    {
        "categoria": "Exhortativo/Vedativo",
        "pregunta": "¿Ampeeski 'Asï exeni ja' Castilla anapu jimpo?",
        "respuesta": "No estés viendo",
        "distractores": ["No vean", "No veas aquí", "No vayan a ver"]
    },
    {
        "categoria": "Exhortativo/Vedativo",
        "pregunta": "¿Ampeeski 'Asï ju je jini' Castilla anapu jimpo?",
        "respuesta": "No vengan acá",
        "distractores": ["No vayan allá", "No vengas acá", "No vayas allá"]
    },
    {
        "categoria": "Exhortativo/Vedativo",
        "pregunta": "¿Ampeeski 'Níue kókuani' Castilla anapu jimpo?",
        "respuesta": "Que vaya rápido",
        "distractores": ["Que venga rápido", "Que vayan rápido", "Que vengan rápido"]
    },
    {
        "categoria": "Exhortativo/Vedativo",
        "pregunta": "¿Ampeeski 'Jaue kauini sani' Castilla anapu jimpo?",
        "respuesta": "Vamos a beber un poco",
        "distractores": ["Vamos a bailar por favor", "Vamos a mentir tantito", "Vamos a fumar un poco"]
    },
    {
        "categoria": "Exhortativo/Vedativo",
        "pregunta": "¿Nena arhinhasïnki 'No te enojes' p'urhe jimpo?",
        "imagen": "./recursos/miedoso.PNG",
        "respuesta": "Asï ikia ia",
        "distractores": ["Asï jáma ikiani", "Asï jorhenkuarhi ikiani sani", "Asï ikiae"]
    },
    {
        "categoria": "Exhortativo/Vedativo",
        "pregunta": "¿Ampeeski 'Ju je k'urhamarhini' Castilla anapu jimpo?",
        "respuesta": "Vamos a preguntar",
        "distractores": ["Vamos a escuchar", "Vamos a platicar", "Vamos a responder"]
    },
    {
        "categoria": "Exhortativo/Vedativo",
        "pregunta": "¿Ampeeski 'Asï arhint'ani ja' Castilla anapu jimpo?",
        "respuesta": "No estés leyendo",
        "distractores": ["No estés pintando", "No estés comiendo", "No le estés diciendo"]
    },
    {
        "categoria": "Exhortativo/Vedativo",
        "pregunta": "¿Ampeeski 'Asï jorhenkuarhi sïpani' Castilla anapu jimpo?",
        "respuesta": "No te enseñes a robar",
        "distractores": ["No aprendas a mentir", "No andes mintiendo", "No andes robando"]
    },
    {
        "categoria": "Exhortativo/Vedativo",
        "pregunta": "¿Nena arhinhasïnki 'No estés escuchando' p'urhe jimpo?",
        "imagen": "./recursos/miedoso.PNG",
        "respuesta": "Asï kurhaani ja",
        "distractores": ["Asï k'urhamarhini ja", "Asï jorhenkuarhi kurhaani", "Asï kurhaa je"]
    }
]