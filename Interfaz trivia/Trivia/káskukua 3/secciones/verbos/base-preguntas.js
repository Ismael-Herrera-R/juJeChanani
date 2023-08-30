let basePreguntas = [
    {
        "categoria": "Verbos (¿Ampe tsitisïnki úni?)",
        "pregunta": "¿Ampe arhikuekasïnki '¿Na xani jatirieski?' Castilla anapu jimpo?",
        "respuesta": "¿Cuántos años tienes?",
        "distractores": ["¿Cómo estás?", "¿Qué haces?", "¿Cuántos hermanos tienes?"]
    },
    {
        "categoria": "Verbos (¿Ampe tsitisïnki úni?)",
        "pregunta": "¿Ampe arhikuekasïnki '¿Ampe tsitisïnki úni?' Castilla anapu jimpo?",
        "respuesta": "¿Qué te gusta hacer?",
        "distractores": ["¿Qué vas a hacer?", "¿Qué haces?", "¿Qué haces en la mañanita?"]
    },
    {
        "categoria": "Verbos (¿Ampe tsitisïnki úni?)",
        "pregunta": "¿Ampe arhikuekasïnki '¿Na jatini jauarasïnki?' Castilla anapu jimpo?",
        "respuesta": "¿A qué hora te levantas?",
        "distractores": ["¿A qué hora de duermes?", "¿A qué hora te bañas?", "¿Qué hora es?"]
    },
    {
        "categoria": "Verbos (¿Ampe tsitisïnki úni?)",
        "pregunta": "¿Nena arhinhasïnki 'Me gusta ver películas todos los días' p'urhe jimpo?",
        "imagen": "./recursos/pelicula.jpg",
        "respuesta": "Tsitisïnkani pelicula exeani pauani pauani",
        "distractores": ["Tsitisïnti pelicula exeani tsípa jimpo", "Tsitisïnkani pelicula exeni pauani pauani", "Tsitisïnka pelicula exeani xatini jimpo"]
    },
    {
        "categoria": "Verbos (¿Ampe tsitisïnki úni?)",
        "pregunta": "¿Ampe arhikuekasïnki '¿Nani t'iresïnki?' Castilla anapu jimpo?",
        "respuesta": "¿Dónde sueles comer?",
        "distractores": ["¿Dónde sueles domir?", "¿A qué hora comes?", "¿A qué hora duermes?"]
    },
    {
        "categoria": "Verbos (¿Ampe tsitisïnki úni?)",
        "pregunta": "¿Nena arhinhasïnki 'No me gusta leer' p'urhe jimpo?",
        "imagen": "./recursos/libros.jpg",
        "respuesta": "Ji no tsitisïnka arhint'ani",
        "distractores": ["Ji no tsitisïnka arhini", "Meni isï tsitisïnkani arhint'ani", "Ji kánikua tsitisïnka arhint'ani"]
    },
    {
        "categoria": "Verbos (¿Ampe tsitisïnki úni?)",
        "pregunta": "¿Nena arhinhasïnki 'A Diego le gusta escuchar música' p'urhe jimpo?",
        "imagen": "./recursos/musica.jpg",
        "respuesta": "Diego tsitisïnti kúskakua kurhaani",
        "distractores": ["Diego kúskakua kurhaasïnti", "Diego tsitisïnti kúskakua kústani", "Diego tsitisïnka kúskakua kurhaani"]
    },
    {
        "categoria": "Verbos (¿Ampe tsitisïnki úni?)",
        "pregunta": "¿Ampe arhikuekasïnki '¿Ampe úsïnki chúrikua jimpo?' Castilla anapu jimpo?",
        "respuesta": "¿Qué sueles hacer en las noches?",
        "distractores": ["¿Qué haces en las mañanas?", "¿Qué sueles hacer en las tardes?", "¿Qué te gusta hacer en la noche?"]
    },
    {
        "categoria": "Verbos (¿Ampe tsitisïnki úni?)",
        "pregunta": "¿Ampe arhikuekasïnki '¿Na jatini ichapesïnki k'uíni?' Castilla anapu jimpo?",
        "respuesta": "¿A qué hora te acuestas a dormir?",
        "distractores": ["¿Cuánto duermes?", "¿A qué hora sueles dormir?", "¿A qué hora sueles comer?"]
    },
    {
        "categoria": "Verbos (¿Ampe tsitisïnki úni?)",
        "pregunta": "¿Ampe arhikuekasïnki 'Karla Uruapan anapuesti ka kánikua tsitisïnti uarhani' Castilla anapu jimpo?",
        "imagen": "./recursos/baile.jpg",
        "respuesta": "Karla es de Uruapan y le gusta mucho bailar",
        "distractores": ["Karla vive en Uruapan y le gusta mucho bailar", "Karla es de Uruapan y baila mucho", "Karla es de Uruapan y le gusta mucho hablar"]
    },
    {
        "categoria": "Verbos (¿Ampe tsitisïnki úni?)",
        "pregunta": "¿Ampe arhikuekasïnki 'Ismaeli karasïnti sani no pauani pauani' Castilla anapu jimpo?",
        "respuesta": "Ismael escribe casi todos los días",
        "distractores": ["Ismael casi nunca escribe", "Ismael no escribe todos los días", "A Ismael le gusta escribir todos los días"]
    },
    {
        "categoria": "Verbos (¿Ampe tsitisïnki úni?)",
        "pregunta": "¿Ampe arhikuekasïnki 'Ceciia chenempo t'iresïnti meni isï' Castilla anapu jimpo?",
        "respuesta": "Cecilia siempre come en su casa",
        "distractores": ["Cecilia nunca come en su casa", "Cecilia casi nunca come en su casa", "Cecilia siempre come en tu casa"]
    },
    {
        "categoria": "Verbos (¿Ampe tsitisïnki úni?)",
        "pregunta": "¿Ampe arhikuekasïnki 'Sue tsitisïnti uarhani méniichani' Castilla anapu jimpo?",
        "respuesta": "A Sue le gusta bailar de vez en cuando",
        "distractores": ["Sue baila siempre", "A Sue siempre le gusta bailar", "A Sue nunca le gusta bailar"]
    },
    {
        "categoria": "Verbos (¿Ampe tsitisïnki úni?)",
        "pregunta": "¿Nena arhinhasïnki 'A Daniel le gusta caminar en las mañanas' p'urhe jimpo?",
        "imagen": "./recursos/caminata.jpg",
        "respuesta": "Danieli tsitisïnti xarhini jimpo xanharani",
        "distractores": ["Danieli tsitisïnti xarhini jimpo xarhiani", "Danieli tsitisïnti teruxutini jimpo xanharani", "Danieli tsitisïnti xatini jimpo xanharani"]
    },
    {
        "categoria": "Verbos (¿Ampe tsitisïnki úni?)",
        "pregunta": "¿Nena arhinhasïnki 'A Ismael le gusta ir al café' p'urhe jimpo?",
        "respuesta": "Ismaeli tsitisïnti caferhu nirani",
        "distractores": ["Ismaeli tsitisïnti caferhu jurhani", "Ismaeli tsitisïnka caferhu nirani", "Ismaeli tsitisïnti cafe arhani"]
    }
]