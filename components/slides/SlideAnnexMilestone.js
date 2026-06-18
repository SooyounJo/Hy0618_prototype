const AS_IS = [
  { m: "M-23", label: "상품제안" },
  { m: "M-20", label: "상품제안서" },
  { m: "M-15", label: "개발착수" },
  { m: "M-9", label: "상품발의" },
  { m: "M0", label: "상품기획서" },
  { m: "M+9", label: "목표점검1차" },
  { m: "M+19", label: "목표점검2차" }
];

const TO_BE = [
  { m: "M-21", label: "담당 임명" },
  { m: "M-18", label: "워룸 킥오프", highlight: true },
  { m: "M-15", label: "목표 설정", highlight: true },
  { m: "M-10", label: "사업성 승인" },
  { m: "M0", label: "개발추진" },
  { m: "M+11", label: "마스터카 결정" },
  { m: "M+19", label: "양산 · 가격" }
];

export default function SlideAnnexMilestone() {
  return (
    <section className="slide figma-slide figma-annex-milestone" data-ch="a" data-title="마일스톤 단축">
      <div className="figma-annex-milestone__bg" aria-hidden="true" />
      <div className="figma-slide__inner figma-annex-milestone__content">
        <h2 className="figma-annex-milestone__headline rv head" style={{ "--rd": "600ms" }}>
          구조를 바꾸면 달력이 바뀝니다. <strong>선행 기획 5개월 단축</strong>
        </h2>

        <p className="figma-annex-milestone__summary rv" style={{ "--rd": "1000ms" }}>
          상품 제안에서 개발착수까지 8개월(M-23→ M-15)이 걸리던 선행 구간이, 담당 임명과 워룸 킥오프(M-18)를 앞세운 새 <br />
          마일스톤에서 3개월(M-21 → M-18 → M-15)로 압축됩니다. 도구가 아니라 마일스톤 자체를 다시 그린 결과입니다.
        </p>

        <div className="figma-annex-milestone__timeline rv" style={{ "--rd": "1400ms" }}>
          <div className="figma-annex-milestone__row is-asis">
            <span className="figma-annex-milestone__row-label">As - is</span>
            <div className="figma-annex-milestone__track">
              {AS_IS.map((item, idx) => (
                <div key={idx} className="figma-annex-milestone__point">
                  <span className="figma-annex-milestone__m">{item.m}</span>
                  <span className="figma-annex-milestone__p-label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="figma-annex-milestone__row is-tobe">
            <span className="figma-annex-milestone__row-label">To - be</span>
            <div className="figma-annex-milestone__track">
              {TO_BE.map((item, idx) => (
                <div key={idx} className={`figma-annex-milestone__point ${item.highlight ? 'is-highlight' : ''}`}>
                  <span className="figma-annex-milestone__m">{item.m}</span>
                  <span className="figma-annex-milestone__p-label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="figma-annex-milestone__reduction">
            선행 기획 단계 5개월 단축
          </div>
        </div>

        <div className="figma-annex-milestone__footnote rv" style={{ "--rd": "2000ms" }}>
          <span className="figma-annex-milestone__fn-label">LOONSHOTS 주석</span>
          <p>
            이것이 <strong>S형 루온샷의 정량 증거</strong>입니다. P형(제품혁신)은 눈에 보이지만, S형(전략 · 구조 혁신)은 달력 위에서만 보입니다. <br />
            IBM은 PC라는 P형을 마스터하고도 S형에서 무너졌습니다. Payoff가 약속이라면, 이 달력은 측정입니다.
          </p>
        </div>
      </div>
    </section>
  );
}
