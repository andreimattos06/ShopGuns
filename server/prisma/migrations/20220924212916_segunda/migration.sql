-- CreateTable
CREATE TABLE "Cadastro" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "bannerUrl" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Anuncio" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cadastroId" TEXT NOT NULL,
    CONSTRAINT "Anuncio_cadastroId_fkey" FOREIGN KEY ("cadastroId") REFERENCES "Cadastro" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
