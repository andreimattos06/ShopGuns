/*
  Warnings:

  - Added the required column `calibre` to the `Anuncio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cep` to the `Anuncio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cidade` to the `Anuncio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descricao` to the `Anuncio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `envio` to the `Anuncio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estado` to the `Anuncio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fotos` to the `Anuncio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `marca` to the `Anuncio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `modelo` to the `Anuncio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prioridade` to the `Anuncio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `qntFotos` to the `Anuncio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sistemaRegistro` to the `Anuncio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo` to the `Anuncio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valor` to the `Anuncio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `visualizacoesAnuncio` to the `Anuncio` table without a default value. This is not possible if the table is not empty.

*/
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
    CONSTRAINT "Anuncio_cadastroCpf_fkey" FOREIGN KEY ("cadastroCpf") REFERENCES "Cadastro" ("cpf") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Anuncio" ("cadastroCpf", "cadastroId", "id") SELECT "cadastroCpf", "cadastroId", "id" FROM "Anuncio";
DROP TABLE "Anuncio";
ALTER TABLE "new_Anuncio" RENAME TO "Anuncio";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
