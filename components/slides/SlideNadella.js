import Silk from "../Silk";

export default function SlideNadella() {
  return (
    <section className="slide figma-slide figma-nadella figma-silk" data-ch="2" data-title="나델라의 메시지">
      <div className="figma-silk__bg" aria-hidden="true">
        <Silk
          speed={4.5}
          scale={0.5}
          color="#6690FF"
          color2="#E0E7EF"
          noiseIntensity={0.4}
          rotation={0.12}
        />
      </div>

      <div className="figma-slide__inner figma-nadella__content">
        <div className="figma-pill rv" style={{ "--rd": "300ms" }}>
          EXTERNAL SIGNAL
        </div>

        <h2 className="figma-nadella__quote rv head" style={{ "--rd": "800ms" }}>
          “일은 떠넘길 수 있어도,
          <br />
          <span className="figma-underline-anim">학습은</span> 절대 떠넘길 수 없다.“
        </h2>

        <div className="figma-nadella__meta rv soft" style={{ "--rd": "1700ms" }}>
          <p className="figma-nadella__author">SATYA NADELLA</p>
          <p>승부는 ‘가장 좋은 모델’을 고르는 것에서 나아가,</p>
          <p>
            모델 위에 ‘<strong className="figma-nadella__meta-em">학습 루프</strong>’를 얹는 것에서 결정지어진다.
          </p>
        </div>
      </div>
    </section>
  );
}
