// TODO: PARA Implementar este Código , debes copiar todo el codigo y pegarlo en la cosola de tu Browser, (Microsoft Edge, recomendado)

const recognition = new webkitSpeechRecognition()

recognition.lang = 'es-ES'

recognition.continuous = true
recognition.onresult = event => {
    for(const result of event.results){

        console.log(result[0].transcript);
    }
}

recognition.start()