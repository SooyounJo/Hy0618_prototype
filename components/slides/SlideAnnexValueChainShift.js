import { Fragment, useState } from "react";

const STAGES = [
  { ko: "공급자 투자", en: "INVEST" },
  { ko: "제조", en: "BUILD" },
  { ko: "디자인 · 개발", en: "DESIGN" },
  { ko: "품질 · 마케팅", en: "REFINE" },
  { ko: "고객", en: "SELL" }
];

function AnnexArrow({ delay }) {
  return (
    <div className="figma-annex-vc__arrow-container rv" style={{ "--rd": delay }}>
      <div className="figma-annex-vc__arrow-wrap">
        <div className="figma-annex-vc__arrow-line" />
        <svg
          className="figma-annex-vc__arrow-head"
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
    </div>
  );
}

export default function SlideAnnexValueChain() {
  const [isReversed, setIsReversed] = useState(false);

  return (
    <section
      className="slide figma-slide figma-annex-vc"
      data-ch="a"
      data-title="소유 지점의 이동"
    >
      <div className="figma-annex-vc__bg" aria-hidden="true" />
      <div className={`figma-slide__inner figma-annex-vc__content ${isReversed ? "is-reversed" : ""}`}>
        <div className="figma-pill rv" style={{ "--rd": "250ms" }}>
          보조 인터랙션 · 흐름을 되돌리다
        </div>

        <h2 className="figma-annex-vc__headline rv head" style={{ "--rd": "600ms" }}>
          밸류체인의 <strong>소유 지점</strong>을 옮깁니다
        </h2>

        <p className="figma-annex-vc__summary rv" style={{ "--rd": "1000ms" }}>
          포드가 ‘만드는 방식 HOW’를 바꿨다면, 우리는 ‘가치가 시작되는 곳 WHERE’을 바꿉니다. 소비자 신호가 사후 반응이 아니라{" "}
          <strong>설계의 입력값</strong>이 되는 구조입니다.
        </p>

        <div className="figma-annex-vc__flow rv" style={{ "--rd": "1500ms" }}>
          {STAGES.map((stage, index) => {
            const stageDelay = 1500 + index * 200;
            const arrowDelay = 1500 + index * 200 + 100;
            const isDesignStage = stage.en === "DESIGN";

            return (
              <Fragment key={stage.en}>
                <div
                  className={`figma-annex-vc__stage${isDesignStage ? " figma-annex-vc__stage--design" : ""}`}
                  style={{ "--rd": `${stageDelay}ms` }}
                >
                  <span className="figma-annex-vc__stage-ko">{stage.ko}</span>
                  <span className="figma-annex-vc__stage-en">{stage.en}</span>
                </div>
                {index < STAGES.length - 1 && <AnnexArrow delay={`${arrowDelay}ms`} />}
              </Fragment>
            );
          })}
        </div>

        <div className="figma-annex-vc__direction rv" style={{ "--rd": "2200ms" }}>
          <button
            type="button"
            className={`figma-annex-vc__direction-btn${isReversed ? " is-on" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setIsReversed((prev) => !prev);
            }}
          >
            {isReversed ? "다시 단방향으로" : "방향을 뒤집다"}
          </button>
          <p className={`figma-annex-vc__direction-note${isReversed ? " is-on" : ""}`}>
            {isReversed
              ? "소비자 신호가 설계의 입력값이 됩니다. 그 시작점이 디자인입니다."
              : "단방향을 완성한 혁명에서, 단방향을 뒤집는 혁명으로."}
          </p>
        </div>
      </div>
    </section>
  );
}

