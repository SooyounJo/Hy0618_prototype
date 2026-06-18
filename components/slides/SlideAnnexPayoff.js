const PAYOFFS = [
  { title: "속도", desc: "개발 사이클 단축" },
  { title: "비용", desc: "변경비용의 조기 절감" },
  { title: "품질", desc: "반복 탐색을 통한 품질 상승" },
  { title: "유산", desc: "브랜드 판단의 축적" },
  { title: "주권", desc: "데이터의 내부 축적과 보호" },
  { title: "미래 대응력", desc: "엔진 교체 가능 구조" },
  { title: "CMF", desc: "의사결정의 초기화" },
  { title: "증명", desc: "선언이 아닌 파일럿으로" }
];

export default function SlideAnnexPayoff() {
  return (
    <section className="slide figma-slide figma-annex-payoff" data-ch="a" data-title="성과로 착지">
      <div className="figma-annex-payoff__bg" aria-hidden="true" />
      <div className="figma-slide__inner figma-annex-payoff__content">
        <div className="figma-pill rv" style={{ "--rd": "250ms" }}>
          THE PAYOFF • 성과로 착지
        </div>

        <h2 className="figma-annex-payoff__headline rv head" style={{ "--rd": "600ms" }}>
          우리는 성과를 제안합니다
        </h2>

        <p className="figma-annex-payoff__summary rv" style={{ "--rd": "1000ms" }}>
          회사가 <strong>더 빠르고, 더 좋고, 더 싸게</strong> 자동차를 개발하게 만드는 성과입니다.
        </p>

        <div className="figma-annex-payoff__grid">
          {PAYOFFS.map((item, index) => (
            <div key={item.title} className="figma-annex-payoff__card rv" style={{ "--rd": `${1400 + index * 100}ms` }}>
              <h3 className="figma-annex-payoff__card-title">{item.title}</h3>
              <p className="figma-annex-payoff__card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
