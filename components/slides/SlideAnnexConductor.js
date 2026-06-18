const COMPARISON = [
  {
    label: "역할",
    before: "유일한 실행자, 모든 것을 직접 실행",
    after: "지휘자, 에이전트 조합을 설계, 지휘"
  },
  {
    label: "탐색",
    before: "한 번에 한선, 직렬",
    after: "수백 방향을 병렬 탐색"
  },
  {
    label: "판단",
    before: "머릿속에 갇혀 사라짐",
    after: "기록되어 자신화"
  },
  {
    label: "창의성",
    before: "손과 눈만이 단련",
    after: "방대한 선택지를 브랜드 의도로 필터링, 조화"
  }
];

export default function SlideAnnexConductor() {
  return (
    <section className="slide figma-slide figma-annex-conductor" data-ch="a" data-title="연주자에서 지휘자로">
      <div className="figma-annex-conductor__bg" aria-hidden="true" />
      <div className="figma-slide__inner figma-annex-conductor__content">
        <div className="figma-pill rv" style={{ "--rd": "250ms" }}>
          관계 명시
        </div>

        <h2 className="figma-annex-conductor__headline rv head" style={{ "--rd": "600ms" }}>
          연주자에서 <strong>’지휘자’로</strong>
        </h2>

        <div className="figma-annex-conductor__comparison">
          <div className="figma-annex-conductor__side rv" style={{ "--rd": "1200ms" }}>
            <h3 className="figma-annex-conductor__side-title">전환 전</h3>
            <div className="figma-annex-conductor__table">
              {COMPARISON.map((item) => (
                <div key={item.label} className="figma-annex-conductor__row">
                  <span className="figma-annex-conductor__label">{item.label}</span>
                  <p className="figma-annex-conductor__value">{item.before}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="figma-annex-conductor__arrow rv" style={{ "--rd": "1500ms" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="figma-annex-conductor__side is-after rv" style={{ "--rd": "1800ms" }}>
            <h3 className="figma-annex-conductor__side-title">전환 후</h3>
            <div className="figma-annex-conductor__table">
              {COMPARISON.map((item) => (
                <div key={item.label} className="figma-annex-conductor__row">
                  <span className="figma-annex-conductor__label">{item.label}</span>
                  <p className="figma-annex-conductor__value">{item.after}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
