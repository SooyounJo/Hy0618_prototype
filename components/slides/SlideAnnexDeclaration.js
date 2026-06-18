const DECLARATIONS = [
  {
    no: "01",
    title: "브랜드 주권",
    desc: "AI 시대의 가장 대체 불가능한 자산은 브랜드의 정체성입니다. 디자이너의 판단과 취향, 수십년의 역사가 상용 AI만을 사용하는 순간 그들의 학습재료가 되어버립니다.",
    quote: "“엔진은 빌리되, 우리가 키워야만 합니다”"
  },
  {
    no: "02",
    title: "변형 또는 도태",
    desc: "AI는 우리가 무얼 하든 디자인 산업의 방식을 바꿉니다. 점진적으로 그 성장세를 따라가는 것이 생존의 경로입니다.",
    quote: "“변형될 것인가, 통제하며 진화할 것인가”"
  },
  {
    no: "03",
    title: "이끌거나 이끌리거나",
    desc: "이미 AI의 폭풍은 왔고 우리는 선택해야합니다. 휘말려 종속될 것인가, 방향키를 쥐고 우리 길을 개척할 것인가.",
    quote: "“끌려갈 것인가 키를 잡을 것인가”"
  },
  {
    no: "04",
    title: "사람을 높이는 혁신",
    desc: "감원을 위한 자동화가 아닌, 디자이너를 집행자에서 창작자로 격상시키며, 아이디어를 우리의 자산으로 만드는 혁신입니다.",
    quote: "“아이디어를 우리의 자산으로 만드는 혁신”"
  }
];

export default function SlideAnnexDeclaration() {
  return (
    <section className="slide figma-slide figma-annex-decl" data-ch="a" data-title="4가지의 선언">
      <div className="figma-annex-decl__bg" aria-hidden="true" />
      <div className="figma-slide__inner figma-annex-decl__content">
        <div className="figma-pill rv" style={{ "--rd": "250ms" }}>
          오늘의 핵심 • THE POINT
        </div>

        <h2 className="figma-annex-decl__headline rv head" style={{ "--rd": "600ms" }}>
          4가지의 선언
        </h2>

        <p className="figma-annex-decl__summary rv" style={{ "--rd": "1000ms" }}>
          발표 내용은 단순한 기술의 도입이 아닌 브랜드와 사람에 관한 선언입니다.
        </p>

        <div className="figma-annex-decl__cards">
          {DECLARATIONS.map((item, index) => (
            <article key={item.no} className="figma-annex-decl__card rv" style={{ "--rd": `${1400 + index * 150}ms` }}>
              <span className="figma-annex-decl__card-no">{item.no}</span>
              <h3 className="figma-annex-decl__card-title">{item.title}</h3>
              <p className="figma-annex-decl__card-desc">{item.desc}</p>
              <p className="figma-annex-decl__card-quote">{item.quote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
