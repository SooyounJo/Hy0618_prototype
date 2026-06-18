import { Fragment } from "react";

const STAGES = [
  { ko: "공급자 투자", en: "INVEST" },
  { ko: "제조", en: "BUILD" },
  { ko: "디자인 · 개발", en: "DESIGN" },
  { ko: "품질 · 마케팅", en: "REFINE" },
  { ko: "고객", en: "SELL" }
];

const PANELS = [
  {
    label: "단방향의 본질",
    lead: "소비자는 가치사슬의 맨 끝에서 만들어진 것을 받기만 합니다.",
    accent: "소비자 신호는 앞까지 도달하지 않았습니다.",
    delay: "2400ms"
  },
  {
    label: "왜 단방향인가",
    lead: "필요한 것은 워크플로우가 쓸 때마다 좋아지는 시스템입니다.",
    accent: "일은 떠넘길 수 있어도, 학습은 절대 떠넘길 수 없습니다.",
    delay: "2800ms"
  }
];

function ChainArrow({ delay }) {
  return (
    <div className="figma-chain__arrow-wrap rv" style={{ "--rd": delay }}>
      <div className="figma-chain__arrow-line" />
      <svg
        className="figma-chain__arrow-head"
        viewBox="0 0 10 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M4.8641 4.62497C5.0878 4.40119 5.0878 4.03837 4.8641 3.81459L1.2173 0.167837C0.9935 -0.0559454 0.6307 -0.0559454 0.4069 0.167837C0.1831 0.39162 0.1831 0.754443 0.4069 0.978226L3.6485 4.21978L0.4069 7.46133C0.1831 7.68512 0.1831 8.04794 0.4069 8.27172C0.6307 8.49551 0.9935 8.49551 1.2173 8.27172L4.8641 4.62497Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

export default function SlideChain() {
  return (
    <section
      className="slide figma-slide figma-chain"
      data-ch="1"
      data-title="단방향 밸류체인"
    >
      <div className="figma-chain__bg" aria-hidden="true">
        <div className="figma-chain__glow figma-chain__glow--a" />
        <div className="figma-chain__glow figma-chain__glow--b" />
      </div>

      <div className="figma-slide__inner figma-chain__content">
        <div className="figma-chain__hero">
          <div className="figma-pill rv" style={{ "--rd": "250ms" }}>
            진단 · 문제는 기술이 아니다
          </div>

          <h2 className="figma-chain__headline rv head" style={{ "--rd": "600ms" }}>
            문제는 기술이 아니라 <strong>단방향 밸류체인</strong>입니다
          </h2>
        </div>

        <div className="figma-chain__flow">
          {STAGES.map((stage, index) => {
            const stageDelay = 1000 + (index * 200);
            const arrowDelay = 1000 + (index * 200) + 100;
            const isDesignStage = stage.en === "DESIGN";
            return (
              <Fragment key={stage.en}>
                <div
                  className={`figma-chain__stage rv${isDesignStage ? " figma-chain__stage--design" : ""}`}
                  style={{ "--rd": `${stageDelay}ms` }}
                >
                  <span className="figma-chain__stage-ko">{stage.ko}</span>
                  <span className="figma-chain__stage-en">{stage.en}</span>
                </div>
                {index < STAGES.length - 1 && <ChainArrow delay={`${arrowDelay}ms`} />}
              </Fragment>
            );
          })}
        </div>

        <div className="figma-chain__panels">
          {PANELS.map((panel) => (
            <div key={panel.label} className="figma-chain__panel-col rv" style={{ "--rd": panel.delay }}>
              <div className="figma-pill figma-pill--sm">{panel.label}</div>
              <article className="figma-chain__panel">
                <div className="figma-chain__panel-body">
                  <p>{panel.lead}</p>
                  <p className="figma-chain__panel-accent">{panel.accent}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
