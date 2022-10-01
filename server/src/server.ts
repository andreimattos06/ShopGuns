import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'


const app = express()

app.use(express.json())


app.use(cors({
    
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",

}))

const prisma = new PrismaClient({
    log: ['query']
})

app.post('/cadastro', async (request, response) => {

    const body: any = request.body;

    const cad = await prisma.cadastro.create({
        data: {

            cpf: body.cpf,
            email: body.email,
            password: body.password,
            nomeCompleto: body.nomeCompleto,
            logradouro: body.logradouro,
            endereco: body.endereco,
            numero: body.numero,
            bairro: body.bairro,
            cidade: body.cidade,
            estado: body.estado,
            contato: body.contato,

        }

        
    })

    return response.status(201);
})

app.get('/anuncios', (request, response) => {
    return (''
        
    )
})


/* --------------------COMECO Get's para formulario de Novo Anuncio -------------------------------*/
app.get('/infosnovoanuncio', async(request, response) => {
    const marcas = await prisma.marcasArma.findMany({        
    })

    const tipos = await prisma.tipoArma.findMany({        
    })

    const calibres = await prisma.calibre.findMany({        
    })

    const infos = [marcas, tipos, calibres]

    
    return (
        response.json(infos)
    )
})

app.get('/tiposarmas', async(request, response) => {
    const tipos = await prisma.tipoArma.findMany({
        
    })
    return (
        response.json(tipos)
    )
})

app.get('/calibresarmas', async(request, response) => {
    const calibre = await prisma.calibre.findMany({
        
    })
    return (
        response.json(calibre)
    )
})
/* --------------------FIM Get's para formulario de Novo Anuncio -------------------------------*/


app.listen(3334)