import express from 'express'


const app = express()

app.get('/anuncios', (request, response) => {
    return(
        console.log('aa')
    )
})

app.listen(3333)