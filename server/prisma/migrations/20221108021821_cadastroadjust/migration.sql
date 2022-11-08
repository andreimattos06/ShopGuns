-- RedefineTables
PRAGMA foreign_keys=OFF;
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
    "contato" TEXT NOT NULL,

    PRIMARY KEY ("email", "password")
);
INSERT INTO "new_Cadastro" ("bairro", "cidade", "contato", "cpf", "email", "endereco", "estado", "logradouro", "nomeCompleto", "numero", "password") SELECT "bairro", "cidade", "contato", "cpf", "email", "endereco", "estado", "logradouro", "nomeCompleto", "numero", "password" FROM "Cadastro";
DROP TABLE "Cadastro";
ALTER TABLE "new_Cadastro" RENAME TO "Cadastro";
CREATE UNIQUE INDEX "Cadastro_cpf_key" ON "Cadastro"("cpf");
CREATE UNIQUE INDEX "Cadastro_email_key" ON "Cadastro"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
