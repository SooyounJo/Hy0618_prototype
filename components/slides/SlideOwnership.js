const CARDS = [
  {
    code: "01_Sovereignty",
    title: "브랜드 주권",
    desc: "디자인 정체성은 AI 시대에 가장 대체 불가능한 자산입니다.",
    delay: "1800ms"
  },
  {
    code: "02_Protection",
    title: "전문성 보호",
    desc: "수십 년 쌓인 디자이너의 판단을 외부 모델에 내주지 않습니다.",
    delay: "2100ms"
  },
  {
    code: "03_Compounding",
    title: "학습 루프 자산화",
    desc: "판단이 쓸수록 우리 안에 쌓이는 구조를 만듭니다.",
    delay: "2400ms"
  }
];

export default function SlideOwnership() {
  return (
    <section className="slide figma-slide figma-ownership" data-ch="1" data-title="오늘의 핵심 · 소유권">
      <div className="figma-ownership__bg" aria-hidden="true">
        <div className="figma-ownership__glow figma-ownership__glow--a" />
        <div className="figma-ownership__glow figma-ownership__glow--b" />
      </div>

      <div className="figma-slide__inner figma-ownership__content">
        <div className="figma-ownership__badge rv" style={{ "--rd": "250ms" }}>
          오늘의 핵심 • THE POINT
        </div>

        <h2 className="figma-ownership__headline rv head" style={{ "--rd": "600ms" }}>
          <span className="figma-ownership__quote-open">“</span>
          <span className="figma-ownership__headline-line"> AI 도입이 아닌,</span>
          <span className="figma-ownership__headline-accent">자산의 소유권이 핵심“</span>
        </h2>

        <p className="figma-ownership__summary rv" style={{ "--rd": "1100ms" }}>
          모델은 누구나 빌립니다. 진짜 질문은 현대차 디자인의 판단이 어디에 쌓이느냐입니다
          <br />
          - 우리 안인가, 아니면 외부 모델 안인가.
        </p>

        <div className="figma-ownership__cards">
          {CARDS.map((card) => (
            <article
              key={card.code}
              className="figma-ownership__card rv"
              style={{ "--rd": card.delay }}
            >
              <div className="figma-ownership__card-media" aria-hidden="true" />
              <p className="figma-ownership__card-code">{card.code}</p>
              <h3 className="figma-ownership__card-title">{card.title}</h3>
              <p className="figma-ownership__card-desc">{card.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
