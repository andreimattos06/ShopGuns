/*
  Warnings:

  - You are about to drop the `marcasArma` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "marcasArma";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "MarcasArma" (
    "nome" TEXT NOT NULL PRIMARY KEY
);

-- CreateTable
CREATE TABLE "Calibre" (
    "nome" TEXT NOT NULL PRIMARY KEY
);

-- CreateTable
CREATE TABLE "TipoArma" (
    "nome" TEXT NOT NULL PRIMARY KEY
);

-- CreateIndex
CREATE UNIQUE INDEX "MarcasArma_nome_key" ON "MarcasArma"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Calibre_nome_key" ON "Calibre"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "TipoArma_nome_key" ON "TipoArma"("nome");
