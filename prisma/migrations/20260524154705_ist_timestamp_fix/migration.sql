-- AlterTable
ALTER TABLE "Submission" ALTER COLUMN "submittedAt" DROP DEFAULT,
ALTER COLUMN "submittedAt" SET DATA TYPE TEXT;
