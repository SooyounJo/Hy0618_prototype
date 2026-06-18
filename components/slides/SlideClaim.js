import { useState, useEffect, useRef } from "react";

const CARDS = [
  {
    code: "01_오해 판단",
    title: "자체 파운데이션 모델을 제작하는가?",
    back: "성능 경쟁이 아닙니다. 범용 엔진은 빌리고, 생태계와 판단을 소유합니다."
  },
  {
    code: "02_오해 판단",
    title: "디자인이 IT 인프라를 소유하는가?",
    back: "인프라는 DE센터와 ICT본부. 디자인은 워크플로우 연구와 사용을 맡습니다."
  },
  {
    code: "03_오해 판단",
    title: "AI로 디자이너를 줄이는가?",
    back: "반복 업무를 덜어내고 본질적인 디자인 판단에 집중하게 합니다."
  },
  {
    code: "04_오해 판단",
    title: "거대한 투자를 한번에 하는가?",
    back: "경량 파일럿으로 검증 후 단계적으로 확산합니다."
  }
];

export default function SlideClaim() {
  const [flipped, setFlipped] = useState(new Array(CARDS.length).fill(false));
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef(null);

  const toggleFlip = (index) => {
    const next = [...flipped];
    next[index] = !next[index];
    setFlipped(next);
  };

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFlipped(new Array(CARDS.length).fill(false));
        }
      },
      { threshold: 0.5 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="slide figma-slide figma-claim figma-silk" 
      data-ch="3" 
      data-title="디자인 판단이 쌓이는 구조"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{ cursor: 'none' }}
    >
      {isHovering && mousePos.x > 0 && (
        <div 
          className="figma-risk__custom-cursor"
          style={{ 
            left: mousePos.x, 
            top: mousePos.y
          }}
        >
          CLICK
        </div>
      )}
      <div className="figma-silk__bg" aria-hidden="true">
        <div className="figma-silk__glow figma-silk__glow--a" />
        <div className="figma-silk__glow figma-silk__glow--b" />
      </div>

      <div className="figma-slide__inner figma-claim__content">
        <div className="figma-pill rv" style={{ "--rd": "250ms" }}>
          관계 명시
        </div>

        <h2 className="figma-claim__headline rv head" style={{ "--rd": "600ms" }}>
          <span className="figma-claim__quote-open">“</span>
          <span className="figma-claim__headline-muted">디자인 판단이 </span>
          <span className="figma-claim__headline-accent">쌓이는 구조를 만든다.</span>
          <span className="figma-claim__quote-close">“</span>
        </h2>

        <p className="figma-claim__lede rv" style={{ "--rd": "1000ms" }}>
          우리가 주장하는 것은 단 하나, 디자인 판단이 우리안에 쌓이는 구조를 만드는 것입니다.
        </p>

        <div className="figma-claim__cards rv" style={{ "--rd": "1500ms" }}>
          {CARDS.map((card, index) => (
            <article 
              key={card.code + card.title} 
              className={`figma-glass-card ${flipped[index] ? 'is-flipped' : ''}`}
              onClick={() => toggleFlip(index)}
            >
              <div className="figma-glass-card__inner">
                <div className="figma-glass-card__front">
                  <div className="figma-glass-card__thumb" aria-hidden />
                  <div className="figma-glass-card__body">
                    <span className="figma-glass-card__code">{card.code}</span>
                    <h3 className="figma-glass-card__title">{card.title}</h3>
                    <p className="figma-glass-card__link">→ 사실확인</p>
                  </div>
                </div>
                <div className="figma-glass-card__back">
                  <div className="figma-glass-card__body">
                    <span className="figma-glass-card__code">진실</span>
                    <p className="figma-glass-card__back-text">{card.back}</p>
                    <p className="figma-glass-card__link">← 돌아가기</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
