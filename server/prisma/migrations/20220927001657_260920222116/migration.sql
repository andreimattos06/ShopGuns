/*
  Warnings:

  - The primary key for the `Cadastro` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `bannerUrl` on the `Cadastro` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Cadastro` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Cadastro` table. All the data in the column will be lost.
  - Added the required column `cadastroCpf` to the `Anuncio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bairro` to the `Cadastro` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cidade` to the `Cadastro` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contato` to the `Cadastro` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpf` to the `Cadastro` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Cadastro` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endereco` to the `Cadastro` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estado` to the `Cadastro` table without a default value. This is not possible if the table is not empty.
  - Added the required column `logradouro` to the `Cadastro` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomeCompleto` to the `Cadastro` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numero` to the `Cadastro` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Cadastro` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Anuncio" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cadastroId" TEXT NOT NULL,
    "cadastroCpf" TEXT NOT NULL,
    CONSTRAINT "Anuncio_cadastroCpf_fkey" FOREIGN KEY ("cadastroCpf") REFERENCES "Cadastro" ("cpf") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Anuncio" ("cadastroId", "id") SELECT "cadastroId", "id" FROM "Anuncio";
DROP TABLE "Anuncio";
ALTER TABLE "new_Anuncio" RENAME TO "Anuncio";
CREATE TABLE "new_Cadastro" (
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "nomeCompleto" TEXT NOT NULL,
    "logradouro" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "contato" TEXT NOT NULL
);
DROP TABLE "Cadastro";
ALTER TABLE "new_Cadastro" RENAME TO "Cadastro";
CREATE UNIQUE INDEX "Cadastro_cpf_key" ON "Cadastro"("cpf");
CREATE UNIQUE INDEX "Cadastro_email_key" ON "Cadastro"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
