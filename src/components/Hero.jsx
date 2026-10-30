import Bloom from './Bloom';

export default function Hero({ onEstimate, onCompare }) {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden xl:block"
      >
        <Bloom
          className="absolute -left-24 top-[188px] h-[19rem] w-[19rem] -rotate-12 opacity-40 text-forest"
          petal="#2d543c"
          core="#162a1e"
        />
        <Bloom
          className="absolute -right-28 top-[92px] h-[22rem] w-[22rem] rotate-[18deg] opacity-35 text-gold"
          petal="#c5a059"
          core="#9d7c38"
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1180px] px-6 pb-14 pt-16 sm:pb-16 sm:pt-20 lg:pt-24">
        <div className="reveal mx-auto max-w-[920px] text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-[#c5a059]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-forest-deep shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
            Where Every Property Finds Its Worth.
          </div>

          <h1 className="hero-title text-ink">
            A property estimate
            <br />
            that shows its work.
          </h1>

          <p className="mx-auto mt-7 max-w-[640px] text-lede text-graphite sm:mt-8">
            Four models value the same home independently: a random forest, a decision tree, a ridge
            regression, and a nearest-neighbour search. Change one detail and watch each
            respond.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <button
              type="button"
              onClick={onEstimate}
              className="w-full rounded-full bg-ink px-6 py-3 text-body font-medium text-paper transition-colors hover:bg-forest-light sm:w-auto"
            >
              Estimate a property
            </button>
            <button
              type="button"
              onClick={onCompare}
              className="rounded-sm text-body text-ink underline decoration-line underline-offset-[6px] transition-colors hover:decoration-ink"
            >
              Compare the models
            </button>
          </div>

          <p className="mx-auto mt-7 max-w-[560px] text-small text-muted">
            12,000 listings across Bangalore, Mumbai, Hyderabad, Pune and Nagpur.
            Trained on 18 features, evaluated on 2,400 held-out homes.
          </p>
        </div>
      </div>
    </section>
  );
}
