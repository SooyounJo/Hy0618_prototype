const ROWS = [
  {
    layer: "엔진 Engine",
    def: "외부 범용 모델",
    nature: "교체 가능"
  },
  {
    layer: "판단 체계 Judgment",
    def: "우리 자료로 학습된 브랜드 판단 AI",
    nature: "영구 자산"
  },
  {
    layer: "생태계 Platform",
    def: "엔진 활용 워크플로우, 인프라",
    nature: "우리가 만드는 진짜 자산"
  }
];

export default function SlideJudgment() {
  return (
    <section className="slide figma-slide figma-judgment" data-ch="2" data-title="엔진이 아니라 판단 체계">
      <div className="figma-judgment__bg" aria-hidden="true">
        <div className="figma-judgment__glow figma-judgment__glow--top" />
        <div className="figma-judgment__glow figma-judgment__glow--bottom" />
      </div>

      <div className="figma-slide__inner figma-judgment__content">
        <div className="figma-pill figma-pill--gradient rv" style={{ "--rd": "250ms" }}>
          관계 명시
        </div>

        <h2 className="figma-judgment__headline rv head" style={{ "--rd": "600ms" }}>
          <span className="figma-judgment__headline-muted">엔진이 아닌</span>
          <span className="figma-judgment__headline-indent">판단체계를 소유합니다</span>
        </h2>

        <div className="figma-judgment__main rv" style={{ "--rd": "1200ms" }}>
          <div className="figma-judgment__table-wrap">
            <div className="figma-judgment__table">
              <div className="figma-judgment__table-head">
                <span>층위</span>
                <span>정의</span>
                <span>성격</span>
              </div>
              {ROWS.map((row) => (
                <div key={row.layer} className="figma-judgment__table-row">
                  <span className="figma-judgment__layer">{row.layer}</span>
                  <span>{row.def}</span>
                  <span>{row.nature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="figma-judgment__side">
            <article className="figma-judgment__side-card">
              <h3>상용 AI를 그대로 쓰면</h3>
              <p>‘외부 플렛폼 자산으로 축적’</p>
            </article>
            <img
              src="/images/figma/arrow-down.svg"
              alt=""
              width={111}
              height={71}
              className="figma-judgment__side-arrow"
              aria-hidden
            />
            <article className="figma-judgment__side-card">
              <h3>우리가 할 것은</h3>
              <p>
                엔진은 유지하되, <strong>워크플로우와 브랜드 DNA 유지</strong>
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
