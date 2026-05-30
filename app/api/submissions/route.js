// app/api/submissions/route.js

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

export async function POST(req) {

  try {

    const body = await req.json();

    const {
      scenarioId,
      answers,
      attemptId
    } = body;

    // ─────────────────────────────────────
    // PREVENT DUPLICATE SUBMISSIONS
    // ─────────────────────────────────────

    const latestSubmission =
      await prisma.submission.findFirst({

        where: {
          scenarioId,
        },

        orderBy: {
          id: 'desc',
        },

        include: {
          answers: true,
        },
      });

    // Prevent duplicate insert
    if (
      latestSubmission &&
      latestSubmission.answers &&
      latestSubmission.answers.length > 0
    ) {

      console.log("DUPLICATE SUBMISSION PREVENTED");

      return Response.json({
        success: true,

        submissionId: latestSubmission.id,

        duplicatePrevented: true,
      });
    }

    // ─────────────────────────────────────
    // STEP 1 — Create submission
    // ─────────────────────────────────────

    const submission = await prisma.submission.create({
      data: {
        scenarioId,

        submittedAt: new Date().toLocaleString('en-IN', {
          timeZone: 'Asia/Kolkata',
        }),
      },
    });

    // ─────────────────────────────────────
    // STEP 2 — Format answers
    // ─────────────────────────────────────

    const formattedAnswers = Object.entries(answers).map(
      ([questionId, answer]) => ({

        submissionId: submission.id,

        questionId: Number(questionId),

        answer:
          typeof answer === 'string'
            ? answer
            : JSON.stringify(answer),
      })
    );

    // ─────────────────────────────────────
    // STEP 3 — Store answers
    // ─────────────────────────────────────

    await prisma.answer.createMany({
      data: formattedAnswers,
    });

    console.log("ANSWERS STORED");

    // ─────────────────────────────────────
    // UPDATE EXAM ATTEMPT
    // ─────────────────────────────────────

    if (attemptId !== undefined && attemptId !== null) {

      const attempt =
        await prisma.examAttempt.findUnique({
          where: {
            id: Number(attemptId),
          },
        });

      if (attempt) {

        const startTime =
          new Date(attempt.start_time);

        const endTime =
          new Date();

        const duration_minutes =
          Math.max(
            1,
            Math.round(
              (endTime - startTime) / 60000
            )
          );

        await prisma.examAttempt.update({
          where: {
            id: Number(attemptId),
          },

          data: {
            status: 'submitted',

            submit_time: new Date(),

            duration_minutes: Number(duration_minutes),
          },
        });

        console.log("EXAM ATTEMPT UPDATED");
      }
    }

    // ─────────────────────────────────────
    // STEP 4 — Trigger evaluation engine
    // ─────────────────────────────────────

    const evaluationResponse = await fetch(
      'http://localhost:3000/api/evaluation/evaluate',
      {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          submissionId: submission.id,
          scenarioId,
        }),
      }
    );

    const evaluationData =
      await evaluationResponse.json();

    console.log(
      "EVALUATION RESPONSE:",
      evaluationData
    );

    // ─────────────────────────────────────
    // STEP 5 — Return success
    // ─────────────────────────────────────

    return Response.json({
      success: true,

      submissionId: submission.id,

      evaluation: evaluationData,
    });

  } catch (error) {

    console.error(
      "SUBMISSION ERROR:",
      error
    );

    return Response.json(
      {
        success: false,

        message:
          'Failed to save submission',
      },
      {
        status: 500,
      }
    );
  }
}