-- CreateTable
CREATE TABLE "Modelo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "marcasArmaNome" TEXT NOT NULL,
    CONSTRAINT "Modelo_marcasArmaNome_fkey" FOREIGN KEY ("marcasArmaNome") REFERENCES "MarcasArma" ("nome") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Anuncio" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cadastroId" TEXT NOT NULL,
    "cadastroCpf" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "calibre" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "fotos" TEXT NOT NULL,
    "qntFotos" INTEGER NOT NULL,
    "valor" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "sistemaRegistro" TEXT NOT NULL,
    "envio" BOOLEAN NOT NULL,
    "visualizacoesAnuncio" INTEGER NOT NULL,
    "prioridade" INTEGER NOT NULL,
    "dataCriacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Anuncio_cadastroCpf_fkey" FOREIGN KEY ("cadastroCpf") REFERENCES "Cadastro" ("cpf") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Anuncio" ("cadastroCpf", "cadastroId", "calibre", "cep", "cidade", "dataCriacao", "descricao", "envio", "estado", "fotos", "id", "marca", "modelo", "prioridade", "qntFotos", "sistemaRegistro", "tipo", "valor", "visualizacoesAnuncio") SELECT "cadastroCpf", "cadastroId", "calibre", "cep", "cidade", "dataCriacao", "descricao", "envio", "estado", "fotos", "id", "marca", "modelo", "prioridade", "qntFotos", "sistemaRegistro", "tipo", "valor", "visualizacoesAnuncio" FROM "Anuncio";
DROP TABLE "Anuncio";
ALTER TABLE "new_Anuncio" RENAME TO "Anuncio";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
