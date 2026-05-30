import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {

  try {

    const body = await req.json();

    const { attemptId } = body;

    if (!attemptId) {

      return Response.json(
        {
          success: false,
          message: "Attempt ID missing"
        },
        {
          status: 400
        }
      );
    }

    // Find attempt
    const attempt =
      await prisma.examAttempt.findUnique({
        where: {
          id: attemptId
        }
      });

    if (!attempt) {

      return Response.json(
        {
          success: false,
          message: "Attempt not found"
        },
        {
          status: 404
        }
      );
    }

    // Calculate duration
    const startTime =
      new Date(attempt.start_time);

    const endTime =
      new Date();

    const durationMinutes =
      Math.floor(
        (endTime - startTime) / 1000 / 60
      );

    // ─────────────────────────────
    // QUICK SUBMISSION VALIDATION
    // ─────────────────────────────

    const MIN_DURATION_MINUTES = 10;

    if (durationMinutes < MIN_DURATION_MINUTES) {

      return Response.json({
        success: false,
        tooFast: true,
        durationMinutes,
        minimumRequired: MIN_DURATION_MINUTES
      });
    }

    // Update attempt
    await prisma.examAttempt.update({

      where: {
        id: attemptId
      },

      data: {

        submit_time: endTime,

        duration_minutes:
          durationMinutes,

        status: 'submitted'
      }
    });

    return Response.json({
      success: true,
      durationMinutes
    });

  } catch (error) {

    console.log(
      "ASSESSMENT SUBMIT ERROR:",
      error
    );

    return Response.json(
      {
        success: false,
        message: error.message
      },
      {
        status: 500
      }
    );
  }
}