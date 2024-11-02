const eventEmitter =require('events')

    const normalEmitter = new eventEmitter()

    normalEmitter.on('response',()=>{//listen for a specific event, and give it a name
        console.log('data received')
    })

    normalEmitter.emit('response')
