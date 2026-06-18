import Grainient from "../Grainient";

export default function SlideClosing() {
  return (
    <section className="slide figma-slide figma-closing" data-ch="5" data-title="마치며">
      <div className="figma-closing__bg" aria-hidden="true">
        <Grainient
          color1="#4d6dff"
          color2="#002c5f"
          color3="#92a9ed"
          timeSpeed={0.4}
          colorBalance={-0.1}
          warpStrength={2.4}
          warpFrequency={4}
          warpSpeed={1.6}
          warpAmplitude={85}
          blendAngle={45}
          blendSoftness={0.1}
          rotationAmount={200}
          noiseScale={1.2}
          grainAmount={0.05}
          grainScale={1.5}
          grainAnimated={false}
          contrast={1.6}
          gamma={0.8}
          saturation={1.8}
          centerX={0}
          centerY={0}
          zoom={1}
          resolutionScale={1.0}
        />
      </div>

      <div className="figma-slide__inner figma-closing__content">
        <div className="figma-closing__header rv head" style={{ "--rd": "300ms" }}>
          <p className="figma-closing__project">PROJECT LOONSHOT</p>
          <h2 className="figma-closing__title">
            118년 전, 포드는 컨베이어 벨트로 세상을 바꿨습니다.<br />
            우리는 지금, 같은 크기의 변화를 <strong>반대 방향</strong>으로 시작합니다.
          </h2>
        </div>

        <div className="figma-closing__main rv" style={{ "--rd": "800ms" }}>
          <p className="figma-closing__description">
            디자인 AI를 만들자는 것이 아닙니다.<br />
            현대차 디자인의 판단이 우리 안에서 계속 좋아지는 <strong>학습 루프 구조</strong>를 만들자는 것입니다.<br />
            거창한 선언은 필요 없습니다. 작게 시작할 첫 파일럿이면 충분합니다.
          </p>
          <p className="figma-closing__highlight">
            다만 그 구조를 만들려면 <strong>최고 경영층의 승인</strong>이 필요합니다.
          </p>
        </div>

        <div className="figma-closing__action rv soft" style={{ "--rd": "1500ms" }}>
          <div className="figma-glass-panel">
            <strong>첫 시험 비행을 승인해 주십시오.</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
