export default function ResultSummary({ result }) {

  const scoreColor =
    result.overallScore >= 75
      ? 'text-green-400'
      : result.overallScore >= 50
        ? 'text-yellow-400'
        : 'text-red-400';

  return (

    <div className="relative overflow-hidden rounded-[32px] p-10 bg-gradient-to-br from-[#132238] via-[#1b2440] to-[#311b45] border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">

      {/* Glows */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/20 blur-[120px]" />

      <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-500/20 blur-[120px]" />

      <div className="relative z-10">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

          <div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 mb-5">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

              <span className="text-cyan-300 text-sm font-medium">
                Behavioral Evaluation
              </span>
            </div>

            <h1 className="text-4xl font-extrabold text-white mb-3">
              Evaluation Summary
            </h1>

            <p className="text-slate-300 text-lg">
              behavioral analysis based on your responses
            </p>

          </div>

          {/* Score Circle */}
          <div className="flex flex-col items-center justify-center">

            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center shadow-[0_0_60px_rgba(59,130,246,0.35)]">

              <div className="text-center">

                <div className={`text-5xl font-extrabold ${scoreColor}`}>
                  {result.overallScore}
                </div>

                <div className="text-slate-400 text-sm mt-2">
                  Overall Score
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Progress */}
        <div className="mt-10">

          <div className="flex justify-between text-sm mb-3">
            <span className="text-slate-300">
              Performance Score
            </span>

            <span className={`${scoreColor} font-semibold`}>
              {result.overallScore}%
            </span>
          </div>

          <div className="h-4 bg-slate-800 rounded-full overflow-hidden">

            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_30px_rgba(99,102,241,0.7)]"
              style={{
                width: `${result.overallScore}%`
              }}
            />

          </div>

        </div>

      </div>

    </div>
  );
}