const NODES = [
  { pos: "top", en: "Generate", ko: "생성", sub: "AI 무한 작업", primary: true },
  { pos: "right", en: "Select", ko: "선택", sub: "디자이너의 판단", primary: false },
  { pos: "bottom", en: "Validate", ko: "검증", sub: "크로스 티겟", primary: true },
  { pos: "left", en: "Assetize", ko: "자산화", sub: "판단체계", primary: false }
];

function LoopNode({ en, ko, sub, primary }) {
  return (
    <div className={`figma-loop__node${primary ? " figma-loop__node--primary" : ""}`}>
      <img
        src={primary ? "/images/figma/loop-node-primary.svg" : "/images/figma/loop-node-secondary.svg"}
        alt=""
        className="figma-loop__node-bg"
        aria-hidden
      />
      <div className="figma-loop__node-text">
        <span className="figma-loop__node-en">{en}</span>
        <span className="figma-loop__node-ko">{ko}</span>
        <span className="figma-loop__node-sub">{sub}</span>
      </div>
    </div>
  );
}

export default function SlideLoop() {
  return (
    <section className="slide figma-slide figma-loop figma-chain" data-ch="3" data-title="해결책 · Closed Loop">
      <div className="figma-chain__bg" aria-hidden="true">
        <div className="figma-chain__glow figma-chain__glow--a" />
        <div className="figma-chain__glow figma-chain__glow--b" />
      </div>

      <div className="figma-slide__inner figma-loop__content">
        <div className="figma-loop__grid rv" style={{ "--rd": "400ms" }}>
          <div className="figma-loop__stage">
            <svg className="figma-loop__ring-svg" viewBox="0 0 100 100" aria-hidden="true">
              <defs>
                <linearGradient id="loop-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4d6dff" stopOpacity="0" />
                  <stop offset="20%" stopColor="#4d6dff" stopOpacity="0.2" />
                  <stop offset="60%" stopColor="#4d6dff" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
                </linearGradient>
              </defs>
              <circle
                cx="50"
                cy="50"
                r="38"
                fill="none"
                stroke="url(#loop-gradient)"
                strokeWidth="0.8"
                className="figma-loop__ring-circle"
              />
            </svg>
            <div className="figma-loop__center">
              <span>자산의</span>
              <strong>‘축적’</strong>
            </div>
            {NODES.map((node) => (
              <div key={node.pos} className={`figma-loop__node-wrap figma-loop__node-wrap--${node.pos}`}>
                <LoopNode {...node} />
              </div>
            ))}
          </div>

          <div className="figma-loop__copy">
            <p className="figma-loop__eyebrow rv" style={{ "--rd": "600ms" }}>
              The Solution
            </p>
            <h2 className="figma-loop__headline rv head" style={{ "--rd": "900ms" }}>
              해결책은
              <br />
              <span className="figma-loop__underline">Closed Loop</span> 입니다
            </h2>
            <div className="figma-loop__quote rv" style={{ "--rd": "1300ms" }}>
              <p className="figma-loop__quote-lead">“AI를 활용하여 더 많은 옵션과 가능성을”</p>
              <p className="figma-loop__quote-body">
                <strong>생성→선택→검증→자산화</strong>의 과정을 거칠수록 다음 생성 결과물이 더 좋아지게 되는
                구조입니다.
              </p>
            </div>
            <p className="figma-loop__body rv" style={{ "--rd": "1700ms" }}>
              AI는 탐색과 효율을 위한 엔진으로, 수백개의 가능성을 보여줍니다
              <br />
              디자이너는 시각적인것을 넘어 의도로 탐색의 폭을 넓힙니다
            </p>
            <p className="figma-loop__asset rv" style={{ "--rd": "2100ms" }}>
              자산 : Key Image Line-up Overview(AI Design Agent)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
