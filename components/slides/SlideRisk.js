import { useState, useEffect, useRef } from "react";

export default function SlideRisk() {
  const [scrollStep, setScrollStep] = useState(0);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef(null);

  const toggleStep = (e) => {
    setScrollStep(prev => prev === 0 ? 1 : 0);
    e.stopPropagation();
  };

  const handleWheel = (e) => {
    if (scrollStep === 0 && e.deltaY > 0) {
      setScrollStep(1);
      e.preventDefault();
    } else if (scrollStep === 1 && e.deltaY < 0) {
      setScrollStep(0);
      e.preventDefault();
    }
  };

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  // 슬라이드가 다시 화면에 들어올 때 항상 1단계(하단 원 + 화살표)에서 시작하도록 리셋
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setScrollStep(0);
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
      className={`slide figma-slide figma-risk ${scrollStep === 1 ? 'is-step-2' : ''}`} 
      data-ch="2" 
      data-title="진짜 리스크"
      onClick={toggleStep}
      onWheel={handleWheel}
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
          {scrollStep === 0 ? 'CLICK' : 'BACK'}
        </div>
      )}

      <div className="figma-risk__bg" aria-hidden="true">
        <div className="figma-risk__glow figma-risk__glow--a" />
        <div className="figma-risk__glow figma-risk__glow--b" />
      </div>

      <div className="figma-slide__inner figma-risk__content">
        <p className="figma-risk__eyebrow rv" style={{ "--rd": "250ms" }}>
          The Risk • 무엇을 잃게 되는가
        </p>

        <h2 className="figma-risk__headline rv head" style={{ "--rd": "600ms" }}>
          <span>리스크는 AI가 아닌,</span>
          <span>
            전문성이 외부 자산<span className="figma-risk__headline-regular">이 되는 것입니다</span>
          </span>
        </h2>

        <p className="figma-risk__summary rv" style={{ "--rd": "1000ms" }}>
          싸워야 할 대상은 경쟁사가 아닌, 자산을 공짜로 가져가는 AI 모델입니다.
        </p>

        <div className="figma-risk__main-area">
          <div className="figma-risk__diagram rv" style={{ "--rd": "1600ms" }}>
            <div className="figma-risk__node">
              <img
                src="/images/figma/risk-circle.svg"
                alt=""
                width={274}
                height={272}
                className="figma-risk__circle"
                aria-hidden
              />
              <div className="figma-risk__node-text">
                <p className="figma-risk__node-title">우리의 디자인</p>
                <p className="figma-risk__node-sub">판단, 취향, 수십년의 안목</p>
              </div>
            </div>

            <div className="figma-risk__flow">
              <p className="figma-risk__flow-label">‘전문성 도난’</p>
              <p className="figma-risk__flow-sub">외부 모델 학습의 재료</p>
              <img
                src="/images/figma/arrow-down.svg"
                alt=""
                width={66}
                height={199}
                className="figma-risk__flow-arrow"
                aria-hidden
              />
            </div>

            <div className="figma-risk__node">
              <img
                src="/images/figma/risk-circle.svg"
                alt=""
                width={274}
                height={272}
                className="figma-risk__circle"
                aria-hidden
              />
              <div className="figma-risk__node-text">
                <p className="figma-risk__node-title">외부 범용 모델</p>
                <p className="figma-risk__node-sub">누구나 사용하는 상품으로</p>
              </div>
            </div>
          </div>

          <div className="figma-risk__solution-text">
            ‘우리만의 닫힌 루프의 AI 시스템이 필요’
          </div>
        </div>
      </div>
    </section>
  );
}
