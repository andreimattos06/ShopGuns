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

app.post('/novoanuncio', async (request, response) => {

    const body: any = request.body;

    const cad = await prisma.anuncio.create({
        data: {

            
            cadastroCpf: body.cadastroCpf,
            tipo: body.tipo,
            calibre: body.calibre,
            marca: body.marca,
            modelo: body.modelo,
            valor: body.valor,
            descricao: body.descricao,
            cidade: body.cidade,
            estado: body.estado,
            sistemaRegistro: body.sistemaRegistro,
            envio: JSON.parse(body.envio),
            visualizacoesAnuncio: 0,

            fotoPrincipal: '',
            fotos: '',
            qntFotos: 0,
            prioridade: 1,

            
        }

        
    })

    return response.status(201);
})

app.get('/anuncios', async(request, response) => {
    const anuncios = await prisma.anuncio.findMany({
        select:{
            id: true,       
            tipo: true,     
            calibre: true,  
            marca: true,       
            fotos: true,    
            valor: true,           
            cidade: true,          
            estado: true,
            fotoPrincipal: true,        
            modelo: true,
        }
        
    })
    return (
        response.json(anuncios)
    )
})

app.get('/anuncios/:id', async(request, response) => {
    const idAnuncio: string = request.params.id;


    const anuncios = await prisma.anuncio.findUnique({
        select:{
            id: true,        
            tipo: true,     
            calibre: true,  
            marca: true,    
            modelo: true,
            fotoPrincipal: true,   
            fotos: true,    
            qntFotos: true,
            valor: true,    
            descricao: true,       
            cidade: true,          
            estado: true,          
            sistemaRegistro: true, 
            envio: true,        
            visualizacoesAnuncio: true, 
            prioridade: true,           
            dataCriacao: true,
           
        },

        where:{
            id : idAnuncio,
        }
        
    })
    return (
        response.json(anuncios)
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

/*app.get('/tiposarmas', async(request, response) => {
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
*/ 
/* --------------------FIM Get's para formulario de Novo Anuncio -------------------------------*/


app.listen(3334)