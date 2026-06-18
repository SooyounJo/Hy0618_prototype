import { useState, useEffect, useRef } from "react";

function RouletteText({ value, delay, isActive }) {
  const [displayValue, setDisplayValue] = useState("");
  const [isDone, setIsDone] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!isActive) {
      setDisplayValue("");
      setIsDone(false);
      setHasStarted(false);
      return;
    }

    if (hasStarted) return;

    const delayMs = parseInt(delay) || 0;
    let timer;
    let startTimer;

    startTimer = setTimeout(() => {
      setHasStarted(true);
      const duration = 2000; // 2 seconds duration
      const interval = 40;
      const totalSteps = duration / interval;
      let step = 0;
      
      const getRand = () => value.split('').map(char => {
        if (/\d/.test(char)) return Math.floor(Math.random() * 10);
        if (/[가-힣]/.test(char)) return String.fromCharCode(0xAC00 + Math.floor(Math.random() * 11172));
        return char;
      }).join('');

      setDisplayValue(getRand());

      timer = setInterval(() => {
        step++;
        if (step >= totalSteps) {
          setDisplayValue(value);
          setIsDone(true);
          clearInterval(timer);
        } else {
          setDisplayValue(getRand());
        }
      }, interval);
    }, delayMs);

    return () => {
      clearTimeout(startTimer);
      clearInterval(timer);
    };
  }, [value, delay, isActive, hasStarted]);

  return <span className={isDone ? "is-settled" : "is-spinning"}>{displayValue || (isActive ? "" : value)}</span>;
}

const STATS = [
  {
    value: "3-6개월",
    desc: "디자인 정체성은 AI 시대에 가장 대체 불가능한 자산입니다.",
    delay: "1800ms",
    roulette: true
  },
  {
    value: "양방향",
    desc: "수십 년 쌓인 디자이너의 판단을 외부 모델에 내주지 않습니다.",
    delay: "2100ms"
  }
];

export default function SlideInflection() {
  const [isActive, setIsActive] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="slide figma-slide figma-inflection" 
      id="inflection"
      data-ch="1" 
      data-title="정보비용의 붕괴"
    >
      <div className="figma-slide__inner figma-inflection__content">
        <div className="figma-pill figma-pill--gradient rv" style={{ "--rd": "250ms" }}>
          오늘의 핵심 • THE POINT
        </div>

        <h2 className="figma-inflection__headline rv head" style={{ "--rd": "600ms" }}>
          <span className="figma-inflection__headline-muted">정보비용이 무너지면서,</span>
          <span>
            양방향 구조<span className="figma-inflection__headline-muted">가 가능해졌습니다</span>
          </span>
        </h2>

        <p className="figma-inflection__summary rv" style={{ "--rd": "1100ms" }}>
          ‘왜 지금인가’에서 ‘무엇을 해야하는가’를 고민해야할 때 입니다.
        </p>

        <div className="figma-inflection__stats">
          {STATS.map((stat) => (
            <article key={stat.value} className="figma-inflection__stat rv" style={{ "--rd": stat.delay }}>
              <p className="figma-inflection__stat-value">
                {stat.roulette ? (
                  <RouletteText value={stat.value} delay={stat.delay} isActive={isActive} />
                ) : (
                  stat.value
                )}
              </p>
              <p className="figma-inflection__stat-desc">{stat.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
