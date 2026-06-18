export default function SlideAnnexGovernance() {
  return (
    <section className="slide figma-slide figma-annex-gov" data-ch="a" data-title="거버넌스">
      <div className="figma-annex-gov__bg" aria-hidden="true" />
      <div className="figma-slide__inner figma-annex-gov__content">
        <div className="figma-pill rv" style={{ "--rd": "250ms" }}>
          자동 품질 향상 · 거버넌스
        </div>

        <h2 className="figma-annex-gov__headline rv head" style={{ "--rd": "600ms" }}>
          받침대가 견고하면, <strong>연장이 좋아질수록</strong><br />결과도 함께 좋아집니다
        </h2>

        <div className="figma-annex-gov__grid">
          <div className="figma-annex-gov__card rv" style={{ "--rd": "1100ms" }}>
            <h3>받침대와 연장</h3>
            <p>
              워크플로우는 <strong>받침대</strong>, 엔진은 <strong>연장</strong>입니다. 받침대가 견고하면 더 좋은 연장을 끼우는 것만으로 결과가 좋아집니다. 워크플로우를 구축할 적기는 <strong>연장이 빠르게 좋아지고있는 바로 지금</strong>입니다.
            </p>
          </div>
          <div className="figma-annex-gov__card rv" style={{ "--rd": "1400ms" }}>
            <h3>거버넌스 · 데이터 주권</h3>
            <p>
              엔진 교체의 자유는 넓게 열되, <strong>검증 · 승인된 오픈소스, 학습 비사용 보장 API, 공식 사내 배포</strong>로만 안착됩니다. 부품 호몰로게이션과 같습니다. 아무 엔진이나 설치하지 않습니다.
            </p>
          </div>
        </div>

        <div className="figma-annex-gov__defense rv" style={{ "--rd": "1800ms" }}>
          <div className="figma-annex-gov__def-box">
            <span className="figma-annex-gov__def-label">예상 공격</span>
            <p>“승인 절차가 곧 족쇄다”</p>
          </div>
          <div className="figma-annex-gov__def-box is-answer">
            <span className="figma-annex-gov__def-label">방어</span>
            <p>
              거버넌스는 제약이 아니라 빠른 차선으로 설계합니다. 사전 검증된 기준 위에서 빠르게 통과하는 패스트 트랙 - 족쇄가 아니라 고속도로입니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
