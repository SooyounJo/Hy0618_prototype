import { useState } from "react";

export default function SlideCapital() {
  const [scrollStep, setScrollStep] = useState(0);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  const toggleStep = (e) => {
    if (scrollStep === 0) {
      setScrollStep(1);
      e.stopPropagation();
    }
  };

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section 
      className={`slide figma-slide figma-capital ${scrollStep === 1 ? 'is-step-2' : ''}`} 
      data-ch="2" 
      data-title="좋아지는 회사 · 두 자본"
      onClick={toggleStep}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{ cursor: 'none' }}
    >
      {isHovering && scrollStep === 0 && mousePos.x > 0 && (
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
      <div className="figma-capital__bg" aria-hidden="true">
        <div className="figma-capital__glow figma-capital__glow--a" />
        <div className="figma-capital__glow figma-capital__glow--b" />
      </div>

      <div className="figma-slide__inner figma-capital__content">
        <div className="figma-pill rv" style={{ "--rd": "250ms" }}>
          나델라 · 좋아지는 회사
        </div>

        <h2 className="figma-capital__headline rv head" style={{ "--rd": "600ms" }}>
          좋은 모델이 아닌 <strong>‘좋아지는 회사’</strong>
        </h2>

        <p className="figma-capital__summary rv" style={{ "--rd": "1000ms" }}>
          좋은 모델 선택은 일시적이므로, <strong>좋은 학습 루프</strong>를 만드는 것이 우선입니다.
          <br />
          현대차 디자인 경쟁력은 <strong>개별결과물을 넘어 쌓이는 구조</strong>에서 나오게 됩니다.
        </p>

        <div className="figma-capital__main-area">
          <div className="figma-capital__diagram-wrapper">
            <div className="figma-capital__cards">
              <article className="figma-capital__card rv" style={{ "--rd": "1500ms" }}>
                <h3 className="figma-capital__card-title">인적 자본</h3>
                <p className="figma-capital__card-desc">디자이너의 안목과 수십년의 브랜드 역사</p>
                <img
                  src="/images/figma/icon-human.svg"
                  alt=""
                  width={49}
                  height={49}
                  className="figma-capital__card-icon"
                  aria-hidden
                />
              </article>

              <span className="figma-capital__times rv" style={{ "--rd": "1900ms" }} aria-hidden="true">
                X
              </span>

              <article className="figma-capital__card rv" style={{ "--rd": "1500ms" }}>
                <h3 className="figma-capital__card-title">토큰 자본</h3>
                <p className="figma-capital__card-desc">
                  브랜드 자료로 학습된 AI를 소유하고, 그를 활용하는 워크플로우
                </p>
                <img
                  src="/images/figma/icon-token.svg"
                  alt=""
                  width={40}
                  height={40}
                  className="figma-capital__card-icon"
                  aria-hidden
                />
              </article>
            </div>

            <div className="figma-capital__arrow rv soft" style={{ "--rd": "2300ms" }}>
              <img src="/images/figma/arrow-down.svg" alt="" width={87} height={71} aria-hidden />
            </div>
          </div>

          <div className="figma-capital__footnote rv soft" style={{ "--rd": "2800ms" }}>
            <p className="figma-capital__footnote-small">
              토큰 자본이 커질수록 인적 자본이 밀리는 것이 아닌, 디자이너가 효율적인 운전석에 올라가게 됩니다.
            </p>
            <p>이 학습루프의 이름이 <span className="figma-capital__closed-loop">Closed Loop</span>입니다.</p>
          </div>

          <div className="figma-capital__solution-text">
            이것이 현대차 디자인의 진짜 주권입니다
          </div>
        </div>
      </div>
    </section>
  );
}
