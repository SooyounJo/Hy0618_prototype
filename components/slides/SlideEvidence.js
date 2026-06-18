const CELLS = [
  {
    tag: "Validate",
    title: "War Room",
    body: (
      <>
        8개 기능이 한 테이블에서 가장 이른 단계에 <strong>조기 합의</strong>하는 협업 구조
      </>
    )
  },
  {
    tag: "Generate · Assetize",
    title: "Render Smith",
    body: (
      <ul>
        <li>내부 워크플로우 내재화</li>
        <li>
          <strong>4K 15장 / 10분</strong> / 100% 자체 개발
        </li>
      </ul>
    )
  },
  {
    tag: "Result",
    title: "선행 5개월 단축",
    body: (
      <ul>
        <li>도구가 아니라 마일스톤을 다시 그린 결과</li>
        <li>달력으로 보이는 구조 혁신</li>
      </ul>
    )
  }
];

export default function SlideEvidence() {
  return (
    <section className="slide figma-slide figma-evidence figma-silk" data-ch="4" data-title="이미 작은 증거">
      <div className="figma-silk__bg" aria-hidden="true">
        <div className="figma-silk__glow figma-silk__glow--a" />
        <div className="figma-silk__glow figma-silk__glow--b" />
      </div>

      <div className="figma-slide__inner figma-evidence__content">
        <div className="figma-pill rv" style={{ "--rd": "250ms" }}>
          Early Evidence
        </div>

        <h2 className="figma-evidence__headline rv head" style={{ "--rd": "600ms" }}>
          “루프는 개념이 아닌 운영이다.”
        </h2>

        <div className="figma-evidence__cards rv" style={{ "--rd": "1200ms" }}>
          {CELLS.map((cell) => (
            <article key={cell.title} className="figma-glass-card figma-glass-card--compact">
              <div className="figma-glass-card__thumb" aria-hidden />
              <div className="figma-glass-card__body">
                <span className="figma-glass-card__code">{cell.tag}</span>
                <h3 className="figma-glass-card__title">{cell.title}</h3>
                <div className="figma-glass-card__desc">{cell.body}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
