-- CreateTable
CREATE TABLE "ShortUrl" (
    "id" TEXT NOT NULL,
    "original" TEXT NOT NULL,
    "short" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ShortUrl_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ShortUrl_original_key" ON "ShortUrl"("original");

-- CreateIndex
CREATE UNIQUE INDEX "ShortUrl_short_key" ON "ShortUrl"("short");
