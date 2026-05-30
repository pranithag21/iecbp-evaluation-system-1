const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const {
  evaluateSubmission
} = require('../../../../evaluation/evaluationEngine');

export async function POST(req) {

  try {

    const body = await req.json();

    const { submissionId, scenarioId } = body;

    // STEP 1 — fetch answers from DB
    const dbAnswers = await prisma.answer.findMany({
      where: {
        submissionId
      }
    });

    console.log("DB ANSWERS:", dbAnswers);

    // STEP 2 — format answers for engine
    const formattedAnswers = dbAnswers.map((a) => ({
  questionId: `q${a.questionId}`,
  answer: a.answer
}));
    console.log("FORMATTED:", formattedAnswers);

    // STEP 3 — run evaluation engine
    const result = await evaluateSubmission(
      scenarioId,
      formattedAnswers
    );

    console.log("EVALUATION RESULT:", result);

    // STEP 4 — store evaluation result
    const saved =
      await prisma.evaluationResult.create({
        data: {

          submissionId,

          scenarioId,

          overallScore:
            result.overallScore,

          understanding:
            result.signals.understanding,

          awareness:
            result.signals.awareness,

          decision:
            result.signals.decision,

          clarity:
            result.signals.clarity,

          feedback:
            result.feedback,

          evaluatedQuestions:
            result.evaluatedQuestions
        }
      });

    return Response.json({
      success: true,
      result: saved
    });

  } catch (error) {

    console.log("EVALUATION ERROR:", error);

    return Response.json({
      success: false,
      error: error.message
    });
  }
}