-- CreateTable
CREATE TABLE "shorturl" (
    "id" TEXT NOT NULL,
    "original" TEXT NOT NULL,
    "short" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "shorturl_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "shorturl_original_key" ON "shorturl"("original");

-- CreateIndex
CREATE UNIQUE INDEX "shorturl_short_key" ON "shorturl"("short");
