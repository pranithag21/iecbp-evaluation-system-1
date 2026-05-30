export default function FeedbackBox({ feedback }) {

  return (

    <div className="rounded-3xl p-8 bg-gradient-to-br from-[#111827] to-[#0f172a] border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.4)] overflow-hidden relative">

      {/* glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/10 blur-[120px]" />

      <div className="relative z-10">

        <h2 className="text-3xl font-bold text-white mb-8">
          Feedback Report
        </h2>

        {/* Strengths */}
        <div className="mb-8">

          <div className="flex items-center gap-3 mb-5">

            <div className="w-3 h-3 rounded-full bg-green-400" />

            <h3 className="text-2xl font-semibold text-green-400">
              Strengths
            </h3>

          </div>

          <div className="space-y-4">

            {feedback?.strengths?.map((item, index) => (

              <div
                key={index}
                className="p-4 rounded-2xl bg-green-500/10 border border-green-500/20 text-slate-200"
              >
                {item}
              </div>

            ))}

          </div>

        </div>

        {/* Improvements */}
        <div className="mb-8">

          <div className="flex items-center gap-3 mb-5">

            <div className="w-3 h-3 rounded-full bg-yellow-400" />

            <h3 className="text-2xl font-semibold text-yellow-400">
              Areas for Improvement
            </h3>

          </div>

          <div className="space-y-4">

            {feedback?.improvements?.map((item, index) => (

              <div
                key={index}
                className="p-4 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 text-slate-200"
              >
                {item}
              </div>

            ))}

          </div>

        </div>

        {/* Overall Summary */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20">

          <h3 className="text-2xl font-bold text-cyan-300 mb-4">
            Overall Summary
          </h3>

          <p className="text-slate-200 leading-8 text-lg">
            {feedback?.overallSummary}
          </p>

        </div>

      </div>

    </div>
  );
}