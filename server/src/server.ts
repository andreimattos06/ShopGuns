import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'


const app = express()

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3334'
})) //Serve para validar os domínios de acesso ao back

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

    return response.status(201).json(cad);
})

app.get('/anuncios', (request, response) => {
    return (
        console.log('aa')
    )
})

app.listen(3334)