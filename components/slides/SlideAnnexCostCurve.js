import CountUp from "../CountUp";

const STATS = [
  { label: "제품 개발 비용 대부분은 디자인 단계에서 사실상 결정", value: 70, unit: "%+" },
  { label: "단계가 뒤로 갈수록 기하급수적으로 커지는 변경 비용", value: 10, unit: "배" },
  { label: "금형 단계의 변경 비용, 컨셉 단계 대비", value: 3000, unit: "배", isApprox: true }
];

export default function SlideAnnexCostCurve() {
  return (
    <section className="slide figma-slide figma-annex-cost" data-ch="a" data-title="변경 비용 곡선">
      <div className="figma-annex-cost__bg" aria-hidden="true" />
      <div className="figma-slide__inner figma-annex-cost__content">
        <div className="figma-pill rv" style={{ "--rd": "250ms" }}>
          크로스티켓 • 변경비용 곡선
        </div>

        <h2 className="figma-annex-cost__headline rv head" style={{ "--rd": "600ms" }}>
          가장 이른 단계에서, 가장 많이 검토하고,<br /><strong>가장 많이 합의합니다</strong>
        </h2>

        <div className="figma-annex-cost__main">
          <div className="figma-annex-cost__left">
            <div className="figma-annex-cost__chart-area rv" style={{ "--rd": "1200ms" }}>
              <div className="figma-annex-cost__chart-label">변경 비용</div>
              <div className="figma-annex-cost__chart-wrapper">
                <svg className="figma-annex-cost__curve" viewBox="0 0 500 200">
                  <path
                    className="figma-annex-cost__curve-path"
                    d="M10,190 C150,190 350,170 490,10"
                    fill="none"
                    stroke="var(--figma-navy)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <circle className="figma-annex-cost__point figma-annex-cost__point--1" cx="40" cy="189" r="5" />
                  <circle className="figma-annex-cost__point figma-annex-cost__point--2" cx="250" cy="160" r="5" />
                  <circle className="figma-annex-cost__point figma-annex-cost__point--3" cx="460" cy="45" r="5" />
                </svg>
                <div className="figma-annex-cost__x-labels">
                  <span className="is-active">컨셉</span>
                  <span>설계 · 개발</span>
                  <span>금형</span>
                </div>
              </div>
            </div>

            <div className="figma-annex-cost__stats">
              {STATS.map((stat, index) => (
                <div key={stat.label} className="figma-annex-cost__stat-card rv" style={{ "--rd": `${1800 + index * 150}ms` }}>
                  <p className="figma-annex-cost__stat-value">
                    <CountUp
                      from={0}
                      to={stat.value}
                      duration={1.6}
                      delay={0.4 + index * 0.2}
                      className="figma-annex-cost__stat-number"
                      separator=","
                    />
                    <span>{stat.isApprox ? "수천" : stat.unit}</span>
                  </p>
                  <p className="figma-annex-cost__stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="figma-annex-cost__info rv" style={{ "--rd": "1500ms" }}>
            <div className="figma-annex-cost__info-item">
              <strong>Why</strong>
              <p>도면 위에서 벽 하나를 옮기는 데 지우개면 충분합니다. 콘크리트를 붓기 전, AI는 수백개의 평면도를 빠르게 검토하고 비교하는 역할을 합니다.</p>
            </div>
            <div className="figma-annex-cost__info-item">
              <strong>How</strong>
              <p>재무, 상품, PM, 구매, 품질, 설계 등이 짧은 패스를 빠르게 주고 받으며 공간을 읽고, 디자인은 가장 일찍 신호를 받고 볼을 배급하는 플레이 메이커가 됩니다.</p>
            </div>
            <div className="figma-annex-cost__info-item">
              <strong>OEM</strong>
              <p>우리 구조에서는 엔지니어링, 구매, 품질의 제약이 초기 탐색 입력값으로 들어옵니다. 제약을 보다 일찍 받아, 재작업 비용을 줄입니다.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
