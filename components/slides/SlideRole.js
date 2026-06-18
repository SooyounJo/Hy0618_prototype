const LEFT_POINTS = [
  "30%의 판단 · 의도 · 방향에 집중",
  "70%의 반복 실행은 역할의 재구성",
  "AI시대에 더 중요해지는 것은 더 깊어진 전문성"
];

const RIGHT_POINTS = [
  "생성 · 선택 · 검증 · 자산화 브랜드 학습 루프",
  "인프라(DE센터 · ICT 본부)와 분업",
  "워룸 안의 실사용과 성과를 책임"
];

export default function SlideRole() {
  return (
    <section className="slide figma-slide figma-role figma-silk" data-ch="4" data-title="우리의 역할">
      <div className="figma-silk__bg" aria-hidden="true">
        <div className="figma-silk__glow figma-silk__glow--a" />
        <div className="figma-silk__glow figma-silk__glow--b" />
      </div>

      <div className="figma-slide__inner figma-role__content">
        <div className="figma-pill rv" style={{ "--rd": "250ms" }}>
          우리의 역할 · The Role
        </div>

        <h2 className="figma-role__headline rv head" style={{ "--rd": "600ms" }}>
          <span>디자이너는 </span>
          <strong>지휘자</strong>
          <span>,</span>
          <br />
          <span>디자인 담당은 </span>
          <strong>학습 루프 설계자</strong>
        </h2>

        <div className="figma-role__ratio rv" style={{ "--rd": "1100ms" }}>
          <div className="figma-role__ratio-track">
            <span className="figma-role__ratio-fill" />
          </div>
          <div className="figma-role__ratio-labels">
            <span>
              <strong>30%</strong> 판단 · 의도 · 방향, 디자이너가 집중
            </span>
            <span>
              <strong>70%</strong> 실행 노동, 시스템이 흡수
            </span>
          </div>
        </div>

        <div className="figma-role__panels rv" style={{ "--rd": "1600ms" }}>
          <div className="figma-role__panel-col">
            <div className="figma-pill figma-pill--sm">디자이너 = 지휘자</div>
            <div className="figma-glass-panel">
              <ul>
                {LEFT_POINTS.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="figma-role__panel-col">
            <div className="figma-pill figma-pill--sm">디자인 담당 = 학습 루프 설계자</div>
            <div className="figma-glass-panel">
              <ul>
                {RIGHT_POINTS.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
