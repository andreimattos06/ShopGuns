"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const client_1 = require("@prisma/client");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Allow CORS for all routes on the server
app.use((0, cors_1.default)());
const prisma = new client_1.PrismaClient({
    log: ['query']
});
app.post('/login', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const body = request.body;
    const idLogin = yield prisma.cadastro.findUnique({
        where: {
            email_password: {
                email: body.email,
                password: body.password,
            }
        },
        select: {
            email: true,
        }
    });
    if (idLogin) {
        return response.json(idLogin);
    }
    else {
        idLogin.email = "";
        return response.json(idLogin);
    }
}));
app.post('/dadosusuario', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const body = request.body;
    const dados = yield prisma.cadastro.findUnique({
        where: {
            email: body.token,
        },
        select: {
            cpf: true,
            email: true,
            password: true,
            nomeCompleto: true,
            logradouro: true,
            endereco: true,
            numero: true,
            bairro: true,
            cidade: true,
            estado: true,
            contato: true,
        }
    });
    return response.json(dados);
}));
app.post('/cadastro', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const body = request.body;
    const cad = yield prisma.cadastro.create({
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
    });
    return response.status(201);
}));
app.post('/atualizarcadastro', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const body = request.body;
    const cad = yield prisma.cadastro.update({
        where: {
            cpf: body.cpf,
        },
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
    });
    return null;
}));
app.post('/novoanuncio', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const body = request.body;
    const cpfUser = yield prisma.cadastro.findUnique({
        where: {
            email: body.cadastroEmail,
        },
        select: {
            cpf: true,
        }
    });
    if (cpfUser) {
        const cad = yield prisma.anuncio.create({
            data: {
                cadastroCpf: cpfUser["cpf"],
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
        });
    }
    else {
    }
    return response.status(201);
}));
app.get('/anuncios', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const anuncios = yield prisma.anuncio.findMany({
        select: {
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
    });
    return (response.json(anuncios));
}));
app.post('/anunciosusuario', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const body = request.body;
    const anunciosUser = yield prisma.cadastro.findUnique({
        where: {
            email: body.token,
        },
        select: {
            anuncios: {
                select: {
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
                    sistemaRegistro: true,
                }
            }
        }
    });
    return (response.json(anunciosUser));
}));
app.get('/anuncios/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const idAnuncio = request.params.id;
    const anuncios = yield prisma.anuncio.findUnique({
        select: {
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
            cadastro: {
                select: {
                    nomeCompleto: true,
                    email: true,
                    contato: true,
                }
            },
        },
        where: {
            id: idAnuncio,
        },
    });
    return (response.json(anuncios));
}));
app.get('/anunciosusuario/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const idAnuncio = request.params.id;
    const anuncios = yield prisma.anuncio.findUnique({
        select: {
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
            cadastro: {
                select: {
                    nomeCompleto: true,
                    email: true,
                    contato: true,
                }
            },
        },
        where: {
            id: idAnuncio,
        },
    });
    return (response.json(anuncios));
}));
app.post('/anunciosfiltrados', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const body = request.body;
    console.log(body);
    const anuncios = yield prisma.anuncio.findMany({
        where: {
            cidade: body.cidade,
            estado: body.estado,
            tipo: body.tipo,
            calibre: body.calibre,
            marca: body.marca,
            modelo: body.modelo,
            sistemaRegistro: body.registro,
        },
        select: {
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
            cadastro: {
                select: {
                    cidade: true,
                    estado: true,
                }
            },
        },
    });
    return (response.json(anuncios));
}));
app.post('/excluiranuncio/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const body = request.body;
    const idAnuncio = request.params.id;
    const anuncioExcluido = yield prisma.anuncio.findUnique({
        where: {
            id: idAnuncio,
        },
    });
    const [anuncioInativo, anuncioExc] = yield prisma.$transaction([
        prisma.anunciosInativos.create({
            data: {
                cadastroCpf: String(anuncioExcluido === null || anuncioExcluido === void 0 ? void 0 : anuncioExcluido.cadastroCpf),
                tipo: String(anuncioExcluido === null || anuncioExcluido === void 0 ? void 0 : anuncioExcluido.tipo),
                calibre: String(anuncioExcluido === null || anuncioExcluido === void 0 ? void 0 : anuncioExcluido.calibre),
                marca: String(anuncioExcluido === null || anuncioExcluido === void 0 ? void 0 : anuncioExcluido.marca),
                modelo: String(anuncioExcluido === null || anuncioExcluido === void 0 ? void 0 : anuncioExcluido.modelo),
                valor: String(anuncioExcluido === null || anuncioExcluido === void 0 ? void 0 : anuncioExcluido.valor),
                descricao: String(anuncioExcluido === null || anuncioExcluido === void 0 ? void 0 : anuncioExcluido.descricao),
                cidade: String(anuncioExcluido === null || anuncioExcluido === void 0 ? void 0 : anuncioExcluido.cidade),
                estado: String(anuncioExcluido === null || anuncioExcluido === void 0 ? void 0 : anuncioExcluido.estado),
                sistemaRegistro: String(anuncioExcluido === null || anuncioExcluido === void 0 ? void 0 : anuncioExcluido.sistemaRegistro),
                envio: Boolean(anuncioExcluido === null || anuncioExcluido === void 0 ? void 0 : anuncioExcluido.envio),
                visualizacoesAnuncio: Number(anuncioExcluido === null || anuncioExcluido === void 0 ? void 0 : anuncioExcluido.visualizacoesAnuncio),
                fotoPrincipal: String(anuncioExcluido === null || anuncioExcluido === void 0 ? void 0 : anuncioExcluido.fotoPrincipal),
                fotos: String(anuncioExcluido === null || anuncioExcluido === void 0 ? void 0 : anuncioExcluido.fotos),
                qntFotos: Number(anuncioExcluido === null || anuncioExcluido === void 0 ? void 0 : anuncioExcluido.qntFotos),
                prioridade: Number(anuncioExcluido === null || anuncioExcluido === void 0 ? void 0 : anuncioExcluido.prioridade),
            }
        }),
        prisma.anuncio.delete({
            where: {
                id: idAnuncio,
            },
        })
    ]);
    return (response.json(alert("Transacao realizada com sucesso!")));
}));
/* --------------------COMECO Get's para formulario de Novo Anuncio -------------------------------*/
app.get('/infosnovoanuncio', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const marcas = yield prisma.marcasArma.findMany({});
    const tipos = yield prisma.tipoArma.findMany({});
    const calibres = yield prisma.calibre.findMany({});
    const infos = [marcas, tipos, calibres];
    return (response.json(infos));
}));
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
app.listen(3334);
