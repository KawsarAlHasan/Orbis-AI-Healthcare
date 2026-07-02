export default function CTASection() {
  return (
    <section className="bg-[#1d1029]">
      <div className="py-32 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="cormorantFont secondColor text-4xl sm:text-5xl lg:text-[60px] font-[500] mb-5 leading-tight">
            Ready to transform your clinic?
          </h2>
          <p className="subTitleText text-sm sm:text-[20px] mb-12 leading-relaxed max-w-2xl mx-auto">
            Join hundreds of forward-thinking healthcare practices using Orbis
            AI to automate growth and improve patient experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="mainBtn flex items-center gap-2 text-sm font-bold px-6 py-3.5 rounded-lg transition-colors hover:opacity-90"
              style={{
                border: "none",
              }}
            >
              Start your 14-day free trial
            </button>
            <button className="border border-white/25 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/5 hover:border-white/40 transition-all text-sm">
              Talk to Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
