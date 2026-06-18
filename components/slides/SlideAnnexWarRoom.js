const FUNCTIONS = [
  { id: "pm", label: "PM" },
  { id: "quality", label: "QUALITY" },
  { id: "hq", label: "REGIONAL HQ" },
  { id: "procurement", label: "PROCUREMENT" },
  { id: "design", label: "DESIGN" },
  { id: "engineering", label: "ENGINEERING" },
  { id: "product", label: "PRODUCT" },
  { id: "manufacturing", label: "MANUFACTURING" }
];

export default function SlideAnnexWarRoom() {
  return (
    <section className="slide figma-slide figma-annex-warroom" data-ch="a" data-title="WAR ROOM">
      <div className="figma-annex-warroom__bg" aria-hidden="true" />
      <div className="figma-slide__inner figma-annex-warroom__content">
        <div className="figma-pill rv" style={{ "--rd": "250ms" }}>
          현장 기록 01 • FIELD EXPERIENCE
        </div>

        <h2 className="figma-annex-warroom__headline rv head" style={{ "--rd": "600ms" }}>
          크로스티켓에는 이미 실물이 있습니다. <strong>WAR ROOM</strong>
        </h2>

        <p className="figma-annex-warroom__summary rv" style={{ "--rd": "1000ms" }}>
          앞 장의 ‘짧은 패스’는 은유가 아니라 운영 중인 협업체의 이름입니다. 여덟 개 기능이 하나의 원탁에 동시 착석해 <br />
          <strong>“다음에 어떤 차를 개발해야 하는가”</strong>를 가장 이른 단계에서 함께 묻습니다. 디자인은 그 질문에 가장 먼저 형상을 공급하는 자리에 있습니다.
        </p>

        <div className="figma-annex-warroom__main">
          <div className="figma-annex-warroom__left">
            <div className="figma-annex-warroom__diagram rv" style={{ "--rd": "1400ms" }}>
              <div className="figma-annex-warroom__table-circle">
                <span className="figma-annex-warroom__table-label">WAR ROOM</span>
              </div>
              {FUNCTIONS.map((func, index) => (
                <div
                  key={func.id}
                  className={`figma-annex-warroom__seat is-${func.id}`}
                  style={{ "--idx": index }}
                >
                  <div className="figma-annex-warroom__seat-inner">{func.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="figma-annex-warroom__right">
            <div className="figma-annex-warroom__qna rv" style={{ "--rd": "1800ms" }}>
              <div className="figma-annex-warroom__q">
                <span className="figma-annex-warroom__bullet" />
                <span className="figma-annex-warroom__q-label">묻는 질문</span>
                <p>What kind of vehicle should we develop next?</p>
              </div>
              <div className="figma-annex-warroom__a">
                <span className="figma-annex-warroom__bullet" />
                <span className="figma-annex-warroom__a-label">디자인의 답</span>
                <p>What can design drive from the start?</p>
              </div>
            </div>

            <div className="figma-annex-warroom__tags rv" style={{ "--rd": "2200ms" }}>
              <span>8 functions</span>
              <span>동시 착석</span>
              <span>선행 단계 합의</span>
            </div>

            <div className="figma-annex-warroom__footnote rv" style={{ "--rd": "2500ms" }}>
              <span className="figma-annex-warroom__fn-label">LOONSHOTS 주석</span>
              <p>
                Bahcall이라면 이 원을 dynamic equilibrium이라 부를 것입니다. 루온샷 그룹(디자인 AI)과 프랜차이즈 그룹(설계•구매품질생산)을 분리하되, 둘이 만나는 접촉면을 우연이 아니라 구조로 설계한 것. 1940년 Vannevar Bush의 OSRD가 했던 일과 같습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
