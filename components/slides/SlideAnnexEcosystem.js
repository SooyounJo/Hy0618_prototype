export default function SlideAnnexEcosystem() {
  return (
    <section className="slide figma-slide figma-annex-eco" data-ch="a" data-title="생태계 소유">
      <div className="figma-annex-eco__bg" aria-hidden="true" />
      <div className="figma-slide__inner figma-annex-eco__content">
        <div className="figma-pill rv" style={{ "--rd": "250ms" }}>
          보조 인터랙션 · 흐름을 되돌리다
        </div>

        <h2 className="figma-annex-eco__headline rv head" style={{ "--rd": "600ms" }}>
          엔진보다, 엔진이 꽂히는 <strong>생태계</strong>를 소유합니다
        </h2>

        <p className="figma-annex-eco__summary rv" style={{ "--rd": "1000ms" }}>
          지켜야 할 것은 엔진이 연결되는 <strong>워크플로우와 그 안에 축적되는 브랜드 판단</strong>입니다. 더 좋은 엔진이 나오면 엔진만 바꾸면 됩니다.
        </p>

        <div className="figma-annex-eco__strategy rv" style={{ "--rd": "1400ms" }}>
          <div className="figma-annex-eco__strat-card">
            <h3>자동차 업계의 같은 전략</h3>
            <p>
              모듈러 플랫폼 안에 내연기관 · 하이브리드 · 전기 파워트레인을 넣는 전략과 같습니다. 플랫폼(아키텍처)이 오래가는 전략 자산이고, 파워트레인은 업그레이드되는 부품입니다. <strong>엔진(LLM)은 파워트레인, 디자인 AI 생태계는 플랫폼</strong>입니다.
            </p>
          </div>
        </div>

        <div className="figma-annex-eco__defense rv" style={{ "--rd": "1800ms" }}>
          <div className="figma-annex-eco__def-box">
            <span className="figma-annex-eco__def-label">예상 공격</span>
            <p>“엔진이 공짜로 좋아진다면, 기다렸다 쓰면 되지 왜 지금 만들어야 하는가?”</p>
          </div>
          <div className="figma-annex-eco__def-box is-answer">
            <span className="figma-annex-eco__def-label">방어</span>
            <p>
              엔진은 기다리면 좋아집니다. 하지만 <strong>워크플로우와 브랜드 판단은 기다린다고 생기지 않습니다.</strong> 지금 만들지 않으면, 더 좋은 엔진이 나와도 우리는 여전히 <strong>툴을 사용하는 쪽</strong>에 머물게 됩니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
