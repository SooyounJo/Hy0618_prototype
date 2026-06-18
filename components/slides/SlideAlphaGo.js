import DarkVeil from "../DarkVeil";

const CARDS = [
  {
    year: "2016",
    title: "충격과 선언",
    body: "알파고의 승리 이후, “인간은 끝났다\"는 반응이 나왔다.",
    icon: "bolt"
  },
  {
    year: "2017",
    title: "스승으로 받아들이다",
    body: "기사들은 AI를 거부하지 않고 연습 상대이자 복기 도구로 삼았다.",
    icon: "book"
  },
  {
    year: "오늘",
    title: "가장 잘 쓰는 자가 정상에",
    body: "AI를 거부한 사람이 아니라, AI와 가장 깊이 복기한 사람이 앞서기 시작했다.",
    icon: "trophy"
  }
];

const LESSONS = [
  {
    no: "01",
    title: "대체가 아닌 확장",
    desc: "디자이너는 연구자에서 지휘자로 이동한다."
  },
  {
    no: "02",
    title: "승부는 사용 여부가 아닌 학습 루프",
    desc: "모델이 아니라 학습 루프가 경쟁력이다."
  },
  {
    no: "03",
    title: "기보와 복기가 곧 경쟁력",
    desc: "개인의 감각은 데이터가 되고, 데이터는 전략이 된다."
  }
];

export default function SlideAlphaGo() {
  return (
    <section className="slide figma-slide figma-alphago" data-ch="5" data-title="알파고의 교훈">
      <div className="figma-alphago__bg" aria-hidden="true">
        <DarkVeil
          color1="#000000"
          color2="#4b0082"
          color3="#0000ff"
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.8}
          scanlineFrequency={3.5}
          warpAmount={0.3}
          resolutionScale={1.0}
          centerY={-0.1}
        />
      </div>
      
      <div className="figma-slide__inner figma-alphago__content">
        <div className="figma-pill rv" style={{ "--rd": "200ms" }}>
          Why · 왜 지금?
        </div>

        <h2 className="figma-alphago__headline rv head" style={{ "--rd": "600ms" }}>
          2016년, 알파고 이후가 말해준 것.<br />
          AI는 사람을 대체한 게 아니라, <strong>사람의 기준을 바꿨다.</strong>
        </h2>

        <div className="figma-alphago__intro rv" style={{ "--rd": "900ms" }}>
          <p>2016년 알파고는 이세돌을 이겼고, 많은 사람들은 "바둑은 끝났다"고 말했다.</p>
          <p>하지만 바둑계는 무너지지 않았다. 오히려 더 빠르게 진화했다.</p>
        </div>

        <div className="figma-alphago__cards rv" style={{ "--rd": "1200ms" }}>
          {CARDS.map((card) => (
            <article key={card.title} className="figma-glass-card">
              <div className="figma-alphago__card-header">
                <div className="figma-alphago__card-year">{card.year}</div>
                <div className={`figma-alphago__card-icon figma-alphago__card-icon--${card.icon}`} />
              </div>
              <div className="figma-glass-card__body">
                <h3 className="figma-glass-card__title">{card.title}</h3>
                <p className="figma-glass-card__desc">{card.body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="figma-alphago__lessons rv" style={{ "--rd": "1800ms" }}>
          {LESSONS.map((lesson) => (
            <div key={lesson.no} className="figma-glass-panel figma-alphago__lesson">
              <span className="figma-alphago__lesson-no">LESSON {lesson.no}</span>
              <h4 className="figma-alphago__lesson-title">{lesson.title}</h4>
              <p className="figma-alphago__lesson-desc">→ {lesson.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
