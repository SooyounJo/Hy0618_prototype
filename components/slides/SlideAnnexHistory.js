const STATS = [
  { label: "신흥 OEM 신차 모델 세대 교체 주기", value: "2-4년" },
  { label: "레거시 OEM모델 세대 교체 주기", value: "4-5년" },
  { label: "신흥 OEM의 전 세계 차량 생산 점유", value: "20%" },
  { label: "신흥 OEM 플랫폼 개발 주기", sub: "레거시는 4.5년", value: "1.5년" }
];

export default function SlideAnnexHistory() {
  return (
    <section className="slide figma-slide figma-annex-history" data-ch="a" data-title="가치 흐름의 방향">
      <div className="figma-annex-history__bg" aria-hidden="true" />
      <div className="figma-slide__inner figma-annex-history__content">
        <div className="figma-pill rv" style={{ "--rd": "250ms" }}>
          HISTORY • 1908 → 2026
        </div>

        <h2 className="figma-annex-history__headline rv head" style={{ "--rd": "600ms" }}>
          <strong>118년,</strong> 가치 흐름의 방향 불변
        </h2>

        <p className="figma-annex-history__summary rv" style={{ "--rd": "1000ms" }}>
          강철은 알루미늄과 탄소섬유로, 엔진은 전기모터로 바뀌었지만, 제조업체에서 소비자로 흐르는 가치의 단방향성은 단 한 번도 바뀌지 않았습니다.
        </p>

        <div className="figma-annex-history__timeline rv" style={{ "--rd": "1400ms" }}>
          <div className="figma-annex-history__line">
            <div className="figma-annex-history__line-inner" />
          </div>
          <div className="figma-annex-history__milestone" style={{ left: "0%" }}>
            <span className="figma-annex-history__year">1908</span>
            <div className="figma-annex-history__event">
              <strong>Ford Model T</strong>
              <p>단방향 구조의 탄생</p>
            </div>
          </div>
          <div className="figma-annex-history__milestone" style={{ left: "50%" }}>
            <span className="figma-annex-history__year">1985</span>
            <div className="figma-annex-history__event">
              <strong>Porter</strong>
              <p>단방향 밸류체인 이론화</p>
            </div>
          </div>
          <div className="figma-annex-history__milestone" style={{ left: "100%" }}>
            <span className="figma-annex-history__year">2026</span>
            <div className="figma-annex-history__event is-highlight">
              <p>처음으로 방향성을<br />바꿀 수 있는 해</p>
            </div>
          </div>
        </div>

        <div className="figma-annex-history__stats">
          {STATS.map((stat, index) => (
            <div key={stat.label} className="figma-annex-history__stat-card rv" style={{ "--rd": `${1800 + index * 150}ms` }}>
              <p className="figma-annex-history__stat-value">{stat.value}</p>
              <p className="figma-annex-history__stat-label">
                {stat.label}
                {stat.sub && <span className="figma-annex-history__stat-sub">{stat.sub}</span>}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
