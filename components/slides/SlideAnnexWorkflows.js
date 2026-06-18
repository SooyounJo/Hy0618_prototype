const WORKFLOWS = [
  {
    en: "GENERATE IDEA",
    title: "Key Image • Key Concept",
    desc: "권역 • 상품별 차량 디자인의 빠른 생성, 신속한 의사결정의 출발점"
  },
  {
    en: "GENERATE OVERVIEW",
    title: "Line-up Overview",
    desc: "라인업 단위 제안. 권역별 상품 제안으로 확장 가능"
  },
  {
    en: "GENERATE 3D DATA",
    title: "Multi-View • Quick 3D",
    desc: "초기 패키지 레이아웃의 데이터 기반 확인. 공력 • 정합성 조기 검토"
  },
  {
    en: "GENERATE SCENERIO",
    title: "AI-Driven Scenerio",
    desc: "AVP 등 신기술 적용 시나리오 영상. 권역 환경 기반 상품성 조기 점검"
  }
];

export default function SlideAnnexWorkflows() {
  return (
    <section className="slide figma-slide figma-annex-workflows" data-ch="a" data-title="내재화 워크플로우">
      <div className="figma-annex-workflows__bg" aria-hidden="true" />
      <div className="figma-slide__inner figma-annex-workflows__content">
        <div className="figma-pill rv" style={{ "--rd": "200ms" }}>
          현장 기록 02 • FIELD EVIDENCE
        </div>

        <h2 className="figma-annex-workflows__headline rv head" style={{ "--rd": "600ms" }}>
          ‘무한 셔터’의 실물, <strong>네 개의 내재화 워크플로우</strong>
        </h2>

        <p className="figma-annex-workflows__summary rv" style={{ "--rd": "1000ms" }}>
          ComfyUI • Copilot • Gemini의 인트라넷 내재화 위에서 LoRA 학습. Key Image 생성, 3D 자동생성, <br />
          영상 제작이 스터디 단계를 마쳤습니다. 탐색은 이미 도구가 아니라 <strong>프로세스 초안</strong>으로 존재합니다.
        </p>

        <div className="figma-annex-workflows__grid">
          {WORKFLOWS.map((wf, index) => (
            <article key={wf.en} className="figma-annex-workflows__card rv" style={{ "--rd": `${1400 + index * 150}ms` }}>
              <span className="figma-annex-workflows__card-en">{wf.en}</span>
              <h3 className="figma-annex-workflows__card-title">{wf.title}</h3>
              <p className="figma-annex-workflows__card-desc">{wf.desc}</p>
            </article>
          ))}
        </div>

        <div className="figma-annex-workflows__comparison-grid rv" style={{ "--rd": "2200ms" }}>
          <div className="figma-annex-workflows__comp-panel is-asis">
            <div className="figma-annex-workflows__comp-header">
              <strong>As-is</strong>
              <span>추상적 소통 • 순차적 검토 • 높은 불확실성</span>
            </div>
            <div className="figma-annex-workflows__tags">
              <span>Tangibility 실체화</span>
              <span>Certainty 확실성</span>
              <span>Integration-Connection 통합과 연결</span>
            </div>
          </div>

          <div className="figma-annex-workflows__comp-panel is-tobe">
            <div className="figma-annex-workflows__comp-header">
              <strong>To-be</strong>
              <span>실제적 소통 • 양방향 검토 • 선행 단계 사전검증</span>
            </div>
          </div>
        </div>

        <div className="figma-annex-workflows__footnote rv" style={{ "--rd": "2800ms" }}>
          <span className="figma-annex-workflows__fn-label">LOONSHOTS 주석</span>
          <p>
            루온샷은 기술이 부족해서 죽지 않습니다. 아티스트와 솔저 사이의 <strong>전달(transfer)</strong>에서 죽습니다. <br />
            고해상도 이미지, 3D, 영상은 곧 전달 매체의 혁신입니다. 텍스트와 구두 설명이 잃어버렸던 것을 형상이 보존합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
