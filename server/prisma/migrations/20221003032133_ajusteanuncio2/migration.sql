/*
  Warnings:

  - You are about to drop the column `cadastroId` on the `Anuncio` table. All the data in the column will be lost.
  - You are about to drop the column `cep` on the `Anuncio` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Anuncio" (
    "id" TEXT NOT NULL PRIMARY KEY,
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
    "sistemaRegistro" TEXT NOT NULL,
    "envio" BOOLEAN NOT NULL,
    "visualizacoesAnuncio" INTEGER NOT NULL,
    "prioridade" INTEGER NOT NULL,
    "dataCriacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Anuncio_cadastroCpf_fkey" FOREIGN KEY ("cadastroCpf") REFERENCES "Cadastro" ("cpf") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Anuncio" ("cadastroCpf", "calibre", "cidade", "dataCriacao", "descricao", "envio", "estado", "fotos", "id", "marca", "modelo", "prioridade", "qntFotos", "sistemaRegistro", "tipo", "valor", "visualizacoesAnuncio") SELECT "cadastroCpf", "calibre", "cidade", "dataCriacao", "descricao", "envio", "estado", "fotos", "id", "marca", "modelo", "prioridade", "qntFotos", "sistemaRegistro", "tipo", "valor", "visualizacoesAnuncio" FROM "Anuncio";
DROP TABLE "Anuncio";
ALTER TABLE "new_Anuncio" RENAME TO "Anuncio";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
