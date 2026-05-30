export default function SignalCard({ title, score }) {

  const getTheme = (score) => {

    if (score >= 75) {
      return {
        text: 'text-green-400',
        bar: 'from-green-400 to-emerald-500',
        glow: 'shadow-[0_0_35px_rgba(34,197,94,0.35)]'
      };
    }

    if (score >= 50) {
      return {
        text: 'text-yellow-400',
        bar: 'from-yellow-400 to-orange-500',
        glow: 'shadow-[0_0_35px_rgba(250,204,21,0.35)]'
      };
    }

    return {
      text: 'text-red-400',
      bar: 'from-pink-500 to-red-500',
      glow: 'shadow-[0_0_35px_rgba(244,63,94,0.35)]'
    };
  };

  const theme = getTheme(score);

  return (

    <div className={`relative overflow-hidden rounded-3xl p-7 bg-gradient-to-br from-[#0f172a] to-[#111c34] border border-white/10 ${theme.glow} hover:scale-[1.02] transition-all duration-300`}>

      {/* Glow */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="relative z-10">

        <div className="flex justify-between items-start mb-6">

          <div>

            <div className="text-slate-400 uppercase tracking-widest text-xs mb-2">
              Signal
            </div>

            <h2 className="text-2xl font-bold text-white">
              {title}
            </h2>

          </div>

          <div className={`text-5xl font-extrabold ${theme.text}`}>
            {score}
          </div>

        </div>

        <div className="h-3 bg-slate-800 rounded-full overflow-hidden">

          <div
            className={`h-full rounded-full bg-gradient-to-r ${theme.bar}`}
            style={{
              width: `${score}%`
            }}
          />

        </div>

      </div>

    </div>
  );
}