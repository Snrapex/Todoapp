-- CreateTable
CREATE TABLE "Todolist" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "content" TEXT NOT NULL,
    "completedAt" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Todolist_pkey" PRIMARY KEY ("id")
);
