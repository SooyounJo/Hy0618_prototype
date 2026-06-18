import DarkVeil from "../DarkVeil";

export default function SlideFord() {
  return (
    <section
      className="slide figma-slide figma-ford figma-silk"
      id="ford"
      data-ch="1"
      data-title="포드 · 다시 설계할 시점"
    >
      <div className="figma-silk__bg" aria-hidden="true">
        <DarkVeil
          color1="#050814"
          color2="#7f5af0"
          color3="#b2c5ff"
          noiseIntensity={0.03}
          scanlineIntensity={0}
          speed={1.0}
          scanlineFrequency={3.5}
          warpAmount={0.4}
          resolutionScale={1.0}
          centerY={-0.1}
        />
      </div>

      <div className="figma-slide__inner figma-ford__content">
        <div className="figma-pill rv" style={{ "--rd": "300ms" }}>
          1908
        </div>

        <h2 className="figma-ford__quote rv head" style={{ "--rd": "800ms" }}>
          “고객은 어떤 색이든 고를 수 있습니다. 물론,{" "}
          <span className="figma-ford__quote-em">검정</span>일 경우에만요.“
        </h2>

        <p className="figma-ford__who rv soft" style={{ "--rd": "1700ms" }}>
          Henry Ford · Model T
        </p>
      </div>
    </section>
  );
}
