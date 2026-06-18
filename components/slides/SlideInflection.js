import CountUp from "../CountUp";

const LEFT_DELAY = "1800ms";
const RIGHT_DELAY = "2100ms";

export default function SlideInflection() {
  return (
    <section 
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
          <article className="figma-inflection__stat rv" style={{ "--rd": LEFT_DELAY }}>
            <p className="figma-inflection__stat-value">
              <CountUp
                from={0}
                to={36}
                duration={3}
                delay={0.4}
                className="figma-inflection__stat-number"
                format={(latest) => {
                  const rounded = Math.round(latest);
                  const left = Math.floor(rounded / 10);
                  const right = rounded % 10;
                  return `${left}-${right}개월`;
                }}
              />
            </p>
            <p className="figma-inflection__stat-desc">
              디자인 정체성은 AI 시대에 가장 대체 불가능한 자산입니다.
            </p>
          </article>

          <article className="figma-inflection__stat rv" style={{ "--rd": RIGHT_DELAY }}>
            <p className="figma-inflection__stat-value">양방향</p>
            <p className="figma-inflection__stat-desc">
              수십 년 쌓인 디자이너의 판단을 외부 모델에 내주지 않습니다.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
