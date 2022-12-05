-- CreateTable
CREATE TABLE "AnunciosInativos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cadastroCpf" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "calibre" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "fotoPrincipal" TEXT NOT NULL,
    "fotos" TEXT NOT NULL,
    "qntFotos" INTEGER NOT NULL,
    "valor" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "sistemaRegistro" TEXT NOT NULL,
    "envio" BOOLEAN NOT NULL,
    "visualizacoesAnuncio" INTEGER NOT NULL,
    "prioridade" INTEGER NOT NULL,
    "dataCriacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "AnunciosInativos_cadastroCpf_fkey" FOREIGN KEY ("cadastroCpf") REFERENCES "Cadastro" ("cpf") ON DELETE RESTRICT ON UPDATE CASCADE
);
