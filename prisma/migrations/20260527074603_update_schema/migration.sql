-- CreateTable
CREATE TABLE "ExamAttempt" (
    "id" SERIAL NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "submit_time" TIMESTAMP(3),
    "duration_minutes" DOUBLE PRECISION,
    "status" TEXT NOT NULL DEFAULT 'started',

    CONSTRAINT "ExamAttempt_pkey" PRIMARY KEY ("id")
);
