-- CreateTable
CREATE TABLE "EvaluationResult" (
    "id" SERIAL NOT NULL,
    "submissionId" INTEGER NOT NULL,
    "scenarioId" INTEGER NOT NULL,
    "overallScore" DOUBLE PRECISION NOT NULL,
    "understanding" DOUBLE PRECISION NOT NULL,
    "awareness" DOUBLE PRECISION NOT NULL,
    "decision" DOUBLE PRECISION NOT NULL,
    "clarity" DOUBLE PRECISION NOT NULL,
    "feedback" JSONB NOT NULL,
    "evaluatedQuestions" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EvaluationResult_pkey" PRIMARY KEY ("id")
);
