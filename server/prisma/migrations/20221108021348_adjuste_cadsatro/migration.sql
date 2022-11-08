/*
  Warnings:

  - A unique constraint covering the columns `[email,password]` on the table `Cadastro` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Cadastro_email_cpf_key";

-- CreateIndex
CREATE UNIQUE INDEX "Cadastro_email_password_key" ON "Cadastro"("email", "password");
