const WORKFLOWS = [
  {
    en: "DIGITALIZATION",
    title: "컬러 · 재질의 디지털화",
    desc: "CCN 코드 체계와 재질 DB. 마스터 샘플 기준의 디지털 재질 자산화."
  },
  {
    en: "EVALUATION",
    title: "디지털 컬러 품평",
    desc: "PLM CAD 데이터 기반 정합도 향상. 피지컬 모델 비용 · 기간 절감."
  },
  {
    en: "AUTOMATION",
    title: "사양서 자동화",
    desc: "이미지 포함 컬러 사양서. 해석 오류와 휴먼에러 리스크 감소."
  },
  {
    en: "PRODUCTION",
    title: "통합 콘텐츠 제작",
    desc: "디자인 데이터 그대로 실차 동일 컬러의 마케팅 콘텐츠 즉각 생성."
  }
];

export default function SlideAnnexRenderSmith() {
  return (
    <section className="slide figma-slide figma-annex-rendersmith" data-ch="a" data-title="Render Smith">
      <div className="figma-annex-rendersmith__bg" aria-hidden="true" />
      <div className="figma-slide__inner figma-annex-rendersmith__content">
        <div className="figma-pill rv" style={{ "--rd": "200ms" }}>
          현장 기록 03 • FIELD EVIDENCE
        </div>

        <h2 className="figma-annex-rendersmith__headline rv head" style={{ "--rd": "600ms" }}>
          '마스터 프린트'의 실물, <strong>RenderSmith와 하나의 데이터</strong>
        </h2>

        <p className="figma-annex-rendersmith__summary rv" style={{ "--rd": "1000ms" }}>
          언리얼 엔진 기반 웹 렌더 시스템 위에서 컬러 사양서(CPL/CCC)가 자동화되고, 디자인 데이터가 컨피규레이터를 거쳐 소비자까지 끊기지 않고 흐릅니다. 파편화된 엑셀과 수작업 사양서가 만들던 왜곡 · 휴먼에러 · 리워크의 사슬을 데이터 하나로 대체합니다.
        </p>

        <div className="figma-annex-rendersmith__grid">
          {WORKFLOWS.map((wf, index) => (
            <article key={wf.en} className="figma-annex-rendersmith__card rv" style={{ "--rd": `${1400 + index * 150}ms` }}>
              <span className="figma-annex-rendersmith__card-en">{wf.en}</span>
              <h3 className="figma-annex-rendersmith__card-title">{wf.title}</h3>
              <p className="figma-annex-rendersmith__card-desc">{wf.desc}</p>
            </article>
          ))}
        </div>

        <div className="figma-annex-rendersmith__thread rv" style={{ "--rd": "2200ms" }}>
          <div className="figma-annex-rendersmith__thread-line" />
          <div className="figma-annex-rendersmith__thread-content">
            <p className="figma-annex-rendersmith__thread-title">One Digital Thread, From Development to End-User</p>
            <p className="figma-annex-rendersmith__thread-desc">
              워룸 → 품평 → DSO → 데이터 릴리즈 → 컬러 품평을 지나 Customer · Management · R&amp;D · AVP · ICT · Marketing · Sales · Manufacturing · Service까지,
              디자이너의 최초 의도가 왜곡 없이 도달합니다.
            </p>
          </div>
        </div>

        <div className="figma-annex-rendersmith__tags rv" style={{ "--rd": "2600ms" }}>
          <span>Single Source</span>
          <span>Shift-Left</span>
          <span>Consistency</span>
        </div>

        <div className="figma-annex-rendersmith__footnote rv" style={{ "--rd": "2800ms" }}>
          <span className="figma-annex-rendersmith__fn-label">LOONSHOTS 주석</span>
          <p>
            이 실은 본편의 테제, 양방향 흐름의 인프라 버전입니다. 원문의 한 문장이 이 덱 전체의 S형 선언입니다. <br />
            “Design is not just styling, it is the collaboration infrastructure behind early alignment.”
          </p>
        </div>
      </div>
    </section>
  );
}
